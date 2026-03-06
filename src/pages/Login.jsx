import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {

        /* store token */
        localStorage.setItem("token", data.token);

        /* redirect to dashboard */
        navigate("/dashboard");

      } else {
        alert(data.error || "Login failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-lg border border-slate-800">

        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-slate-800 border border-slate-700 rounded"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-slate-800 border border-slate-700 rounded"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}
