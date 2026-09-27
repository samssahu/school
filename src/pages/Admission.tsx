import { useState, useRef } from "react";
import { useSEO } from "../lib/useSEO";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GlassCard } from "../components/ui/GlassCard";
import { GlassButton } from "../components/ui/GlassButton";
import { GlassInput } from "../components/ui/GlassInput";
import { GlassSelect } from "../components/ui/GlassInput";
import { classOptions, ADMISSION_SUCCESS } from "../data/admission";
import { submitSchoolForm } from "../lib/formSubmission";
import { useTranslation } from "../lib/useTranslation";

const Admission = () => {
  const t = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    applyingForClass: "",
    gender: "",
    seeGpa: "",
    previousSchool: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
  });
  const class11Selected = [
    "class-11-science",
    "class-11-commerce",
    "class-11-arts",
  ].includes(formData.applyingForClass);
  const admissionClassOptions = [
    { value: "", label: "Select Class" },
    ...classOptions,
  ];
  const selectedClassLabel =
    admissionClassOptions.find(
      (option) => option.value === formData.applyingForClass,
    )?.label || "Not selected";

  const handleInputChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value;

      setFormData((current) => {
        const next = { ...current, [field]: value };

        if (
          field === "applyingForClass" &&
          !["class-11-science", "class-11-commerce", "class-11-arts"].includes(
            value,
          )
        ) {
          next.seeGpa = "";
          next.previousSchool = "";
        }

        return next;
      });
    };

  useSEO({
    title: "Admission",
    description:
      "Apply for admission at Smt Gayatri Devi Sr.Sec Vidya Mandir in Majupur, Aligarh, UP. Open for Kindergarten to Class 12 in Science, Commerce & Arts.",
    path: "/admission",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;

    if (!form || !form.checkValidity()) {
      form?.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const submittedAt = new Date().toLocaleString("en-NP", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await submitSchoolForm({
        formName: "Website Admission Form",
        subject: `Smt Gayatri Devi Admission Form — ${selectedClassLabel}`,
        replyTo: formData.guardianEmail,
        fields: {
          "Submission Title": "Smt Gayatri Devi Website Admission Form",
          "Submission Category": "Admission Enquiry",
          "Submitted At": submittedAt,
          "Source Page": window.location.href,
          "Student Name": formData.studentName,
          "Date of Birth": formData.dateOfBirth,
          "Requested Class": selectedClassLabel,
          Gender: formData.gender,
          "SEE GPA": class11Selected ? formData.seeGpa : "N/A",
          "Previous CBSE Passed School": class11Selected
            ? formData.previousSchool
            : "N/A",
          "Parent / Guardian Name": formData.guardianName,
          "Parent / Guardian Email": formData.guardianEmail,
          "Parent / Guardian Phone": formData.guardianPhone,
          "Follow-up Required": "Admissions team should contact this applicant",
        },
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't submit the application right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted)
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <GlassCard intensity="strong" className="text-center max-w-md p-12">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2
            className="text-3xl font-serif font-bold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {ADMISSION_SUCCESS.title}
          </h2>
          <p
            className="text-sm mb-8 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {ADMISSION_SUCCESS.message}
          </p>
          <Link to="/">
            <GlassButton variant="secondary">← Return to Home</GlassButton>
          </Link>
        </GlassCard>
      </div>
    );

  return (
    <div>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>{t.admission.hero.tag}</SectionLabel>
            <h1
              className="text-4xl lg:text-5xl font-serif font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {t.admission.hero.title}
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {t.admission.hero.subtitle}
            </p>
          </div>

          <GlassCard intensity="mid" className="p-8 lg:p-12">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
              {submitError && (
                <div
                  className="rounded-xl border px-4 py-3 text-sm font-medium"
                  style={{
                    color: "#B91C1C",
                    backgroundColor: "#FEF2F2",
                    borderColor: "#FECACA",
                  }}
                >
                  {submitError}
                </div>
              )}

              {/* Student Info */}
              <fieldset className="space-y-5">
                <legend
                  className="text-sm font-bold uppercase tracking-widest pb-3 w-full"
                  style={{
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--glass-border)",
                  }}
                >
                  Student Information
                </legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassInput
                    id="admission-student-name"
                    name="studentName"
                    label="Full Name"
                    type="text"
                    placeholder="Student's Full Name"
                    autoComplete="name"
                    value={formData.studentName}
                    onChange={handleInputChange("studentName")}
                    required
                  />
                  <GlassInput
                    id="admission-date-of-birth"
                    name="dateOfBirth"
                    label="Date of Birth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange("dateOfBirth")}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassSelect
                    id="admission-class"
                    name="applyingForClass"
                    label="Applying for Class"
                    options={admissionClassOptions}
                    value={formData.applyingForClass}
                    onChange={handleInputChange("applyingForClass")}
                    required
                  />
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Gender
                    </label>
                    <div
                      className="flex gap-6 p-3.5 rounded-xl"
                      style={{
                        backgroundColor: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                      }}
                    >
                      {["Male", "Female", "Other"].map((g) => (
                        <label
                          key={g}
                          className="flex items-center gap-2 text-sm cursor-pointer"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={formData.gender === g}
                            onChange={handleInputChange("gender")}
                            required={g === "Male"}
                            style={{ accentColor: "var(--accent)" }}
                          />{" "}
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {class11Selected && (
                  <div className="space-y-5 pt-2">
                    <div
                      style={{
                        height: "1px",
                        background: "var(--glass-border)",
                      }}
                    />
                    <div className="grid md:grid-cols-2 gap-5">
                      <GlassInput
                        id="admission-see-gpa"
                        name="seeGpa"
                        label="SEE GPA"
                        type="number"
                        min="0"
                        max="4"
                        step="0.01"
                        placeholder="e.g. 3.85"
                        value={formData.seeGpa}
                        onChange={handleInputChange("seeGpa")}
                        required
                      />
                      <GlassInput
                        id="admission-previous-school"
                        name="previousSchool"
                        label="Previous CBSE Passed School"
                        type="text"
                        placeholder="Name of school"
                        value={formData.previousSchool}
                        onChange={handleInputChange("previousSchool")}
                        required
                      />
                    </div>
                  </div>
                )}
              </fieldset>

              {/* Parent Info */}
              <fieldset className="space-y-5">
                <legend
                  className="text-sm font-bold uppercase tracking-widest pb-3 w-full"
                  style={{
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--glass-border)",
                  }}
                >
                  Parent / Guardian Information
                </legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassInput
                    id="admission-guardian-name"
                    name="guardianName"
                    label="Parent / Guardian Name"
                    type="text"
                    placeholder="Full Name"
                    autoComplete="name"
                    value={formData.guardianName}
                    onChange={handleInputChange("guardianName")}
                    required
                  />
                  <GlassInput
                    id="admission-guardian-email"
                    name="guardianEmail"
                    label="Parent / Guardian Email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    value={formData.guardianEmail}
                    onChange={handleInputChange("guardianEmail")}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassInput
                    id="admission-guardian-phone"
                    name="guardianPhone"
                    label="Contact Number"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    autoComplete="tel"
                    value={formData.guardianPhone}
                    onChange={handleInputChange("guardianPhone")}
                    required
                  />
                </div>
              </fieldset>

              <GlassButton
                variant="accent"
                size="lg"
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </GlassButton>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Admission;
