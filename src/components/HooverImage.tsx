type HoverImageProps = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
};

export default function HoverImage({
  src,
  alt,
  title,
  subtitle,
}: HoverImageProps) {
  return (
    <div className="group relative aspect-square w-full overflow-hidden">
      <img src={src} alt={alt} className="h-full w-full object-cover" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <h3 className="px-4 text-center text-xl font-bold text-white sm:text-2xl">
          {title}
        </h3>

        {subtitle !== undefined && (
          <p className="mt-2 text-center text-sm text-(--color-primary) sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
