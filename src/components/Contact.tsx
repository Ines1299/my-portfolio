import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      alert("Sent!");
      form.current.reset();
    } catch (err) {
      console.log(err);
      alert("failed to send message.");
    }
    setLoading(false);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button
        type="submit"
        disabled={loading}
        className=" bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
