import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost, validateHoneypot, createFormData, ERROR_MESSAGES } from "../../../lib/api";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";

export default function LegalIntake() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documentType: "",
    partyA: "",
    partyB: "",
    county: "",
    state: "",
    file: null as File | null,
    website: "", // honeypot
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

    // Validate honeypot
    if (!validateHoneypot(formData.website)) {
      setError("Invalid submission detected.");
      return;
    }

    // Client-side validation
    if (!formData.documentType || !formData.partyA || !formData.partyB || 
        !formData.county || !formData.state || !formData.file) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData
      const submitData = createFormData({
        documentType: formData.documentType,
        partyA: formData.partyA,
        partyB: formData.partyB,
        county: formData.county,
        state: formData.state,
        file: formData.file,
      });

      // Submit to API
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
    } catch (err) {
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
              Your legal document has been cryptographically certified and recorded.
            </p>

            {proofId && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                <p className="text-sm font-semibold text-slate-700 mb-2">Proof ID</p>
                <p className="text-lg font-mono text-slate-900 break-all">{proofId}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/verify"
                className="px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify This Proof
              </Link>
              <Link
                to="/legal/intake"
                className="px-8 py-3 bg-slate-100 text-slate-900 text-base font-semibold rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap cursor-pointer"
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

      {/* Form Section */}
      <section className="py-16 pt-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-6 cursor-pointer transition-colors"
            >
              <i className="ri-arrow-left-line"></i>
              Back
            </button>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Legal Document Certification
            </h1>
            <p className="text-lg text-slate-600">
              Submit your deed, title, or closing document for secure certification.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-8">
            {/* Document Type */}
            <div className="mb-6">
              <label htmlFor="documentType" className="block text-sm font-semibold text-slate-900 mb-2">
                Document Type <span className="text-red-600">*</span>
              </label>
              <select
                id="documentType"
                value={formData.documentType}
                onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              >
                <option value="">Select document type</option>
                <option value="warranty-deed">Warranty Deed</option>
                <option value="quitclaim-deed">Quitclaim Deed</option>
                <option value="title">Title Document</option>
                <option value="hud1">HUD-1 Settlement Statement</option>
                <option value="purchase-agreement">Purchase Agreement</option>
                <option value="disclosure">Disclosure Form</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Party A */}
            <div className="mb-6">
              <label htmlFor="partyA" className="block text-sm font-semibold text-slate-900 mb-2">
                Party A (Grantor/Seller) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="partyA"
                value={formData.partyA}
                onChange={(e) => setFormData({ ...formData, partyA: e.target.value })}
                placeholder="Full legal name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            {/* Party B */}
            <div className="mb-6">
              <label htmlFor="partyB" className="block text-sm font-semibold text-slate-900 mb-2">
                Party B (Grantee/Buyer) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="partyB"
                value={formData.partyB}
                onChange={(e) => setFormData({ ...formData, partyB: e.target.value })}
                placeholder="Full legal name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            {/* County */}
            <div className="mb-6">
              <label htmlFor="county" className="block text-sm font-semibold text-slate-900 mb-2">
                County <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="county"
                value={formData.county}
                onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                placeholder="County name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            {/* State */}
            <div className="mb-6">
              <label htmlFor="state" className="block text-sm font-semibold text-slate-900 mb-2">
                State <span className="text-red-600">*</span>
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              >
                <option value="">Select state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label htmlFor="file" className="block text-sm font-semibold text-slate-900 mb-2">
                Document File <span className="text-red-600">*</span>
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                />
                <label htmlFor="file" className="cursor-pointer">
                  <i className="ri-upload-cloud-line text-4xl text-slate-400 mb-3 block"></i>
                  {formData.file ? (
                    <p className="text-sm font-medium text-slate-900">{formData.file.name}</p>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-slate-900 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-slate-500">
                        PDF, DOC, DOCX, JPG, PNG (max 10MB)
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "Submitting..." : "Certify Document"}
            </button>

            <p className="text-xs text-slate-500 text-center mt-4">
              Your document will be hashed locally. We never store your files.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
