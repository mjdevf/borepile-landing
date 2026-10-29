import React from "react";

const VARIANTS = {
  primary:
    "bg-accent text-on-primary hover:bg-accent-dark active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  secondary:
    "border border-border-muted bg-surface text-primary hover:bg-surface-container-low active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  ghost:
    "text-primary hover:bg-surface-container-low active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
};

const SIZES = {
  sm: "min-h-11 min-w-11 px-4 text-sm",
  md: "min-h-12 min-w-12 px-6 text-base",
  lg: "min-h-[52px] min-w-[52px] px-8 text-base",
};

export default function Button({
  as: Component,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  className = "",
  children,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.md;
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  const Tag = Component || "button";
  return (
    <Tag
      type={Tag === "button" ? type : undefined}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={combinedClasses}
      {...props}
    >
      {children}
    </Tag>
  );
}
