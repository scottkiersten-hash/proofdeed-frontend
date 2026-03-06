import { useEffect, useState } from "react";

export default function Dashboard() {

  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/api/my-certifications`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setCertifications(data.certifications || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold">Loading certifications...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10">
        Your Certifications
      </h1>

      {certifications.length === 0 && (
        <p className="text-gray-500">
          No certifications yet.
        </p>
      )}

      <div className="grid gap-6">

        {certifications.map(cert => (

          <div
            key={cert.certification_id}
            className="border rounded-lg p-6 shadow-sm bg-white"
          >

            <div className="flex justify-between items-center">

              <div>
                <p className="font-semibold">
                  {cert.certification_id}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(cert.timestamp).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-4">

                <a
                  href={`${import.meta.env.VITE_API_URL}/api/certificate/${cert.certification_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>

                <a
                  href={`${import.meta.env.VITE_API_URL}/api/certificate/${cert.certification_id}/pdf`}
                  className="text-blue-600 hover:underline"
                >
                  PDF
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
