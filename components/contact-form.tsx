"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_kulr4zo", "template_oo2wnja", e.currentTarget, "kYSi4Ul0jf8UDegcT")
      .then(() => {
        Swal.fire({ icon: "success", title: "Enviado!", background: "#1f2937", color: "#fff" });
        (e.target as HTMLFormElement).reset();
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "Error", background: "#1f2937", color: "#fff" });
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="pt-24 px-6 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="text-red-600">Contáctame</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Nombre" required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white" />
          <input type="email" name="email" placeholder="Email" required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white" />
          <textarea name="message" placeholder="Mensaje" rows={4} required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white" />
          <button type="submit" disabled={sending}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded disabled:opacity-50">
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-gray-400">
          <a href="https://www.youtube.com/@ZaBaDeV-pn2yq/featured" target="_blank" className="hover:text-red-500">YouTube</a>
          <a href="https://www.linkedin.com/in/juan-jose-zabala-rios" target="_blank" className="hover:text-red-500">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
