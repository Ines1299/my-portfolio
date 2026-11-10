import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeName } from "../themes/themes";

const themeOptions: { value: ThemeName; label: string }[] = [
  { value: "design", label: "Design" },
  { value: "coding", label: "Coding" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function selectTheme(selectedTheme: ThemeName) {
    setTheme(selectedTheme);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 whitespace-nowrap border border-(--color-primary) bg-(--color-background) px-2 py-1 text-xs text-(--color-primary) transition-colors hover:bg-(--color-primary) hover:text-white sm:px-4 sm:py-2 sm:text-sm"
      >
        Theme
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-36 border border-(--color-primary) bg-(--color-background) shadow-lg">
          {themeOptions.map((option) => {
            const isActive = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => selectTheme(option.value)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-(--color-primary) text-(--color-background)"
                    : "text-(--color-text) hover:bg-(--color-light-grey)"
                }`}
              >
                {option.label}
                {isActive && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
