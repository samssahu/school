// ─── Admission Form Options ───────────────────────────────────────────────────

export const classOptions = [
  { value: "nursery", label: "Nursery" },
  { value: "lkg", label: "LKG" },
  { value: "ukg", label: "UKG" },
  ...Array.from({ length: 10 }, (_, i) => ({
    value: `class-${i + 1}`,
    label: `Class ${i + 1}`,
  })),
  { value: "class-11-science", label: "Class 11 (Science)" },
  { value: "class-11-commerce", label: "Class 11 (Commerce)" },
  { value: "class-11-arts", label: "Class 11 (Arts)" },
];

export const ADMISSION_SUCCESS = {
  title: "Application Received!",
  message:
    "Thank you for choosing Smt Gayatri Devi Sr.Sec Vidya Mandir. Our admissions team will review your application and contact you within 24 hours.",
};
