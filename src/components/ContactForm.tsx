import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

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
        className={`w-fit cursor-pointer border px-6 py-3 text-xl font-bold outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${
          isCoding
            ? "border-black bg-black text-(--color-primary)"
            : "border-(--color-primary) bg-(--color-light-grey) text-(--color-primary)"
        }`}
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
