import { motion } from "motion/react";

const variants = {
  fill: "bg-primary text-on-primary hover:bg-on-surface-variant",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
};

export default function Button({
  children,
  variant = "fill",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded active:scale-[0.98]";

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
