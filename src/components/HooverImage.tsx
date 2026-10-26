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
    <div className="group w-full ">
      {/* Project image */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover" />

        {/* Desktop hover overlay */}
        <div className="pointer-events-none absolute inset-0 hidden flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 sm:flex sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
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
      {/* Mobile project information */}
      <div className="mt-3 text-center sm:hidden">
        <h3 className="text-lg font-bold text-(--color-primary)">{title}</h3>
      </div>
    </div>
  );
}
