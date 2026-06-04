import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 font-mono text-xs uppercase tracking-[0.18em] transition-[transform,box-shadow] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default:
          "border-bone bg-bone text-ink shadow-brut-sm hover:shadow-brut hover:-translate-x-[1px] hover:-translate-y-[1px]",
        rust:
          "border-rust bg-rust text-ink shadow-brut-rust-sm hover:shadow-brut-rust hover:-translate-x-[1px] hover:-translate-y-[1px]",
        outline:
          "border-bone bg-transparent text-bone shadow-brut-sm hover:bg-bone hover:text-ink hover:shadow-brut hover:-translate-x-[1px] hover:-translate-y-[1px]",
        ghost:
          "border-transparent bg-transparent text-bone hover:border-bone hover:bg-bone/5",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-14 px-7 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
