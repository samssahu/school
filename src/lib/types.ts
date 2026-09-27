import React from "react";

export interface GalleryImage {
  id: number;
  src: string;
  label: string;
  category?: string;
  span?: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ElementType;
  desc?: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
  stat?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  expertise: string;
  photo: string;
}

export interface Achievement {
  year: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface Course {
  title: string;
  levels: string;
  desc: string;
  icon: React.ElementType;
}

export interface HigherSecondaryStream {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface VisionItem {
  title: string;
  icon: React.ElementType;
  desc: string;
}

export interface CMSData {
  galleryImages: GalleryImage[];
  facultyMembers: FacultyMember[];
  newsItems: NewsItem[];
  testimonials: Testimonial[];
  achievements: Achievement[];
  higherSecondary: HigherSecondaryStream[];
  courses: Course[];
}

export interface CMSContextType {
  data: CMSData;
  setData: React.Dispatch<React.SetStateAction<CMSData>>;
}
