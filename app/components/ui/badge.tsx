import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]",
  {
    variants: {
      variant: {
        default: "border-bone bg-bone text-ink",
        rust: "border-rust bg-rust text-ink",
        outline: "border-bone bg-transparent text-bone",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { badgeVariants };
