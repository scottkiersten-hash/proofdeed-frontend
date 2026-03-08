export default function Success() {
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>Payment Successful</h1>
      <p>Your subscription is active.</p>

      <a
        href="/document"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "12px 24px",
          background: "#2563EB",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Continue
      </a>
    </div>
  );
}
