interface Spec {
  label: string;
  value: string | React.ReactNode;
}

interface ProjectSpecsProps {
  specs: Spec[];
}

export default function ProjectSpecs({ specs }: ProjectSpecsProps) {
  return (
    <div className="border border-black w-72">
      <div className="bg-black px-4 py-3">
        <p className="text-white text-xs font-bold tracking-widest uppercase">
          How it was built
        </p>
      </div>
      {specs.map((spec, index) => (
        <div
          key={index}
          className="flex gap-4 px-4 py-3 border-b border-black last:border-b-0"
        >
          <p className="text-xs font-bold tracking-widest uppercase w-24 shrink-0">
            {spec.label}
          </p>
          <p className="text-xs font-mono">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}
