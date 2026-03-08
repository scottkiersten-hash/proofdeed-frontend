export default function Success() {
  return (
    <div style={{padding:"80px",textAlign:"center"}}>
      <h1>Payment Successful</h1>
      <p>Your subscription has been activated.</p>
      <p>You can now begin certifying documents.</p>

      <a href="/document" style={{
        marginTop:"20px",
        display:"inline-block",
        padding:"12px 24px",
        background:"#2563EB",
        color:"white",
        borderRadius:"6px",
        textDecoration:"none"
      }}>
        Go to Dashboard
      </a>
    </div>
  );
}
