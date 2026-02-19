
export default function GovernmentCertificate() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#faf9f7] rounded-none overflow-hidden shadow-2xl border-4 border-double border-slate-800">
      {/* Official Header Band */}
      <div className="bg-slate-800 px-6 py-2 text-center">
        <p className="text-[10px] font-semibold text-slate-300 uppercase tracking-[0.4em]">Official Government Record Certification</p>
      </div>

      {/* Header - Formal Institutional Style */}
      <div className="relative px-8 pt-8 pb-6 text-center border-b border-slate-300">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white">
            <i className="ri-government-line text-3xl text-slate-800"></i>
          </div>
        </div>
        
        <h1 className="text-xl font-bold tracking-[0.15em] text-slate-900 uppercase mb-1">Certificate of Record Integrity</h1>
        <p className="text-xs text-slate-600 font-medium tracking-wider uppercase">Public Records Division</p>
      </div>

      {/* Official Seal - Centered, Prominent */}
      <div className="flex justify-center py-8 bg-white border-b border-slate-200">
        <div className="relative">
          {/* Outer decorative ring */}
          <div className="absolute -inset-4 rounded-full border border-slate-300"></div>
          <div className="absolute -inset-6 rounded-full border border-dashed border-slate-200"></div>
          
          {/* Main seal */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
            <div className="w-24 h-24 rounded-full border-2 border-slate-400 flex items-center justify-center">
              <div className="text-center">
                <i className="ri-shield-star-line text-3xl text-white"></i>
                <p className="text-[8px] text-slate-300 font-bold mt-1 tracking-[0.2em]">CERTIFIED</p>
                <p className="text-[6px] text-slate-400 tracking-wider">AUTHENTIC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Content - Government Record Focused */}
      <div className="px-8 py-6 space-y-4 bg-[#faf9f7]">
        {/* This Certifies Statement */}
        <div className="text-center py-4 border-b border-slate-200">
          <p className="text-sm text-slate-700 italic leading-relaxed">
            This certificate attests that the referenced public record existed in its exact form at the certified timestamp and has not been altered.
          </p>
        </div>

        {/* Record Description */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Record Description</p>
          <p className="text-slate-900 text-base font-medium">County Deed Recording - Property Transfer Document</p>
        </div>

        {/* Issuing Authority */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Issuing Authority</p>
          <p className="text-slate-900 text-sm">County Recorder Office</p>
          <p className="text-slate-600 text-sm">Public Records Division</p>
        </div>

        {/* Two Column - Agency Info */}
        <div className="grid grid-cols-2 gap-6 border-b border-slate-200 pb-4">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Agency</p>
            <p className="text-slate-900 text-sm">Department of Records</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Division</p>
            <p className="text-slate-900 text-sm">Public Filing Division</p>
          </div>
        </div>

        {/* Public Record ID */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Public Record Identifier</p>
          <p className="text-slate-900 text-base font-mono tracking-wider">GOV-2024-PR-847291</p>
        </div>

        {/* Cryptographic Hash - Formal Box */}
        <div className="bg-white rounded border border-slate-300 p-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">SHA-256 Cryptographic Hash</p>
          <p className="text-slate-800 text-xs font-mono break-all leading-relaxed">a7f3b2c8d9e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0</p>
        </div>

        {/* Timestamp & Chain of Custody */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded border border-slate-300 p-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Certification Timestamp</p>
            <p className="text-slate-900 text-sm font-medium">January 15, 2024</p>
            <p className="text-slate-600 text-xs">14:32:18 UTC</p>
          </div>
          <div className="bg-white rounded border border-slate-300 p-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Blockchain Reference</p>
            <p className="text-slate-900 text-xs font-mono">Block #18,472,391</p>
            <p className="text-slate-600 text-xs">Immutable Record</p>
          </div>
        </div>

        {/* Verification ID */}
        <div className="border-t border-slate-200 pt-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Verification ID</p>
          <p className="text-slate-900 text-sm font-mono tracking-wider">VRF-GOV-2024-X8K9M2</p>
        </div>

        {/* QR Code Area - Formal */}
        <div className="flex justify-center pt-4">
          <div className="bg-white p-3 border border-slate-300">
            <div className="w-20 h-20 bg-slate-900 flex items-center justify-center">
              <i className="ri-qr-code-line text-4xl text-white"></i>
            </div>
            <p className="text-[8px] text-slate-500 text-center mt-2 uppercase tracking-wider">Scan to Verify</p>
          </div>
        </div>
      </div>

      {/* Footer - Official Government Style */}
      <div className="bg-slate-800 px-8 py-4 text-center border-t-4 border-double border-slate-600">
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">Issued for Public Record Verification</p>
        <p className="text-white text-xs font-medium tracking-wider">ProofDeed.com/government/verify</p>
      </div>
    </div>
  );
}
