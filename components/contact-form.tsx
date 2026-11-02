'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, LoaderCircle } from 'lucide-react';

const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const configured = Boolean(service && template && publicKey);

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState(false);
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    setError(false);
    setFeedback('');
    setCopied(false);
    if (!name || !email || !message) {
      setError(true);
      setFeedback('Completa todos los campos sin dejarlos en blanco.');
      return;
    }
    if (!configured) {
      setDraft(
        `Hola, soy ${name}.\n\n${message}\n\nPuedes responderme en ${email}.`,
      );
      setFeedback(
        'Tu mensaje está preparado, pero no se ha enviado. Cópialo y envíamelo por LinkedIn.',
      );
      return;
    }
    setSending(true);
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        service!,
        template!,
        {
          name,
          from_name: name,
          email,
          from_email: email,
          reply_to: email,
          message,
        },
        {
          publicKey: publicKey!,
          limitRate: { id: 'contact', throttle: 60000 },
          blockHeadless: true,
        },
      );
      setFeedback('¡Mensaje enviado! Gracias por contarme tu idea.');
      form.reset();
      setDraft('');
    } catch {
      setError(true);
      setFeedback(
        'No se pudo enviar el mensaje. Inténtalo de nuevo en un minuto o escríbeme directamente por LinkedIn. Tus datos siguen en el formulario.',
      );
    } finally {
      setSending(false);
    }
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setError(true);
      setFeedback(
        'No se ha podido copiar automáticamente. Selecciona y copia el texto de abajo.',
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={sending}>
      <div className="form-heading">
        <h2>
          Cuéntame tu idea<span className="accent">.</span>
        </h2>
        <p>
          {configured
            ? 'Completa el formulario y hablemos de tu próximo proyecto.'
            : 'Prepara tu mensaje, cópialo y envíamelo por LinkedIn. Este formulario no envía ni almacena tus datos.'}
        </p>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">
            Tu nombre <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            placeholder="¿Cómo te llamas?"
            autoComplete="name"
            required
            maxLength={100}
            disabled={sending}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">
            Tu email <span>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="hola@tuemail.com"
            autoComplete="email"
            required
            maxLength={254}
            disabled={sending}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">
          ¿Qué tienes en mente? <span>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Un proyecto, una colaboración, una oportunidad…"
          rows={5}
          required
          minLength={15}
          maxLength={5000}
          disabled={sending}
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Deja este campo vacío</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-privacy">
        {configured
          ? 'Tus datos se usan solo para responder a tu consulta. El envío se procesa a través de EmailJS.'
          : 'Nada se envía automáticamente. Tú decides cuándo y dónde compartir tu mensaje.'}
      </p>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={sending}
      >
        {sending ? (
          <>
            <LoaderCircle size={18} className="spin" /> Enviando…
          </>
        ) : (
          <>
            {configured ? 'Enviar mensaje' : 'Preparar mensaje'}{' '}
            <ArrowUpRight size={18} />
          </>
        )}
      </button>
      <div
        className={`form-feedback ${error ? 'is-error' : ''}`}
        role="status"
        aria-live="polite"
      >
        {feedback}
      </div>
      {draft && (
        <div className="draft-box">
          <label htmlFor="draft-message">Tu mensaje listo para copiar</label>
          <textarea id="draft-message" value={draft} readOnly rows={6} />
          <button
            type="button"
            className="button button-outline"
            onClick={copyDraft}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Mensaje copiado' : 'Copiar mensaje'}
          </button>
        </div>
      )}
    </form>
  );
}
