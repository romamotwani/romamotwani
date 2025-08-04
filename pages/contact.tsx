import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });
    setStatus(res.ok ? "Message sent!" : "Error sending message.");
    if (res.ok) e.currentTarget.reset();
  };
  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required className="w-full border p-3 rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Message" rows={5} required className="w-full border p-3 rounded" />
        <button type="submit" className="bg-brand px-6 py-2 text-white rounded hover:opacity-90">Send</button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}