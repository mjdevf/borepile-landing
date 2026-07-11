import { motion } from "motion/react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  y = 30,
  once = true,
  amount = 0.1,
  margin = "0px 0px 100px 0px",
  ...props
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
