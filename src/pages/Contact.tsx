import React, { useState } from "react";
import { useSEO } from "../lib/useSEO";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Calendar, CheckCircle } from "lucide-react";
import { SCHOOL_INFO } from "../data/site";
import { submitSchoolForm } from "../lib/formSubmission";
import { useTranslation } from "../lib/useTranslation";

const contactItems = [
  { icon: MapPin, key: "address" as const, detail: SCHOOL_INFO.address },
  { icon: Phone, key: "phone" as const, detail: SCHOOL_INFO.phone },
  { icon: Mail, key: "email" as const, detail: SCHOOL_INFO.email },
  { icon: Calendar, key: "hours" as const, detail: SCHOOL_INFO.officeHours },
];

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "12px 16px",
  border: hasError ? "1.5px solid #EF4444" : "1.5px solid #BBF7D0",
  borderRadius: "12px",
  fontSize: "14px",
  color: "#0F172A",
  background: "#FAFFFE",
  outline: "none",
  boxSizing: "border-box",
});

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#0F172A",
};

const Contact = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useSEO({
    title: "Contact Us",
    description:
      "Get in touch with Smt Gayatri Devi Sr.Sec Vidya Mandir in Aligarh, UP. Reach us via phone, email, WhatsApp or visit our campus in Majupur (Gonda).",
    path: "/contact",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email format";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    void (async () => {
      try {
        const submittedAt = new Date().toLocaleString("en-NP", {
          dateStyle: "medium",
          timeStyle: "short",
        });

        await submitSchoolForm({
          formName: "Website Contact Us",
          subject: `Smt Gayatri Devi Contact Us — ${formData.subject}`,
          replyTo: formData.email,
          fields: {
            "Submission Title": "Smt Gayatri Devi Website Contact Us",
            "Submission Category": "General Contact Message",
            "Submitted At": submittedAt,
            "Source Page": window.location.href,
            "Sender Name": formData.name,
            "Reply Email": formData.email,
            "Message Subject": formData.subject,
            "Message Content": formData.message,
            "Follow-up Required": "Reply to this website enquiry",
          },
        });

        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "We couldn't send your message right now.",
        );
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "64px",
          background: "linear-gradient(135deg, #00864B 0%, #047857 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating dots overlay */}
        {[
          { size: 300, top: "-80px", right: "-60px", opacity: 0.08 },
          { size: 180, bottom: "-40px", left: "5%", opacity: 0.1 },
          { size: 100, top: "30%", right: "18%", opacity: 0.07 },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: "#A7F3D0",
              opacity: dot.opacity,
              top: (dot as any).top,
              bottom: (dot as any).bottom,
              left: (dot as any).left,
              right: (dot as any).right,
              pointerEvents: "none",
            }}
          />
        ))}

        <div
          className="max-w-7xl mx-auto px-4"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "6px 18px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                marginBottom: "20px",
              }}
            >
              {t.contact.hero.tag}
            </span>
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                fontFamily: "serif",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              {t.contact.hero.title}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "16px",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t.contact.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section
        style={{
          background: "#FFFFFF",
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "32px",
              }}
            >
              Reach Us
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {contactItems.map(({ icon: Icon, key, detail }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 24px rgba(0,134,75,0.10)",
                  }}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #BBF7D0",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    cursor: "default",
                    transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      minWidth: "44px",
                      borderRadius: "10px",
                      background: "#F0FDF4",
                      color: "#00864B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "4px",
                        fontSize: "15px",
                      }}
                    >
                      {t.contact.info[key]}
                    </h4>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #BBF7D0",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginBottom: "20px",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  background: "#F0FDF4",
                  color: "#00864B",
                  border: "1.5px solid #BBF7D0",
                }}
              >
                <CheckCircle size={18} style={{ flexShrink: 0 }} />
                Your message has been sent successfully!
              </motion.div>
            )}

            {submitError && (
              <div
                style={{
                  marginBottom: "20px",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  background: "#FEF2F2",
                  color: "#B91C1C",
                  border: "1.5px solid #FECACA",
                }}
              >
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    {t.contact.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle(!!errors.name)}
                  />
                  {errors.name && (
                    <span style={{ color: "#EF4444", fontSize: "12px" }}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && (
                    <span style={{ color: "#EF4444", fontSize: "12px" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="contact-subject" style={labelStyle}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Inquiry about Admission"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle(!!errors.subject)}
                />
                {errors.subject && (
                  <span style={{ color: "#EF4444", fontSize: "12px" }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: "28px" }}>
                <label htmlFor="contact-message" style={labelStyle}>
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle(!!errors.message),
                    resize: "vertical",
                  }}
                />
                {errors.message && (
                  <span style={{ color: "#EF4444", fontSize: "12px" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#00864B",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── School Documents & Information Section ── */}
      <section
        style={{
          padding: "64px 16px",
          background: "linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)",
          minHeight: "auto",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 800,
                color: "#0F172A",
                marginBottom: "12px",
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              }}
            >
              School Documents & Certifications
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Access important school documents, certifications, and official
              information
            </p>
          </motion.div>

          {/* Documents Grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}
          >
            {/* Affiliation & Recognition Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div
                  style={{
                    padding: "20px 24px",
                    borderBottom: "1px solid #E2E8F0",
                    background:
                      "linear-gradient(135deg, #00864B 0%, #047857 100%)",
                  }}
                >
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    A. AFFILIATION & RECOGNITION
                  </h3>
                </div>
                <div style={{ padding: "24px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "14px",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          borderBottom: "2px solid #E2E8F0",
                          backgroundColor: "#F8FAFC",
                        }}
                      >
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Document
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation, if any",
                          "https://www.santsarpublicschool.in/pdf/grantletter.pdf",
                        ],
                        [
                          "Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable",
                          "http://www.santsarpublicschool.in/pdf/Trustreg.pdf",
                        ],
                        [
                          "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT",
                          "http://www.santsarpublicschool.in/pdf/nocrecog.pdf",
                        ],
                        [
                          "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
                          "http://www.santsarpublicschool.in/pdf/recognitionapp.pdf",
                        ],
                        [
                          "Copy of Valid Building Safety Certificate as per the National Building Code",
                          "https://www.santsarpublicschool.in/pdf/buildingcertificate.pdf",
                        ],
                        [
                          "Copy of Valid Fire Safety Certificate issued by the Competent Authority",
                          "http://www.santsarpublicschool.in/pdf/firenoc.pdf",
                        ],
                        [
                          "Copy of the Self Certification submitted by the School for Affiliation/Upgradation/Extension of Affiliation",
                          "http://www.santsarpublicschool.in/pdf/selfcertification.pdf",
                        ],
                        [
                          "Copies of Valid Water, Health and Sanitation Certificates",
                          "http://www.santsarpublicschool.in/pdf/Watercertificate.pdf",
                        ],
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: "1px solid #E2E8F0",
                            transition: "background-color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#F0FDF4")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "transparent")
                          }
                        >
                          <td style={{ padding: "12px", color: "#0F172A" }}>
                            {row[0]}
                          </td>
                          <td style={{ padding: "12px" }}>
                            <a
                              href={row[1]}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#00864B",
                                textDecoration: "none",
                                fontWeight: 600,
                                transition: "color 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#047857")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "#00864B")
                              }
                            >
                              📄 View Document
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Results & Academics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div
                  style={{
                    padding: "20px 24px",
                    borderBottom: "1px solid #E2E8F0",
                    background:
                      "linear-gradient(135deg, #00864B 0%, #047857 100%)",
                  }}
                >
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    B. RESULTS & ACADEMICS
                  </h3>
                </div>
                <div style={{ padding: "24px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "14px",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          borderBottom: "2px solid #E2E8F0",
                          backgroundColor: "#F8FAFC",
                        }}
                      >
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Document
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Fee Structure of the School",
                          "http://www.santsarpublicschool.in/pdf/feestructure.pdf",
                        ],
                        [
                          "Annual Academic Calendar",
                          "http://www.santsarpublicschool.in/pdf/calendar.pdf",
                        ],
                        [
                          "List of School Management Committee (SMC)",
                          "http://www.santsarpublicschool.in/pdf/SMC.pdf",
                        ],
                        [
                          "List of Parents Teachers Association (PTA) Members",
                          "http://www.santsarpublicschool.in/pdf/PTA.pdf",
                        ],
                        [
                          "Last Three-Year Result of the Board Examination as per Applicability",
                          "eg.www.schoolwebsite.com/Link_of_ThreeYearRsult",
                        ],
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: "1px solid #E2E8F0",
                            transition: "background-color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#F0FDF4")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "transparent")
                          }
                        >
                          <td style={{ padding: "12px", color: "#0F172A" }}>
                            {row[0]}
                          </td>
                          <td style={{ padding: "12px" }}>
                            <a
                              href={row[1]}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#00864B",
                                textDecoration: "none",
                                fontWeight: 600,
                                transition: "color 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#047857")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "#00864B")
                              }
                            >
                              📄 View Document
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* School Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div
                  style={{
                    padding: "20px 24px",
                    borderBottom: "1px solid #E2E8F0",
                    background:
                      "linear-gradient(135deg, #00864B 0%, #047857 100%)",
                  }}
                >
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    C. SCHOOL INFRASTRUCTURE
                  </h3>
                </div>
                <div style={{ padding: "24px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "14px",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          borderBottom: "2px solid #E2E8F0",
                          backgroundColor: "#F8FAFC",
                        }}
                      >
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Document
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: 700,
                            color: "#0F172A",
                          }}
                        >
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid #E2E8F0",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#F0FDF4")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "transparent")
                        }
                      >
                        <td style={{ padding: "12px", color: "#0F172A" }}>
                          School Infrastructure & Inspection Video
                        </td>
                        <td style={{ padding: "12px" }}>
                          <a
                            href="https://www.youtube.com/watch?v=Dk1KCyAZ-jU"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#00864B",
                              textDecoration: "none",
                              fontWeight: 600,
                              transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#047857")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#00864B")
                            }
                          >
                            🎥 Watch Video
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ height: "440px", width: "100%" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(SCHOOL_INFO.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${SCHOOL_INFO.name} Location`}
        />
      </section>
    </div>
  );
};

export default Contact;
