import { motion } from "motion/react";

const variants = {
  fill: "bg-emas-600 text-white hover:bg-emas-700",
  outline:
    "border-2 border-tanah-800 text-tanah-800 hover:bg-tanah-800 hover:text-white",
};

export default function Button({
  children,
  variant = "fill",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-emas-500 focus-visible:ring-offset-2";

  const Tag = href ? "a" : "button";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Tag
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
