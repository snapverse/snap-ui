import { createElement, forwardRef } from "react";
import SnapUI from "#types";

export interface AccordionProps extends SnapUI.ComponentProps {
  children: React.ReactNode;
}

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...props }, ref) => {
    return createElement("section", { ...props, ref }, children);
  }
);

export const AccordionItem = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...props }, ref) => {
    return createElement("div", { ...props, ref }, children);
  }
);

AccordionRoot.displayName = "@snapverse/AccordionRoot";

AccordionItem.displayName = "@snapverse/AccordionItem";
