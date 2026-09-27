import type { GalleryImage } from "../lib/types";

// ─── Full Gallery (Gallery page — filterable) ─────────────────────────────────

export const allImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/webp/schoolpic.jpg",
    label: "Main Building",
    category: "Campus",
  },
  {
    id: 2,
    src: "/images/webp/college5.webp",
    label: "School Block",
    category: "Campus",
  },
  {
    id: 3,
    src: "/images/webp/college3.webp",
    label: "Cultural Performance",
    category: "Cultural",
  },
  {
    id: 4,
    src: "/images/webp/college2.webp",
    label: "School Campus",
    category: "Campus",
  },
  {
    id: 5,
    src: "/images/webp/college1.webp",
    label: "Science Lab",
    category: "Academics",
  },
  {
    id: 6,
    src: "/images/webp/college2.webp",
    label: "Hotel Mgmt Lab",
    category: "Academics",
  },
  {
    id: 7,
    src: "/images/webp/college5.webp",
    label: "School Grounds",
    category: "Campus",
  },
  {
    id: 8,
    src: "/images/webp/college6.webp",
    label: "Computer Lab",
    category: "Academics",
  },
  {
    id: 9,
    src: "/images/webp/college1.webp",
    label: "Science Exhibition",
    category: "Events",
  },
  {
    id: 10,
    src: "/images/webp/12.webp",
    label: "Classroom Session",
    category: "Academics",
  },
  {
    id: 11,
    src: "/images/webp/college5.webp",
    label: "Student Innovation",
    category: "Events",
  },
  {
    id: 12,
    src: "/images/webp/college3.webp",
    label: "Campus Frontage",
    category: "Campus",
  },
];

export const galleryCategories = [
  "All",
  "Campus",
  "Events",
  "Academics",
  "Cultural",
] as const;

// ─── Video Highlights ─────────────────────────────────────────────────────────

export const videoHighlights = [
  { title: "Campus Tour 2025" },
  { title: "Annual Day Highlights 2025" },
];
