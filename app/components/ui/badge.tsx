import * as React from "react";
import { cn } from "../../../lib/utils";

type Variant = "default" | "rust" | "outline";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    default: "border-bone bg-bone text-ink",
    rust: "border-rust bg-rust text-ink",
    outline: "border-bone bg-transparent text-bone",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
