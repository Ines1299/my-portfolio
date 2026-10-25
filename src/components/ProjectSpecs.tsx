import type { ReactNode } from "react";

interface Spec {
  label: string;
  value: string | ReactNode;
}

interface ProjectSpecsProps {
  specs: Spec[];
}

export default function ProjectSpecs({ specs }: ProjectSpecsProps) {
  return (
    <div className=" w-full">
      {/* Heading */}
      <div className="mb-5">
        <h3 className="text-xl leading-none text-(--color-primary) sm:text-2xl">
          SPECS
        </h3>
      </div>

      {/* Specifications */}
      <div className="border-t-2 border-(--color-secondary)">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="grid grid-cols-[90px_1fr] gap-4 border-b border-(--color-secondary) py-4"
          >
            <p className="text-[11px] font-bold tracking-wider text-(--color-primary)">
              {spec.label}
            </p>
            <p className="text-sm leading-snug text-(--color-secondary)">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
