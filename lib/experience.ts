export type ExperienceItem = {
  period: string;
  pill?: string;
  title: string;
  org: string;
  description?: string;
};

export const EXPERIENCE_STATS = {
  publications: "24",
  yearsOfExperience: new Date().getFullYear() - 2018,
  conferences: "6+",
  awards: "9+",
};

export type ExperienceCategory = {
  id:
    | "research"
    | "teaching"
    | "leadership"
    | "volunteer"
    | "education"
    | "awards";
  label: string;
  items: ReadonlyArray<ExperienceItem>;
};

const researchExperience = [
  {
    period: "2023 - 2027",
    pill: "Research Experience",
    title: "Doctoral Researcher",
    org: "Monash University Malaysia",
    description:
      "Conducted in-depth research in civil engineering, focusing on applying Geospatial Artificial Intelligence (GeoAI) to support sustainable development.",
  },
  {
    period: "2019 - 2021",
    pill: "Research Experience",
    title: "Graduate Research Assistant",
    org: "Universiti Teknologi Petronas Malaysia",
    description:
      "Conducted in-depth research on applying geospatial analytics for air pollution to support sustainable development.",
  },
  {
    period: "2018 - 2022",
    pill: "Research Experience",
    title: "Rhodium Research Cloud Scientist",
    org: "Foresight Institute of Research and Translation Nigeria",
    description:
      "Drafted research papers for peer-reviewed publication and presented research findings at international conferences.",
  },
  {
    period: "2016",
    pill: "Research Experience",
    title: "Geospatial Analyst Intern",
    org: "Aerial-View Solution International, Nigeria",
    description:
      "Collaborated with team members to perform geospatial analysis on high-resolution imagery, contributing to multiple projects.",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

const teachingExperience = [
  {
    period: "2023 - 2027",
    pill: "Teaching Experience",
    title: "Teaching Assistant",
    org: "Department of Civil Engineering, Monash University",
    description:
      "Designed and evaluated assessments, delivered practical ArcGIS Pro demonstrations, and supported students during lectures.",
  },
  {
    period: "2019 - 2021",
    pill: "Teaching Experience",
    title: "Teaching Assistant, GIS for Civil Engineers",
    org: "Department of Civil & Environmental Engineering, Universiti Teknologi Petronas",
    description:
      "Designed and delivered tutorials, developed assessments, and conducted hands-on lab demonstrations using ArcGIS and QGIS.",
  },
  {
    period: "2019 - 2021",
    pill: "Teaching Experience",
    title: "Instructor, Geomatics",
    org: "Department of Civil & Environmental Engineering, Universiti Teknologi Petronas",
    description:
      "Delivered lectures and practical lessons on surveying techniques, GPS applications, and assessed student progress.",
  },
  {
    period: "2019 - 2021",
    pill: "Mentoring Experience",
    title: "Graduate Mentor, Undergraduates' Final Year Project",
    org: "Department of Civil & Environmental Engineering, Universiti Teknologi Petronas",
    description:
      "Mentored six undergraduates and supported projects applying ML for forest fires, erosion, flooding, and risk mapping.",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

const leadershipExperience = [
  {
    period: "2024 - 2025",
    pill: "Leadership Experience",
    title: "Editor-in-Chief",
    org: "Say Yes N’ Collaborate (SYNC) Magazine, Monash University",
    description:
      "Led editorial planning, coordinated contributors/designers, and guided magazine direction, tone, and style.",
  },
  {
    period: "2018 - 2021",
    pill: "Leadership Experience",
    title: "Head, The Rhodium Cloud Scientist",
    org: "FIRAT",
    description:
      "Led a team developing cloud-based solutions, coordinated stakeholders, and guided research direction and resourcing.",
  },
  {
    period: "2018 - 2019",
    pill: "Leadership Experience",
    title: "Secretary, Undergraduate Conference Planning Committee",
    org: "FIRAT",
    description:
      "Coordinated conference planning, managed speaker/attendee communications, and supported budgeting and logistics.",
  },
  {
    period: "2012 - 2020",
    pill: "Leadership Experience",
    title: "Vice President",
    org: "Old Student Association of Al-Ameen Group of Schools",
    description:
      "Assisted association leadership, coordinated member activities, and represented the association externally.",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

const volunteerExperience = [
  {
    period: "2018 - 2022",
    pill: "Volunteer Experience",
    title: "Volunteer Research Scientist",
    org: "Foresight Institute of Research and Translation, Nigeria",
    description:
      "Led website content planning, organized undergraduate conferences, and supported academic engagement.",
  },
  {
    period: "2014 - 2016",
    pill: "Volunteer Experience",
    title: "Pioneer Grand Ambassador",
    org: "The Torchbearer, FUTA Chapter, Nigeria",
    description:
      "Coordinated symposiums and competitions, facilitated tutorials, and supported students with exam prep resources.",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

const education = [
  {
    period: "2023 - 2027",
    title: "Doctor of Philosophy (PhD)",
    org: "Monash University Malaysia",
    description:
      "Major: Geospatial Artificial Intelligence (GeoAI) and Flood Modelling",
  },
  {
    period: "2019 - 2022",
    title: "Master of Science (MSc)",
    org: "Universiti Teknologi Petronas Malaysia",
    description: "Major: Environmental and Geomatics Engineering",
  },
  {
    period: "2012 - 2017",
    title: "Bachelor of Technology (B.Tech)",
    org: "Federal University of Technology Akure, Nigeria",
    description: "Major: Remote sensing and geospatial science",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

const awards = [
  {
    period: "2024",
    title: "Letter of Commendation for Teaching Excellence",
    org: "Monash University Malaysia",
  },
  {
    period: "2024",
    title: "Best Student Paper Award",
    org: "IEEE GRSS Conference",
  },
] as const satisfies ReadonlyArray<ExperienceItem>;

export const EXPERIENCE_CATEGORIES = [
  {
    id: "research",
    label: "Research",
    items: researchExperience,
  },
  {
    id: "teaching",
    label: "Teaching & Mentoring",
    items: teachingExperience,
  },
  {
    id: "leadership",
    label: "Leadership",
    items: leadershipExperience,
  },
  {
    id: "volunteer",
    label: "Volunteer",
    items: volunteerExperience,
  },
  {
    id: "education",
    label: "Education",
    items: education,
  },
  {
    id: "awards",
    label: "Awards",
    items: awards,
  },
] as const satisfies ReadonlyArray<ExperienceCategory>;
