import React from "react";
import { cn } from "../utils";

const buttonVariants = (
  {
    variant = "default",
    size = "default",
    className = ""
  }: {
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | "is-black" | "is-white" | "is-alpha";
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
    className?: string;
  }
) => {
  // Base button styles matching fluid.glass
  const baseStyles = "inline-flex items-center justify-center font-[Aeonik_Mono] text-[1.2rem] font-[500] leading-[1.3] tracking-[.08em] text-uppercase whitespace-nowrap transition-all duration-300";
  
  // Size variants
  const sizeStyles = {
    default: "py-1.5 px-2.4",
    xs: "py-1 px-1.5",
    sm: "py-1.2 px-2",
    lg: "py-2 px-2.8",
    icon: "h-10 w-10",
    "icon-xs": "h-8 w-8",
    "icon-sm": "h-9 w-9",
    "icon-lg": "h-12 w-12"
  };
  
  // Variant styles matching fluid.glass
  const variantStyles = {
    default: "bg-transparent hover:bg-transparent",
    outline: "border border-transparent hover:border-transparent",
    secondary: "bg-transparent hover:bg-transparent",
    ghost: "bg-transparent hover:bg-transparent",
    destructive: "bg-transparent hover:bg-transparent",
    link: "bg-transparent hover:bg-transparent underline-offset-4 hover:underline",
    // Fluid Glass specific variants
    "is-black": "bg-[var(--color-black)] text-[var(--color-white)] hover:bg-[var(--color-black)]/90",
    "is-white": "bg-[color-mix(in_srgb,var(--color-white)_20%,transparent)] text-[var(--color-white)] hover:bg-[color-mix(in_srgb,var(--color-white)_30%,transparent)]",
    "is-alpha": "bg-transparent hover:bg-transparent"
  };
  
  return cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | "is-black" | "is-white" | "is-alpha";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };