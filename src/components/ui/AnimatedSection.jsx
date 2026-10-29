import FadeInWrap from "./FadeInWrap";

/**
 * Unified animation wrapper: delegates directly to FadeInWrap with as="section".
 * Kept for clean component encapsulation and backward compatibility.
 */
export default function AnimatedSection(props) {
  return <FadeInWrap as="section" {...props} />;
}
