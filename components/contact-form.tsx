"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_kulr4zo", "template_oo2wnja", e.target as HTMLFormElement, "kYSi4Ul0jf8UDegcT")
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Te contactaremos pronto.",
          confirmButtonColor: "#ff1b00",
          background: "#1a1a2e",
          color: "#fff",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje.",
          confirmButtonColor: "#ff1b00",
          background: "#1a1a2e",
          color: "#fff",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] via-white to-[#4a2fbd]">
              Contáctame
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 space-y-6"
          style={{
            boxShadow: "0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset",
          }}
        >
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-2">
              <User size={16} className="text-[#ff1b00]" /> Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff1b00]/50 focus:ring-2 focus:ring-[#ff1b00]/20 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-2">
              <Mail size={16} className="text-[#ff1b00]" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff1b00]/50 focus:ring-2 focus:ring-[#ff1b00]/20 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-2">
              <MessageSquare size={16} className="text-[#ff1b00]" /> Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff1b00]/50 focus:ring-2 focus:ring-[#ff1b00]/20 transition-all duration-300 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff1b00] to-[#fb4a02] text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,27,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Send size={20} /> Enviar mensaje
              </>
            )}
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { name: "YouTube", href: "https://www.youtube.com/@ZaBaDeV-pn2yq/featured" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/juan-jose-zabala-rios" },
            { name: "Twitter", href: "https://x.com/ZaBaDeV_" },
            { name: "Twitch", href: "https://www.twitch.tv/zabadev" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#ff1b00] transition-all duration-300 hover:scale-110 font-semibold"
            >
              {social.name}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
