import CertificateQR from "../CertificateQR";

interface AutomotiveCertificateProps {
  vin: string;
  titleNumber: string;
  dealerId: string;
  dealerLicense: string;
  odometer: string;
  transactionDate: string;
  hash: string;
  timestamp: string;
  verificationId: string;
}

export default function AutomotiveCertificate({
  vin,
  titleNumber,
  dealerId,
  dealerLicense,
  odometer,
  transactionDate,
  hash,
  timestamp,
  verificationId
}: AutomotiveCertificateProps) {

  const date = new Date(timestamp);

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">

      {/* Automotive Header Band */}
      <div className="bg-amber-500 px-10 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="ri-car-line text-slate-900 text-xl"></i>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Vehicle Certification
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-900">
            ProofDeed Auto
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="relative px-12 pt-8 pb-6 text-center border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wider text-white uppercase mb-2">
          Vehicle Integrity Certificate
        </h1>

        <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
          VIN Validation & Title Verification
        </p>
      </div>

      {/* VIN Display */}
      <div className="mx-12 mt-10 bg-slate-950 rounded-lg p-6 border border-slate-700">

        <div className="flex items-center justify-between mb-3">

          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em]">
            Vehicle Identification Number (VIN)
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-[11px] font-semibold">
              VALIDATED
            </span>
          </div>

        </div>

        <p className="text-white text-3xl font-mono tracking-[0.2em] text-center py-3">
          {vin}
        </p>

      </div>

      {/* Vehicle & Title Status */}
      <div className="px-12 py-10 space-y-6">

        {/* Title Status */}
        <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg p-6">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-2xl text-green-400"></i>
            </div>

            <div>
              <p className="text-[11px] text-green-400 font-semibold uppercase tracking-wider">
                Title Status
              </p>

              <p className="text-white text-xl font-bold">
                Clean Title
              </p>
            </div>

          </div>

          <div className="text-right">

            <p className="text-[11px] text-slate-400 uppercase tracking-wider">
              Title Number
            </p>

            <p className="text-white text-sm font-mono">
              {titleNumber}
            </p>

          </div>

        </div>

        {/* Dealership Information */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">

          <div className="flex items-center gap-2 mb-4">
            <i className="ri-store-2-line text-amber-400 text-lg"></i>

            <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em]">
              Dealership Information
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Dealer Certification ID
              </p>

              <p className="text-white text-sm font-mono">
                {dealerId}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Dealer License
              </p>

              <p className="text-white text-sm font-mono">
                {dealerLicense}
              </p>
            </div>

          </div>

        </div>

        {/* Transfer Verification */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">

          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Transfer Verification
          </p>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>

            <p className="text-green-400 text-base font-semibold">
              Ownership Transfer Complete
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4 pt-4 border-t border-slate-700">

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Odometer Reading
              </p>

              <p className="text-white text-sm font-mono">
                {odometer}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Transaction Date
              </p>

              <p className="text-white text-sm">
                {transactionDate}
              </p>
            </div>

          </div>

        </div>

        {/* Cryptographic Proof */}
        <div className="bg-slate-950 rounded-lg p-6 border border-slate-700">

          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
            SHA-256 Document Hash
          </p>

          <p className="text-slate-300 text-sm font-mono break-all leading-relaxed">
            {hash}
          </p>

        </div>

        {/* Timestamp & Blockchain */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">

            <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
              Certification Time
            </p>

            <p className="text-white text-sm font-medium">
              {date.toLocaleDateString()}
            </p>

            <p className="text-slate-400 text-xs">
              {date.toLocaleTimeString()}
            </p>

          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">

            <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
              Blockchain Anchor
            </p>

            <p className="text-white text-xs font-mono">
              Polygon Network
            </p>

          </div>

        </div>

        {/* Verification ID */}
        <div className="border-t border-slate-700 pt-6">

          <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
            Verification ID
          </p>

          <p className="text-white text-sm font-mono tracking-wider">
            {verificationId}
          </p>

        </div>

        {/* QR */}
        <div className="flex justify-center pt-4">

          <CertificateQR
            certificationId={verificationId}
          />

        </div>

      </div>

      {/* Footer */}
      <div className="bg-amber-500 px-12 py-5 text-center">

        <p className="text-slate-900 text-sm font-bold">
          Verify at ProofDeed.com/auto/verify
        </p>

      </div>

    </div>
  );
}
