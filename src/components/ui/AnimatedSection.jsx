import FadeInWrap from "./FadeInWrap";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  y = 30,
  ...props
}) {
  return (
    <FadeInWrap as="section" delay={delay} className={className} {...props}>
      {children}
    </FadeInWrap>
  );
}
