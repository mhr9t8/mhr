"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState(""); // ← add this

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("All fields are required.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json(); // ← always read the response

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen max-w-6xl mx-auto px-4 py-16 mt-30">
      <h2 className="inline-block text-3xl font-bold mb-1 bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-foreground text-xl mb-5">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-foreground text-[0.8rem] font-medium mb-1.5">
              Your Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-600 rounded-lg px-3 py-2.5 text-slate-200 text-sm outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-foreground text-[0.8rem] font-medium mb-1.5">
              Email Address
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-600 rounded-lg px-3 py-2.5 text-slate-200 text-sm outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-foreground text-[0.8rem] font-medium mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-600 rounded-lg px-3 py-2.5 text-slate-200 text-sm outline-none transition-colors resize-y"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-900 text-sm">
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-900 text-sm">❌ {errorMsg}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full py-3 cursor-pointer bg-linear-to-r from-blue-700 to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors"
          >
            {status === "loading" ? "Sending..." : "Send Message →"}
          </button>
        </div>

        {/* Social links — same as before */}
        <div>
          <h3 className="inline-block text-3xl font-bold mt-10 mb-1 bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-foregrforeground text-xl leading-relaxed mb-5">
            Prefer a direct message? Find me on any of these platforms and I'll
            get back to you within 24 hours.
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: (
                  <i className="fa-brands fa-github text-xl text-background" />
                ),
                name: "GitHub",
                handle: "@mhr9t8",
                href: "https://github.com/mhr9t8",
              },
              {
                icon: (
                  <i className="fa-brands fa-linkedin text-xl text-[#007AB5]" />
                ),
                name: "LinkedIn",
                handle: "/in/mhr9t9",
                href: "https://linkedin.com/in/mhr9t9",
              },
              {
                icon: (
                  <i className="fa-brands fa-x-twitter text-xl text-background" />
                ),
                name: "Twitter",
                handle: "@mhr9t8",
                href: "https://x.com/mhr9t8",
              },
              {
                icon: (
                  <i className="fa-solid fa-envelope text-xl text-[#E14D3C]" />
                ),
                name: "Email",
                handle: "rahatdeveloper007@gmail.com",
                href: "mailto:rahatdeveloper007@gmail.com",
              },
              {
                icon: (
                  <Image
                    src="/img/fiverr.webp"
                    alt="Fiverr"
                    width={24}
                    height={24}
                  />
                ),
                name: "Fiverr",
                handle: "hello_rahat",
                href: "https://www.fiverr.com/hello_rahat/",
              },
              {
                icon: <i className="fa-brands fa-upwork text-[#14A800]"></i>,
                name: "upwork",
                handle: "~018ffafd05aab0c72d",
                href: "https://www.upwork.com/freelancers/~018ffafd05aab0c72d",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-800 border border-slate-700 hover:border-blue-600 hover:translate-x-1 hover:shadow-[0_0_14px_#2563eb33] rounded-xl px-4 py-3 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <p className="text-slate-100 text-sm font-semibold">
                    {s.name}
                  </p>
                  <p className="text-slate-500 text-xs">{s.handle}</p>
                </div>
                <span className="text-slate-600">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
