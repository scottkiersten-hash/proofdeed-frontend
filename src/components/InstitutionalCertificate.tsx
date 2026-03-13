import CertificateQR from "../CertificateQR";

interface InstitutionalCertificateProps {
  documentType: string;
  parcelId: string;
  grantor: string;
  grantee: string;
  instrumentNumber: string;
  bookPage: string;
  certificateId: string;
  hash: string;
  timestamp: string;
}

export default function InstitutionalCertificate({
  documentType,
  parcelId,
  grantor,
  grantee,
  instrumentNumber,
  bookPage,
  certificateId,
  hash,
  timestamp
}: InstitutionalCertificateProps) {

  const date = new Date(timestamp);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200">

      {/* Header */}
      <div className="relative px-8 pt-8 pb-6 text-center border-b-2 border-slate-900">

        <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center">
          <i className="ri-scales-3-line text-2xl text-slate-700"></i>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
          <i className="ri-home-4-line text-2xl text-slate-700"></i>
        </div>

        <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.3em] mb-2">
          Certificate of
        </p>

        <h1 className="text-2xl font-bold tracking-wide text-slate-900 mb-1">
          DOCUMENT INTEGRITY
        </h1>

        <p className="text-sm text-slate-600 font-medium">
          Institutional Document Verification
        </p>

      </div>

      {/* Seal */}
      <div className="flex justify-center py-6 bg-slate-50 border-b border-slate-200">

        <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-sm">

          <div className="text-center">
            <i className="ri-verified-badge-line text-2xl text-slate-900"></i>
            <p className="text-[7px] text-slate-700 font-bold mt-0.5 tracking-wider">
              VERIFIED
            </p>
          </div>

        </div>

      </div>

      {/* Certificate Content */}
      <div className="px-8 py-6 space-y-4">

        {/* Document Type */}
        <div className="border-b border-slate-200 pb-4">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Document Type
          </p>

          <p className="text-slate-900 text-base font-medium">
            {documentType}
          </p>

        </div>

        {/* Property */}
        <div className="border-b border-slate-200 pb-4">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Property Reference
          </p>

          <p className="text-slate-900 text-sm">
            Parcel ID: {parcelId}
          </p>

          <p className="text-slate-600 text-sm mt-1">
            County Recording Reference
          </p>

        </div>

        {/* Parties */}
        <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4">

          <div>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Grantor
            </p>

            <p className="text-slate-900 text-sm">
              {grantor}
            </p>

          </div>

          <div>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Grantee
            </p>

            <p className="text-slate-900 text-sm">
              {grantee}
            </p>

          </div>

        </div>

        {/* Recording Info */}
        <div className="border-b border-slate-200 pb-4">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Recording Information
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2">

            <div>

              <p className="text-xs text-slate-500">
                Instrument Number
              </p>

              <p className="text-slate-900 text-sm font-mono">
                {instrumentNumber}
              </p>

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Book/Page
              </p>

              <p className="text-slate-900 text-sm font-mono">
                {bookPage}
              </p>

            </div>

          </div>

        </div>

        {/* Certificate ID */}
        <div className="border-b border-slate-200 pb-4">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            ProofDeed Certificate ID
          </p>

          <p className="text-slate-900 text-sm font-mono">
            {certificateId}
          </p>

        </div>

        {/* Hash */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            SHA-256 Document Hash
          </p>

          <p className="text-slate-700 text-xs font-mono break-all leading-relaxed">
            {hash}
          </p>

        </div>

        {/* Timestamp */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Certification Date
            </p>

            <p className="text-slate-900 text-sm">
              {date.toLocaleDateString()}
            </p>

            <p className="text-slate-600 text-xs">
              {date.toLocaleTimeString()}
            </p>

          </div>

          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Blockchain Anchor
            </p>

            <p className="text-slate-900 text-xs font-mono">
              Polygon Network
            </p>

          </div>

        </div>

        {/* QR */}
        <div className="flex justify-center pt-4">

          <CertificateQR certificationId={certificateId} />

        </div>

      </div>

      {/* Footer */}
      <div className="bg-slate-900 px-8 py-4 text-center">

        <p className="text-slate-400 text-xs mb-1">
          Independently Verifiable at
        </p>

        <p className="text-white text-xs font-medium">
          ProofDeed.com/institutional/verify
        </p>

      </div>

    </div>
  );
}
