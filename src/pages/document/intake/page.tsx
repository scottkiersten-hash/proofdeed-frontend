import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost, validateHoneypot, createFormData, ERROR_MESSAGES } from "../../../lib/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DocumentIntake() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documentType: "",
    partyA: "",
    partyB: "",
    county: "",
    state: "",
    file: null as File | null,
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [proofId, setProofId] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateHoneypot(formData.website)) {
      setError("Invalid submission detected.");
      return;
    }

    if (
      !formData.documentType ||
      !formData.partyA ||
      !formData.partyB ||
      !formData.county ||
      !formData.state ||
      !formData.file
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = createFormData({
        documentType: formData.documentType,
        partyA: formData.partyA,
        partyB: formData.partyB,
        county: formData.county,
        state: formData.state,
        file: formData.file,
      });

      const response = await apiPost("/api/notary/intake", submitData);

      if (response.success) {
        setSuccess(true);
        setProofId(response.proofId || "");
      } else {
        if (response.code === "RATE_LIMIT") {
          setError(ERROR_MESSAGES.RATE_LIMIT);
        } else {
          setError(ERROR_MESSAGES.SUBMISSION_FAILED);
        }
      }
    } catch {
      setError(ERROR_MESSAGES.SUBMISSION_FAILED);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="max-w-2xl w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <i className="ri-check-line text-4xl text-white"></i>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Document Certified Successfully
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Your document has been cryptographically certified and recorded.
            </p>

            {proofId && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Proof ID
                </p>
                <p className="text-lg font-mono text-slate-900 break-all">
                  {proofId}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/verify"
                className="px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Verify This Proof
              </Link>

              <Link
                to="/document/intake"
                className="px-8 py-3 bg-slate-100 text-slate-900 text-base font-semibold rounded-lg hover:bg-slate-200 transition-colors"
              >
                Certify Another Document
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 pt-24">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-6"
          >
            <i className="ri-arrow-left-line"></i>
            Back
          </button>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Document Certification
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            Submit your deed, title, or closing document for secure certification.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-xl p-8"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-300"
            >
              {isSubmitting ? "Submitting..." : "Certify Document"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
