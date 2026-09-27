import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { CMSContextType, CMSData } from "./types";
import { allImages } from "../data/gallery";
import { keyFaculty } from "../data/faculty";
import { newsItems, testimonials } from "../data/home";
import { achievements, higherSecondary, courses } from "../data/academic";

const defaultData: CMSData = {
  galleryImages: allImages,
  facultyMembers: keyFaculty,
  newsItems,
  testimonials,
  achievements,
  higherSecondary,
  courses,
};

export const CMSContext = createContext<CMSContextType | null>(null);

export const useCMS = (): CMSContextType => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
};

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CMSData>(() => {
    const saved = localStorage.getItem("ngess-cms-data");
    if (saved) {
      try {
        return JSON.parse(saved) as CMSData;
      } catch (e) {
        console.error("Failed to parse CMS data from localStorage", e);
        return defaultData;
      }
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem("ngess-cms-data", JSON.stringify(data));
  }, [data]);

  return (
    <CMSContext.Provider value={{ data, setData }}>
      {children}
    </CMSContext.Provider>
  );
};