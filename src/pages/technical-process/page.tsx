import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function TechnicalProcess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-8 cursor-pointer transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            Back
          </button>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Full Technical Certification Process
          </h1>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              ProofDeed provides tamper-evident certification without storing original documents or vehicle records. The system generates a cryptographic fingerprint, anchors it to a public blockchain, and issues a unique verification ID that can be independently validated at any time.
            </p>
            <p className="text-slate-700 leading-relaxed font-semibold">
              No document storage. No content custody. Cryptographic proof only.
            </p>
          </section>

          {/* Step 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 1 — Cryptographic Fingerprint Generation (SHA-256)
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When a document or vehicle record is submitted:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>The system generates a SHA-256 cryptographic hash</li>
              <li>The hash is a 64-character immutable fingerprint</li>
              <li>Even a 1-character change produces a completely different hash</li>
              <li>Original file contents are never stored on ProofDeed servers</li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-900 mb-2">Output:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><code className="bg-slate-200 px-2 py-1 rounded">recordHash</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">fileSize</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">fileType</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">hashTimestamp</code></li>
              </ul>
            </div>
            <p className="text-slate-700 leading-relaxed">
              This fingerprint uniquely represents the exact file state at the moment of certification.
            </p>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 2 — Precision Timestamping
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Immediately after hash generation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>A UTC timestamp is recorded</li>
              <li>Server time is synchronized</li>
              <li>Timestamp is paired permanently with the hash</li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-900 mb-2">Output:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><code className="bg-slate-200 px-2 py-1 rounded">timestampUTC</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">certificationDate</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">certificationTime</code></li>
              </ul>
            </div>
            <p className="text-slate-700 leading-relaxed">
              This establishes provable time existence.
            </p>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 3 — Blockchain Anchoring (Polygon Network)
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The hash and timestamp are anchored to the Polygon blockchain.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4 font-semibold">Process:</p>
            <p className="text-slate-700 leading-relaxed mb-2">
              A transaction payload is created containing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li><code className="bg-slate-200 px-2 py-1 rounded">recordHash</code></li>
              <li><code className="bg-slate-200 px-2 py-1 rounded">timestampUTC</code></li>
              <li>Certification metadata</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Transaction is broadcast to Polygon</li>
              <li>A transaction hash is returned</li>
              <li>Block number and confirmation are recorded</li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-900 mb-2">Output:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><code className="bg-slate-200 px-2 py-1 rounded">transactionHash</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">blockNumber</code></li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">network</code> (Polygon)</li>
                <li><code className="bg-slate-200 px-2 py-1 rounded">anchorStatus</code> = Confirmed</li>
              </ul>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              This creates a permanent, publicly verifiable anchor.
            </p>
            <div className="bg-slate-100 border-l-4 border-slate-900 p-4">
              <p className="text-slate-700 leading-relaxed">
                No private blockchain.<br />
                No internal database-only record.<br />
                Public network anchoring.
              </p>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 4 — Unique Verification ID Creation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              After confirmation:
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A unique verification ID is generated.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-slate-900 mb-2">Format Example:</p>
              <ul className="text-sm text-slate-700 space-y-1 font-mono">
                <li>DOC-2026-AX39K2</li>
                <li>AUTO-2026-VR82LM</li>
                <li>GOV-2026-PR44721</li>
              </ul>
            </div>
            <p className="text-slate-700 leading-relaxed mb-2">
              This ID maps internally to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li><code className="bg-slate-200 px-2 py-1 rounded">recordHash</code></li>
              <li><code className="bg-slate-200 px-2 py-1 rounded">transactionHash</code></li>
              <li><code className="bg-slate-200 px-2 py-1 rounded">timestampUTC</code></li>
              <li>Certification type</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              This ID is displayed on the certificate and used for verification lookup.
            </p>
          </section>

          {/* Step 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 5 — Certificate Rendering
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A dynamic certificate is generated containing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>ProofDeed branding</li>
              <li>Certification type</li>
              <li>Record identifier (if applicable)</li>
              <li>SHA-256 hash</li>
              <li>Blockchain transaction hash</li>
              <li>Timestamp (UTC)</li>
              <li>Unique Verification ID</li>
              <li>Network confirmation reference</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4 font-semibold">
              Certificate versions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Document Certification</li>
              <li>Automotive Record Certification</li>
              <li>Government/Public Record Certification</li>
            </ul>
            <p className="text-slate-700 leading-relaxed font-semibold">
              Certificates do not contain full document contents.
            </p>
          </section>

          {/* Step 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 6 — Independent Verification
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Any party can verify authenticity by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Entering the Verification ID</li>
              <li>Re-hashing the original file</li>
              <li>Comparing the newly generated hash to the anchored hash</li>
              <li>Confirming blockchain transaction details</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Verification confirms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>File integrity</li>
              <li>Timestamp validity</li>
              <li>Blockchain anchoring</li>
              <li>Record immutability</li>
            </ul>
            <div className="bg-slate-100 border-l-4 border-slate-900 p-4">
              <p className="text-slate-700 leading-relaxed">
                If hashes match → file is unchanged.<br />
                If hashes differ → file was modified.
              </p>
            </div>
          </section>

          {/* Data Handling Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Data Handling Policy
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              ProofDeed:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Does NOT store original documents</li>
              <li>Does NOT retain vehicle record files</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-2">
              Stores only:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Hash values</li>
              <li>Timestamps</li>
              <li>Transaction references</li>
              <li>Certification metadata</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              This reduces liability exposure and strengthens security posture.
            </p>
          </section>

          {/* Security Architecture Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Security Architecture Summary
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>SHA-256 hashing</li>
              <li>Public blockchain anchoring (Polygon)</li>
              <li>Server-side validation logic</li>
              <li>Unique verification ID system</li>
              <li>No document custody model</li>
            </ul>
          </section>

          {/* Why This Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why This Matters
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              This process provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 ml-4">
              <li>Tamper detection</li>
              <li>Proof of existence</li>
              <li>Immutable timestamping</li>
              <li>Independent third-party verification</li>
              <li>Enterprise-grade audit trail</li>
            </ul>
            <p className="text-slate-700 leading-relaxed font-semibold">
              Without replacing existing record systems.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
