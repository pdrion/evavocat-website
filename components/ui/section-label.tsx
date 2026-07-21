import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export const SectionLabel = ({ children, align = "left", className }: Props) => {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        isCenter && "justify-center",
        className
      )}
    >
      <span className="h-px w-10 bg-primary/70" />
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rotate-45 bg-primary"
      />
      <p className="text-[11px] text-primary tracking-[0.3em] uppercase font-semibold">
        {children}
      </p>
      {isCenter && (
        <>
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rotate-45 bg-primary"
          />
          <span className="h-px w-10 bg-primary/70" />
        </>
      )}
    </div>
  );
};

export const Divider = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-center gap-3", className)}>
    <span className="h-px w-16 bg-primary/40" />
    <span aria-hidden className="h-2 w-2 rotate-45 bg-primary" />
    <span className="h-px w-16 bg-primary/40" />
  </div>
);
