export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <a
            href="/document"
            className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">
              Certify Document
            </h2>

            <p className="text-slate-400 text-sm">
              Create a cryptographic certification for any document.
            </p>
          </a>

          <a
            href="/verify"
            className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">
              Verify Certificate
            </h2>

            <p className="text-slate-400 text-sm">
              Confirm the authenticity of a certificate.
            </p>
          </a>

          <a
            href="/auto"
            className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold mb-2">
              Vehicle Certification
            </h2>

            <p className="text-slate-400 text-sm">
              Certify vehicle records and ownership documents.
            </p>
          </a>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg">

          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-semibold">
              Recent Certifications
            </h2>
          </div>

          <table className="w-full text-sm">

            <thead className="text-slate-400 border-b border-slate-800">
              <tr>
                <th className="text-left p-4">Certificate ID</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-slate-800">
                <td className="p-4">PD-0000001</td>
                <td className="p-4">March 6 2026</td>
                <td className="p-4 text-green-400">Verified</td>
              </tr>

              <tr>
                <td className="p-4">PD-0000002</td>
                <td className="p-4">March 5 2026</td>
                <td className="p-4 text-green-400">Verified</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}
