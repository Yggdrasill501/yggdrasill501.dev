import * as React from "react";
import { cn } from "../../../lib/utils";

export type SlotProps = React.HTMLAttributes<HTMLElement>;

type SlottableProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement>;

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    if (!React.isValidElement<SlottableProps>(children)) return null;
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      className: cn(className, children.props.className),
      ref,
    });
  }
);
Slot.displayName = "Slot";
