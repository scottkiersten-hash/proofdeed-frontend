
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

export default function DocumentCertificate() {
  const navigate = useNavigate();
  const verifyUrl = `${window.location.origin}${__BASE_PATH__}verify?cert=PD-DOC-2024-8F3A29X`;

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-8 cursor-pointer transition-colors print:hidden"
        >
          <i className="ri-arrow-left-line"></i>
          Back
        </button>

        {/* Certificate Container */}
        <div className="bg-white border-2 border-slate-900 rounded-lg p-12 shadow-lg print:shadow-none">
          {/* Sample Banner */}
          <div className="text-center mb-6">
            <span className="inline-block px-5 py-1.5 bg-amber-50 border border-amber-300 rounded-md text-xs font-bold text-amber-700 uppercase tracking-widest">
              Sample Certificate — For Demonstration Purposes
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-10 pb-8 border-b-2 border-slate-200">
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">ProofDeed</h1>
              <p className="text-sm text-slate-600 uppercase tracking-wider">
                Document Certification Infrastructure
              </p>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Certificate of Document Integrity
            </h2>
          </div>

          {/* Certificate Body */}
          <div className="space-y-8 mb-10">
            {/* Certification Statement */}
            <div className="text-center py-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                This certificate verifies that a cryptographic fingerprint of the referenced
                document was generated and permanently anchored to the Polygon blockchain at
                the timestamp indicated below.
              </p>
            </div>

            {/* Certificate Details */}
            <div className="grid grid-cols-1 gap-6">
              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Certificate ID
                </p>
                <p className="text-lg font-mono text-slate-900">DOC-2026-AX39K2</p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Document Hash (SHA-256)
                </p>
                <p className="text-sm font-mono text-slate-900 break-all">
                  a7f3c9e1b24d68054f92ae3710db5c84e6f1209837bca4d5e08f6271c93a4b50
                </p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Timestamp
                </p>
                <p className="text-lg text-slate-900">2026-01-15T14:32:07Z (UTC)</p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Blockchain Transaction
                </p>
                <p className="text-sm font-mono text-slate-900 break-all">
                  0x8e4a2f1c7b3d960e5fa84c12d7b6e3a09f1c4d82e6b7a3f5091c8d2e4a6b7f3
                </p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Block Number
                </p>
                <p className="text-lg font-mono text-slate-900">71,482,309</p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Document Type
                </p>
                <p className="text-lg text-slate-900">Executed Commercial Lease Agreement</p>
              </div>

              <div className="border-l-4 border-slate-900 pl-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Certified By
                </p>
                <p className="text-lg text-slate-900">ProofDeed Certification Authority</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t-2 border-slate-200">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                Verification Instructions
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                To independently verify this certificate, visit{' '}
                <strong>proofdeed.com/verify</strong> and enter the Certificate ID shown above,
                or scan the QR code below.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Important:</strong> ProofDeed does not store document contents. This
                certificate proves only that a cryptographic fingerprint was generated and anchored
                at the specified time.
              </p>
            </div>
          </div>

          {/* Signature Line + QR Code */}
          <div className="mt-10 pt-8 border-t border-slate-300">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500 mb-1">Issued:</p>
                <p className="text-sm font-semibold text-slate-900">January 15, 2026</p>
              </div>
              <div className="flex items-end gap-8">
                <div className="text-right">
                  <div className="border-t-2 border-slate-900 w-48 mb-2"></div>
                  <p className="text-xs text-slate-500">Authorized Signature</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="border border-slate-200 rounded p-1.5 bg-white">
                    <QRCodeCanvas
                      value={verifyUrl}
                      size={88}
                      bgColor="#ffffff"
                      fgColor="#0f172a"
                      level="M"
                    />
                  </div>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-wider">Scan to Verify</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="text-center mt-8 print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-printer-line"></i>
            Print Certificate
          </button>
        </div>
      </div>
    </div>
  );
}
