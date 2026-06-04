import * as React from "react";
import { cn } from "../../../lib/utils";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { accent?: boolean }
>(({ className, accent, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative border-2 border-bone bg-ink p-6 transition-[transform,box-shadow]",
      accent ? "shadow-brut-rust" : "shadow-brut",
      "hover:-translate-x-[2px] hover:-translate-y-[2px]",
      accent ? "hover:shadow-[8px_8px_0_0_#ff5500]" : "hover:shadow-[8px_8px_0_0_#ededed]",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-start justify-between gap-4 border-b-2 border-bone/30 pb-3 mb-4", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("font-display text-xl font-bold uppercase tracking-tight", className)} {...props} />
);

export const CardMeta = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50", className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-sm leading-relaxed text-bone/80", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-5 flex flex-wrap items-center gap-3 border-t-2 border-bone/30 pt-3", className)} {...props} />
);
