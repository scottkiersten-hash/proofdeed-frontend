
export default function LegalCertificate() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200">
      {/* Header - Formal Legal Style */}
      <div className="relative px-8 pt-8 pb-6 text-center border-b-2 border-slate-900">
        <div className="absolute top-4 left-4 w-12 h-12">
          <div className="w-full h-full flex items-center justify-center">
            <i className="ri-scales-3-line text-2xl text-slate-700"></i>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12">
          <div className="w-full h-full flex items-center justify-center">
            <i className="ri-home-4-line text-2xl text-slate-700"></i>
          </div>
        </div>
        
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.3em] mb-2">Certificate of</p>
        <h1 className="text-2xl font-bold tracking-wide text-slate-900 mb-1">DOCUMENT INTEGRITY</h1>
        <p className="text-sm text-slate-600 font-medium">Legal & Title Verification</p>
      </div>

      {/* Formal Seal Area */}
      <div className="flex justify-center py-6 bg-slate-50 border-b border-slate-200">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <i className="ri-verified-badge-line text-2xl text-slate-900"></i>
              <p className="text-[7px] text-slate-700 font-bold mt-0.5 tracking-wider">VERIFIED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Content - Property/Deed Focused */}
      <div className="px-8 py-6 space-y-4">
        {/* Document Type */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Document Type</p>
          <p className="text-slate-900 text-base font-medium">Real Property Deed - Warranty Deed</p>
        </div>

        {/* Property Information */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Property Reference</p>
          <p className="text-slate-900 text-sm">Parcel ID: 123-456-789-000</p>
          <p className="text-slate-600 text-sm mt-1">County Recording Reference</p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grantor</p>
            <p className="text-slate-900 text-sm">[Seller Name]</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grantee</p>
            <p className="text-slate-900 text-sm">[Buyer Name]</p>
          </div>
        </div>

        {/* Recording Information */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Recording Information</p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-xs text-slate-500">Instrument Number</p>
              <p className="text-slate-900 text-sm font-mono">2024-0012847</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Book/Page</p>
              <p className="text-slate-900 text-sm font-mono">1247 / 892</p>
            </div>
          </div>
        </div>

        {/* Certificate ID */}
        <div className="border-b border-slate-200 pb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">ProofDeed Certificate ID</p>
          <p className="text-slate-900 text-sm font-mono">PD-LEGAL-2024-X8K9M2</p>
        </div>

        {/* SHA-256 Hash */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">SHA-256 Document Hash</p>
          <p className="text-slate-700 text-xs font-mono break-all leading-relaxed">c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5</p>
        </div>

        {/* Timestamp & Blockchain */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Certification Date</p>
            <p className="text-slate-900 text-sm">January 15, 2024</p>
            <p className="text-slate-600 text-xs">10:24:33 UTC</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Blockchain Anchor</p>
            <p className="text-slate-900 text-xs font-mono">Block #18,472,391</p>
          </div>
        </div>

        {/* QR Code Area */}
        <div className="flex justify-center pt-4">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center border border-slate-300">
              <i className="ri-qr-code-line text-3xl text-slate-700"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Formal Legal Style */}
      <div className="bg-slate-900 px-8 py-4 text-center">
        <p className="text-slate-400 text-xs mb-1">Independently Verifiable at</p>
        <p className="text-white text-xs font-medium">ProofDeed.com/legal/verify</p>
      </div>
    </div>
  );
}
