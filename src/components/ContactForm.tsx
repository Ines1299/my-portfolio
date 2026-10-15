import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || loading) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const fieldStyles =
    "w-full border-0 border-b-2 border-black bg-transparent pb-3 text-xl text-black placeholder:text-black/70 outline-none transition-colors focus:border-[var(--color-primary)] sm:text-2xl";

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-md flex flex-col gap-10"
    >
      <input
        type="text"
        name="user_name"
        aria-label="Name"
        placeholder="Name"
        autoComplete="name"
        required
        className={fieldStyles}
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
        required
        className={fieldStyles}
      />
      <textarea
        name="message"
        placeholder="Message"
        aria-label="Message"
        required
        rows={3}
        className={`${fieldStyles} resize-none`}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-fit cursor-pointer bg-(--color-primary) px-10 py-3 text-lg font-bold text-white transition-all duration-300 hoover:-translate-y-1 hoover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hoover:translate-y-0"
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm font-medium text-black">
          Your message was sent successfully! ♡
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-black">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
