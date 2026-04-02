"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_kulr4zo", "template_oo2wnja", e.target as HTMLFormElement, "kYSi4Ul0jf8UDegcT")
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          confirmButtonColor: "#dc2626",
          background: "#111827",
          color: "#fff",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonColor: "#dc2626",
          background: "#111827",
          color: "#fff",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-red-500">Contáctame</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mensaje</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-gray-400">
          <a href="https://www.youtube.com/@ZaBaDeV-pn2yq/featured" target="_blank" className="hover:text-red-500">YouTube</a>
          <a href="https://www.linkedin.com/in/juan-jose-zabala-rios" target="_blank" className="hover:text-red-500">LinkedIn</a>
          <a href="https://x.com/ZaBaDeV_" target="_blank" className="hover:text-red-500">Twitter</a>
        </div>
      </motion.div>
    </div>
  );
}
