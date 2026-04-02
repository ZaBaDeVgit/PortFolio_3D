"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.querySelectorAll('.form-reveal'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_kulr4zo", "template_oo2wnja", e.target as HTMLFormElement, "kYSi4Ul0jf8UDegcT")
      .then((result) => {
        console.log("Mensaje enviado: ", result.text);
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.",
          confirmButtonColor: "#ff1b00",
          background: "#1a1a2e",
          color: "#fff",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("Error al enviar: ", error.text);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
          confirmButtonColor: "#ff1b00",
          background: "#1a1a2e",
          color: "#fff",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <ContainerPage>
      <TransitionPage />
      <CircleImage />
      <div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="form-reveal text-4xl md:text-5xl font-black text-center mb-4">
          <span className="text-gradient">Contáctame</span>
        </h1>
        <p className="form-reveal text-white/60 mb-12 text-center max-w-md">
          ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaboraciones y nuevos retos.
        </p>
        
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-reveal glass-strong rounded-3xl p-8 w-full max-w-md space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div>
            <label className="form-label flex items-center gap-2">
              <User size={16} className="text-[#ff1b00]" /> Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label flex items-center gap-2">
              <Mail size={16} className="text-[#ff1b00]" /> Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label flex items-center gap-2">
              <MessageSquare size={16} className="text-[#ff1b00]" /> Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={5}
              className="form-input resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="btn-glow w-full flex items-center justify-center gap-2"
          >
            {isSending ? (
              <div className="loader w-5 h-5 border-2" />
            ) : (
              <>
                <Send size={18} /> Enviar mensaje
              </>
            )}
          </button>
        </motion.form>

        <div className="form-reveal mt-12 flex flex-wrap justify-center gap-6">
          {[
            { name: "YouTube", href: "https://www.youtube.com/@ZaBaDeV-pn2yq/featured", color: "hover:text-red-500" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/juan-jose-zabala-rios", color: "hover:text-blue-500" },
            { name: "Twitter", href: "https://x.com/ZaBaDeV_", color: "hover:text-sky-400" },
            { name: "Twitch", href: "https://www.twitch.tv/zabadev", color: "hover:text-purple-500" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/60 ${social.color} transition-all duration-300 hover:scale-110 font-semibold`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default Contact;
