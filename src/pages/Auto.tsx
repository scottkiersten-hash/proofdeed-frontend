import { useState } from "react";

export default function Auto() {
  const [form, setForm] = useState({
    vin: "",
    buyer: "",
    seller: "",
    price: "",
    state: "",
    file: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setForm((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.vin || !form.buyer || !form.seller || !form.price || !form.state) {
      setError("Please complete all required fields.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("vin", form.vin);
      formData.append("buyer", form.buyer);
      formData.append("seller", form.seller);
      formData.append("price", form.price);
      formData.append("state", form.state);

      if (form.file) {
        formData.append("file", form.file);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auto`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed.");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ padding: "24px" }}>
        <h1>Submission Received</h1>
        <p>Your Auto Title intake has been successfully submitted.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", maxWidth: "600px" }}>
      <h1>Auto Title / Dealer Intake</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label>
          VIN *
          <input
            type="text"
            name="vin"
            value={form.vin}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Buyer Name *
          <input
            type="text"
            name="buyer"
            value={form.buyer}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Seller Name *
          <input
            type="text"
            name="seller"
            value={form.seller}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Sale Price *
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          State *
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="NY">New York</option>
          </select>
        </label>

        <label>
          Upload Title Document
          <input type="file" onChange={handleFileChange} />
        </label>

        {error && (
          <div style={{ color: "red", fontSize: "14px" }}>{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Submitting..." : "Submit Auto Title"}
        </button>
      </form>
    </div>
  );
}
