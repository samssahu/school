import { useTranslation } from "../lib/useTranslation";
import { useSEO } from "../lib/useSEO";
import { Link } from "react-router-dom";

const Privacy = () => {
  const t = useTranslation();
  useSEO({
    title: "Privacy Policy",
    description:
      "Privacy policy of Smt Gayatri Devi Sr.Sec Vidya Mandir. Learn how we collect, use and protect your personal information.",
    path: "/privacy",
  });
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Last updated: May 3, 2026
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            Smt Gayatri Devi Sr.Sec Vidya Mandir collects information you
            provide directly when you fill out admission forms, contact us, or
            interact with our website.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>We use the information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Process admission applications</li>
            <li>Respond to inquiries</li>
            <li>Send important school updates (with your consent)</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a
              href="mailto:Dev.sharma0607@gmail.com"
              className="text-green-600 hover:underline"
            >
              Dev.sharma0607@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-green-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
