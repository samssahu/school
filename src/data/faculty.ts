import type { FacultyMember } from "../lib/types";

// ─── Key Faculty Members (featured cards) ────────────────────────────────────

export const keyFaculty: FacultyMember[] = [
  {
    name: "Dr. Ram Sharma",
    role: "Head of Science",
    expertise: "Physics & Applied Sciences",
    photo: "https://picsum.photos/seed/faculty1/400/400",
  },
  {
    name: "Prof. Sita Karki",
    role: "Senior Lecturer",
    expertise: "Mathematics & Statistics",
    photo: "https://picsum.photos/seed/faculty2/400/400",
  },
  {
    name: "Mr. Hari Thapa",
    role: "CS Lead",
    expertise: "Software Engineering & AI",
    photo: "https://picsum.photos/seed/faculty3/400/400",
  },
  {
    name: "Ms. Gita Gurung",
    role: "Head of Management",
    expertise: "Business Administration",
    photo: "https://picsum.photos/seed/faculty4/400/400",
  },
];

// ─── Teaching Faculty Carousel (placeholder photos, count-driven) ─────────────

export const teachingFacultyCount = 8;

export const teachingFacultyPhotos = Array.from(
  { length: teachingFacultyCount },
  (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/faculty-${i + 1}/400/400`,
    alt: `Smt Gayatri Devi teaching faculty member`,
  }),
);
