
export default function AutomotiveCertificate() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Automotive Header Band */}
      <div className="bg-amber-500 px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="ri-car-line text-slate-900 text-lg"></i>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Vehicle Certification</span>
          </div>
          <span className="text-xs font-semibold text-slate-900">ProofDeed Auto</span>
        </div>
      </div>

      {/* Header */}
      <div className="relative px-8 pt-6 pb-4 text-center border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wider text-white uppercase mb-1">Vehicle Integrity Certificate</h1>
        <p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">VIN Validation & Title Verification</p>
      </div>

      {/* VIN Display - Prominent */}
      <div className="mx-8 mt-6 bg-slate-950 rounded-lg p-4 border border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em]">Vehicle Identification Number (VIN)</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-[10px] font-semibold">VALIDATED</span>
          </div>
        </div>
        <p className="text-white text-2xl font-mono tracking-[0.15em] text-center py-2">1HGBH41JXMN109186</p>
      </div>

      {/* Vehicle & Title Status */}
      <div className="px-8 py-6 space-y-4">
        {/* Title Status - Prominent */}
        <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-xl text-green-400"></i>
            </div>
            <div>
              <p className="text-[10px] text-green-400 font-semibold uppercase tracking-wider">Title Status</p>
              <p className="text-white text-lg font-bold">Clean Title</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Title Number</p>
            <p className="text-white text-sm font-mono">TN-2024-847291</p>
          </div>
        </div>

        {/* Dealership Information */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-store-2-line text-amber-400"></i>
            <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em]">Dealership Information</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Dealer Certification ID</p>
              <p className="text-white text-sm font-mono">DLR-AUTO-2024-X8K9</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Dealer License</p>
              <p className="text-white text-sm font-mono">DL-48291-CA</p>
            </div>
          </div>
        </div>

        {/* Transfer Verification */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Transfer Verification</p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <p className="text-green-400 text-sm font-semibold">Ownership Transfer Complete</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-700">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Odometer Reading</p>
              <p className="text-white text-sm font-mono">47,832 miles</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Transaction Date</p>
              <p className="text-white text-sm">January 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Cryptographic Proof */}
        <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
          <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">SHA-256 Document Hash</p>
          <p className="text-slate-300 text-xs font-mono break-all leading-relaxed">b8c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4</p>
        </div>

        {/* Timestamp & Blockchain */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Certification Time</p>
            <p className="text-white text-sm font-medium">Jan 15, 2024</p>
            <p className="text-slate-400 text-xs">09:45:22 UTC</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Blockchain Anchor</p>
            <p className="text-white text-xs font-mono">Block #18,234,567</p>
          </div>
        </div>

        {/* Verification ID */}
        <div className="border-t border-slate-700 pt-4">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Verification ID</p>
          <p className="text-white text-sm font-mono tracking-wider">VRF-AUTO-2024-M7N8P9</p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center pt-2">
          <div className="bg-white p-3 rounded-lg">
            <div className="w-20 h-20 bg-slate-900 rounded flex items-center justify-center">
              <i className="ri-qr-code-line text-4xl text-white"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Automotive Branding */}
      <div className="bg-amber-500 px-8 py-3 text-center">
        <p className="text-slate-900 text-xs font-bold">Verify at ProofDeed.com/auto/verify</p>
      </div>
    </div>
  );
}
