"use client";

import { useState } from "react";
import { FaBullseye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
   async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
     setLoading(false)
     toast.success("Thanks for contacting.I will get in touch with you shortly!")
      setEmail("");
      setMessage("");
    } else {
      toast.error("Message not sent.Please try again!")
    }
  }
  return (
   
    <section id="contact" className="py-10 max-w-xl mx-auto">
       <ToastContainer/>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email here."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
        />

        <textarea
          placeholder="Enter your message here."
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
        />

 <button
  type="submit"
  className="
    relative w-full mt-6 py-3 rounded-full
    font-medium text-black
    bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
    active:scale-95
  "
>
  {loading ? "Sending..":"Send"}
</button>



      </form>
    </section>
  );
}
