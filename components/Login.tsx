"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Show/hide login form

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login button clicked! Sending request..."); // Debugging

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Response from server:", data); // Debugging

    if (res.ok) {
      localStorage.setItem("token", data.token);
      setMessage("Login successful!");
      setTimeout(() => setIsOpen(false), 2000); // Close form after 2 sec
    } else {
      setMessage(data.error);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          console.log("Login button clicked!"); // Debugging
          setIsOpen(true);
        }}
        className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <img src="/user.svg" alt="User Icon" className="w-5 h-5" />
        Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white shadow-md rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
              />
              <button type="submit" className="bg-green-600 text-white p-2 rounded">
                Login
              </button>
            </form>
            {message && <p className="mt-2 text-red-500">{message}</p>}
            <button onClick={() => setIsOpen(false)} className="mt-3 text-blue-500">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
  