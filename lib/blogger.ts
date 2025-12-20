export type BloggerPost = {
  id: string;
  title: string;
  content: string;
  url?: string;
};

export type NormalizedPost = {
  id: string;
  title: string;
  html?: string;
  url?: string;
  imageUrl?: string;
};

function extractFirstImageUrl(html: string): string | undefined {
  const imgRegex = /<img[^>]*src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match?.[1];
}

function extractFirstLinkUrl(html: string): string | undefined {
  const urlRegex = /<a[^>]*href="([^">]+)"/;
  const match = html.match(urlRegex);
  return match?.[1];
}

export async function fetchBloggerPosts(
  blogId: string
): Promise<NormalizedPost[]> {
  const apiKey = process.env.BLOGGER_API_KEY;

  if (!apiKey) {
    return [];
  }

  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as { items?: BloggerPost[] };

  return (
    data.items?.map((post) => {
      const imageUrl = extractFirstImageUrl(post.content);
      const url = extractFirstLinkUrl(post.content) ?? post.url;

      return {
        id: post.id,
        title: post.title,
        html: post.content,
        url,
        imageUrl,
      };
    }) ?? []
  );
}

export async function fetchBloggerPost(
  blogId: string,
  postId: string
): Promise<NormalizedPost | null> {
  const apiKey = process.env.BLOGGER_API_KEY;

  if (!apiKey) {
    return null;
  }

  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    return null;
  }

  const post = (await response.json()) as BloggerPost;
  const imageUrl = extractFirstImageUrl(post.content);
  const url = extractFirstLinkUrl(post.content) ?? post.url;

  return {
    id: post.id,
    title: post.title,
    html: post.content,
    url,
    imageUrl,
  };
}
