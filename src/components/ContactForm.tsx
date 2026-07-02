import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-md flex flex-col gap-10"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
        className="bg-transparent border-b border-black outline-none text-3xl pb-2 placeholder-black"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className="bg-transparent border-b border-black outline-none text-3xl pb-2 placeholder-black"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="bg-transparent border-b border-black outline-none text-3xl pb-2 placeholder-black"
      />
      <button
        type="submit"
        disabled={loading}
        className=" bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 text-2xl w-fit transition font-bold rounded"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
