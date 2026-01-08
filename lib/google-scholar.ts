import { unstable_cache } from "next/cache";

export interface ScholarArticle {
  title: string;
  link?: string;
  citation_id?: string;
  authors?: string;
  publication?: string;
  cited_by?: {
    value: number;
    link: string;
    serpapi_link?: string;
    cites_id: string;
  };
  year?: string;
}

export interface ScholarProfile {
  name: string;
  affiliations: string;
  email?: string;
  interests?: Array<{ title: string; link?: string; serpapi_link?: string }>;
  thumbnail?: string;
}

export interface ScholarData {
  search_metadata: {
    id: string;
    status: string;
    created_at: string;
    processed_at: string;
    total_time_taken: number;
  };
  search_parameters: {
    engine: string;
    author_id?: string;
  };
  author?: ScholarProfile;
  articles?: ScholarArticle[];
  cited_by?: {
    table?: Array<{
      citations?: { all: number; [key: string]: number };
      h_index?: { all: number; [key: string]: number };
      i10_index?: { all: number; [key: string]: number };
    }>;
    graph?: Array<{ year: number; citations: number }>;
  };
  co_authors?: Array<{
    name: string;
    link?: string;
    serpapi_link?: string;
    author_id?: string;
    affiliations?: string;
    email?: string;
    thumbnail?: string;
  }>;
}

async function fetchScholarData(authorId: string): Promise<ScholarData | null> {
  const apiKey = process.env.SERP_API_KEY;

  if (!apiKey) {
    console.warn("SERP_API_KEY not found in environment variables");
    return null;
  }

  try {
    const url = new URL("https://serpapi.com/search");
    url.searchParams.set("engine", "google_scholar_author");
    url.searchParams.set("author_id", authorId);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("num", "20"); // Get up to 20 publications

    const response = await fetch(url.toString(), {
      next: { revalidate: false }, // We'll handle caching with unstable_cache
    });

    if (!response.ok) {
      console.error(
        `SERP API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = (await response.json()) as ScholarData;
    return data;
  } catch (error) {
    console.error("Error fetching Google Scholar data:", error);
    return null;
  }
}

// Cache the Scholar data for 3 days (259200 seconds)
export const getCachedScholarData = unstable_cache(
  async (authorId: string) => {
    return fetchScholarData(authorId);
  },
  ["google-scholar-data"],
  {
    revalidate: 259200, // 3 days in seconds
    tags: ["scholar"],
  }
);

export async function getScholarPublications(
  authorId?: string
): Promise<ScholarArticle[]> {
  const scholarId = authorId || process.env.GOOGLE_SCHOLAR_ID;

  if (!scholarId) {
    console.warn("GOOGLE_SCHOLAR_ID not found in environment variables");
    return [];
  }

  const data = await getCachedScholarData(scholarId);

  if (!data || !data.articles) {
    return [];
  }

  // Sort publications by year in descending order (newest first)
  return data.articles.sort((a, b) => {
    const yearA = parseInt(a.year || "0");
    const yearB = parseInt(b.year || "0");
    return yearB - yearA;
  });
}

export async function getScholarProfile(
  authorId?: string
): Promise<ScholarProfile | null> {
  const scholarId = authorId || process.env.GOOGLE_SCHOLAR_ID;

  if (!scholarId) {
    console.warn("GOOGLE_SCHOLAR_ID not found in environment variables");
    return null;
  }

  const data = await getCachedScholarData(scholarId);

  if (!data || !data.author) {
    return null;
  }

  return data.author;
}

export async function getScholarCitationStats(authorId?: string): Promise<{
  totalCitations: number;
  citationsRecent: number;
  recentYear: number;
  hIndex: number;
  i10Index: number;
  citationGraph: Array<{ year: number; citations: number }>;
} | null> {
  const scholarId = authorId || process.env.GOOGLE_SCHOLAR_ID;

  if (!scholarId) {
    return null;
  }

  const data = await getCachedScholarData(scholarId);

  if (!data || !data.cited_by) {
    return null;
  }

  const table = data.cited_by.table || [];
  const graph = data.cited_by.graph || [];

  // Find the "since_XXXX" key dynamically
  const citationsObj = table[0]?.citations || {};
  const sinceKey = Object.keys(citationsObj).find((key) =>
    key.startsWith("since_")
  );
  const recentYear = sinceKey
    ? parseInt(sinceKey.replace("since_", ""))
    : new Date().getFullYear() - 5;
  const citationsRecent = sinceKey
    ? (citationsObj[sinceKey as keyof typeof citationsObj] as number)
    : 0;

  return {
    totalCitations: table[0]?.citations?.all || 0,
    citationsRecent,
    recentYear,
    hIndex: table[1]?.h_index?.all || 0,
    i10Index: table[2]?.i10_index?.all || 0,
    citationGraph: graph,
  };
}
