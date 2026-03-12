import { useEffect, useState } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

export default function Registry() {

  const [records, setRecords] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const loadRegistry = async () => {

      const response = await fetch("/api/registry");
      const data = await response.json();

      if (data.success) {
        setRecords(data.records);
      }

    };

    loadRegistry();

  }, []);

  const filtered = records.filter((r) =>
    r.certification_id.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              ProofDeed Public Registry
            </h1>

            <p className="text-slate-600 text-lg">
              Search publicly verifiable document certifications anchored to blockchain.
            </p>

          </div>

          <div className="mb-8">

            <input
              type="text"
              placeholder="Search Certification ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border border-slate-300 rounded-lg"
            />

          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left text-xs uppercase text-slate-500 p-4">
                    Certification ID
                  </th>

                  <th className="text-left text-xs uppercase text-slate-500 p-4">
                    Timestamp
                  </th>

                  <th className="text-left text-xs uppercase text-slate-500 p-4">
                    Blockchain
                  </th>

                  <th className="text-left text-xs uppercase text-slate-500 p-4">
                    Verify
                  </th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((r) => (

                  <tr
                    key={r.certification_id}
                    className="border-t border-slate-200"
                  >

                    <td className="p-4 font-semibold">
                      {r.certification_id}
                    </td>

                    <td className="p-4">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      Polygon
                    </td>

                    <td className="p-4">

                      <a
                        href={`/verify/${r.certification_id}`}
                        className="text-blue-600 hover:underline"
                      >
                        Verify
                      </a>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      <Footer />

    </div>

  );

}
