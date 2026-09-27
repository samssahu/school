import {
  GraduationCap,
  BookOpen,
  Microscope,
  Briefcase,
  Plane,
  Trophy,
  Award,
  Star,
  Medal,
} from "lucide-react";
import type { Course, Achievement, HigherSecondaryStream } from "../lib/types";

// ─── Academic Programmes (K–10) ───────────────────────────────────────────────

export const courses: Course[] = [
  {
    title: "Kindergarten",
    levels: "Nursery – UKG",
    desc: "Foundation years focusing on play, social skills, and basic literacy.",
    icon: BookOpen,
  },
  {
    title: "Primary Level",
    levels: "Class 1 – 5",
    desc: "Core subjects including English, Maths, Science, and Social Studies.",
    icon: GraduationCap,
  },
  {
    title: "Secondary Level",
    levels: "Class 6 – 12",
    desc: "Advanced curriculum preparing students for the SEE examination.",
    icon: Microscope,
  },
];

// ─── Higher Secondary Streams (Class 11 & 12) ─────────────────────────────────

export const higherSecondary: HigherSecondaryStream[] = [
  {
    title: "Science & Computer Science",
    desc: "Physics, Chemistry, Biology, Maths, and CS for medical/engineering/IT paths.",
    icon: Microscope,
  },
  {
    title: "Commerce",
    desc: "Business studies, Accountancy, and Economics for future entrepreneurs.",
    icon: Briefcase,
  },
  {
    title: "Arts",
    desc: "Humanities and social sciences for students interested in literature, history, and culture.",
    icon: Plane,
  },
];

// ─── School Achievements ──────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Best Secondary School – Western Region",
    desc: "Awarded by the Ministry of Education for outstanding academic performance.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "National Science Fair Champions",
    desc: "Students secured first position in the National Science and Innovation Fair.",
    icon: Award,
  },
  {
    year: "2023",
    title: "100% SEE Pass Rate",
    desc: "Perfect pass rate with 80% of students scoring A+.",
    icon: Star,
  },
  {
    year: "2022",
    title: "Excellence in Sports",
    desc: "Won the Regional Inter-School Football Championship and Athletics Meet.",
    icon: Medal,
  },
];
