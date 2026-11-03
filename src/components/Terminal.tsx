import type { ReactNode } from "react";

type CodingTerminalProps = {
  children: ReactNode;
  title?: string;
};

export default function Terminal({
  children,
  title = "projects — terminal",
}: CodingTerminalProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[#555555] bg-[#0000AA] shadow-xl">
      {/* Terminal title bar */}
      <div className="relative flex h-9 items-center justify-between bg-[#E8E8E8] px-3 sm:h-10 lg:h-12">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Window title */}
        <span
          className="absolute left-1/2 max-w-[55%] -translate-x-1/2 truncate text-xs font-medium text-black sm:text-sm lg:text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {title}
        </span>

        <div className="w-14" />
      </div>

      {/* Terminal content */}
      <div
        className="flex min-h-100 flex-col px-5 py-8 text-(--color-primary) sm:min-h-125 sm:px-10 sm:py-12 lg:min-h-0 lg:px-12 lg:py-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* Terminal commands */}
        <div className="mb-8 text-xs leading-relaxed sm:text-sm sm:mb-10 lg:text-sm lg:mb-4">
          <p>Last login: Today</p>
          <p>~ % cd projects</p>
          <p>~/projects % ls</p>
        </div>
        <div className="flex flex-1 flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}
