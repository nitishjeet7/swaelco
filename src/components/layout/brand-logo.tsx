import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  markClassName,
  textClassName,
  subtitleClassName,
  subtitle = "Rising to New Heights",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  subtitleClassName?: string;
  subtitle?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/LogoVector.svg"
        alt={`SWAELCO ${subtitle} logo`}
        width={40}
        height={40}
        className={cn("h-10 w-10 object-contain", markClassName)}
      />
      <span className="flex w-[13rem] flex-col leading-tight">
        <span className={cn("block w-full text-2xl font-extrabold tracking-[0.12em] text-white", textClassName)}>
          SWAELCO
        </span>
        <span
          className={cn(
            "block w-full text-[8px] font-semibold uppercase tracking-[0.22em] text-blue-300",
            subtitleClassName,
          )}
        >
          {subtitle}
        </span>
      </span>
    </span>
  );
}
