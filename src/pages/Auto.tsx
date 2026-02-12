import { useState, useMemo } from "react";

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

  // ---------- VIN VALIDATION ----------
  const vinIsValid = useMemo(() => {
    const vin = form.vin.trim().toUpperCase();
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/; // No I, O, Q allowed
    return vinRegex.test(vin);
  }, [form.vin]);

  const formIsValid =
    vinIsValid &&
    form.buyer.trim() &&
    form.seller.trim() &&
    form.price.trim() &&
    form.state.trim();

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

    if (!formIsValid) {
      setError("Please complete all required fields correctly.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("vin", form.vin.toUpperCase());
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
          gap: "14px",
        }}
      >
        <label>
          VIN *
          <input
            type="text"
            name="vin"
            value={form.vin}
            onChange={handleChange}
            maxLength={17}
            style={{
              borderColor: form.vin && !vinIsValid ? "red" : "#ccc",
            }}
          />
        </label>

        {form.vin && !vinIsValid && (
          <div style={{ color: "red", fontSize: "13px" }}>
            VIN must be 17 characters (letters & numbers only, no I, O, Q).
          </div>
        )}

        <label>
          Buyer Name *
          <input
            type="text"
            name="buyer"
            value={form.buyer}
            onChange={handleChange}
          />
        </label>

        <label>
          Seller Name *
          <input
            type="text"
            name="seller"
            value={form.seller}
            onChange={handleChange}
          />
        </label>

        <label>
          Sale Price *
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </label>

        <label>
          State *
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
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
          disabled={loading || !formIsValid}
          style={{
            padding: "10px",
            cursor: formIsValid ? "pointer" : "not-allowed",
            opacity: loading || !formIsValid ? 0.5 : 1,
          }}
        >
          {loading ? "Submitting..." : "Submit Auto Title"}
        </button>
      </form>
    </div>
  );
}
