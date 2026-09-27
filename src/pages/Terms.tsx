import { useTranslation } from "../lib/useTranslation";
import { useSEO } from "../lib/useSEO";
import { Link } from "react-router-dom";

const Terms = () => {
  const t = useTranslation();
  useSEO({
    title: "Terms of Service",
    description:
      "Terms of service for using the Smt Gayatri Devi Sr.Sec Vidya Mandir website. Read our terms and conditions.",
    path: "/terms",
  });
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Last updated: May 3, 2026
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Smt Gayatri Devi Sr.Sec Vidya Mandir
            website, you accept and agree to be bound by these Terms of Service.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Smt Gayatri Devi Sr.Sec Vidya Mandir and
            is protected by applicable copyright laws.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            Smt Gayatri Devi Sr.Sec Vidya Mandir shall not be liable for any
            indirect, incidental, or consequential damages arising from your use
            of the website.
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

export default Terms;
