import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="inline-flex w-fit items-center justify-center transition-transform duration-200 hover:-translate-x-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5m7 7-7-7 7-7" stroke="white" strokeWidth="5" />
        <path
          d="M19 12H5m7 7-7-7 7-7"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
        />
      </svg>
    </button>
  );
}
