"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Contact Me
      </h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email here."
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
        />

        <textarea
          placeholder="Enter your message here."
          rows={5}
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
  Send
</button>



      </form>
    </section>
  );
}
