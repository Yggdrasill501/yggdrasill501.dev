import * as React from "react";
import { cn } from "../../../lib/utils";
import { Slot } from "./slot";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Use the rust block-shadow instead of the bone one. */
  accent?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      data-accent={accent ? "" : undefined}
      className={cn(
        "relative border-2 border-bone bg-ink p-6 transition-[transform,box-shadow]",
        accent ? "shadow-brut-rust" : "shadow-brut",
        "hover:-translate-x-[2px] hover:-translate-y-[2px]",
        accent ? "hover:shadow-brut-rust-lg" : "hover:shadow-brut-lg",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div
    data-slot="card-header"
    className={cn("flex items-start justify-between gap-4 border-b-2 border-bone/30 pb-3 mb-4", className)}
    {...props}
  />
);

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /** Render the single child element (e.g. an `<h2>`) with the title styles instead of an `<h3>`. */
  asChild?: boolean;
};

export const CardTitle = ({ className, asChild = false, ...props }: CardTitleProps) => {
  const classes = cn("font-display text-xl font-bold uppercase tracking-tight break-words", className);
  if (asChild) return <Slot data-slot="card-title" className={classes} {...props} />;
  return <h3 data-slot="card-title" className={classes} {...props} />;
};

export type CardMetaProps = React.HTMLAttributes<HTMLSpanElement>;

export const CardMeta = ({ className, ...props }: CardMetaProps) => (
  <span
    data-slot="card-meta"
    className={cn("font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50", className)}
    {...props}
  />
);

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, ...props }: CardContentProps) => (
  <div
    data-slot="card-content"
    className={cn("text-sm leading-relaxed text-bone/80", className)}
    {...props}
  />
);

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div
    data-slot="card-footer"
    className={cn("mt-5 flex flex-wrap items-center gap-3 border-t-2 border-bone/30 pt-3", className)}
    {...props}
  />
);
