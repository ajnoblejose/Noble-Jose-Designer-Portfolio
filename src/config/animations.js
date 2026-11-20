/**
 * Global Scroll Animation Configuration
 * Inspired by Velia Framer template (https://velia-portfolio.framer.website/)
 *
 * Global animation settings:
 * - Opacity: 0 to 1
 * - Vertical displacement: 24px
 * - Duration: 700ms (0.7s)
 * - Easing: ease-out (cubic-bezier(0.16, 1, 0.3, 1))
 * - Stagger delay: 100ms (0.1s)
 * - Repeat: enabled (reversible / repeatable)
 * - Direction: bidirectional (fade in as entering viewport, fade out as leaving)
 */

export const SCROLL_ANIMATION_CONFIG = {
  opacity: {
    initial: 0,
    animate: 1,
  },
  displacement: 24, // 24px vertical displacement
  duration: 0.7, // 700ms
  easing: [0.16, 1, 0.3, 1], // premium ease-out curve
  staggerDelay: 0.1, // 100ms
  repeat: true, // reversible & repeatable
  direction: 'bidirectional',
  viewport: {
    once: false, // repeatable when scrolling in both directions
    amount: 0.15, // triggers smoothly at 15% visibility
    margin: '0px 0px -40px 0px', // viewport-based entrance threshold
  },
};

/**
 * Container variant that coordinates staggered children
 */
export const getContainerVariants = (stagger = SCROLL_ANIMATION_CONFIG.staggerDelay, delay = 0) => ({
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: stagger,
      staggerDirection: -1, // reverse when scrolling out
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

/**
 * Item variant applied to headings, cards, text blocks, images, and buttons
 */
export const getItemVariants = (displacement = SCROLL_ANIMATION_CONFIG.displacement, duration = SCROLL_ANIMATION_CONFIG.duration) => ({
  hidden: {
    opacity: 0,
    y: displacement,
    transition: {
      duration,
      ease: SCROLL_ANIMATION_CONFIG.easing,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: SCROLL_ANIMATION_CONFIG.easing,
    },
  },
});

/**
 * Accessible fallback for users with prefers-reduced-motion
 */
export const reducedMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};
