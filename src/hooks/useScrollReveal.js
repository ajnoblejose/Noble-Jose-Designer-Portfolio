import { useReducedMotion } from 'framer-motion';
import {
  SCROLL_ANIMATION_CONFIG,
  getContainerVariants,
  getItemVariants,
  reducedMotionVariants,
} from '../config/animations';

/**
 * Custom hook providing centralized scroll animation properties
 * 
 * @param {Object} options
 * @param {boolean} options.isContainer - Whether this element orchestrates staggered children
 * @param {number} options.stagger - Stagger delay between children in seconds (defaults to 0.1s / 100ms)
 * @param {number} options.delay - Delay before starting in seconds
 * @param {number} options.displacement - Vertical displacement in px (defaults to 24px)
 * @param {number} options.duration - Duration in seconds (defaults to 0.7s / 700ms)
 * @param {Object} options.viewport - Custom viewport override
 */
export function useScrollReveal(options = {}) {
  const shouldReduceMotion = useReducedMotion();
  const {
    isContainer = false,
    stagger = SCROLL_ANIMATION_CONFIG.staggerDelay,
    delay = 0,
    displacement = SCROLL_ANIMATION_CONFIG.displacement,
    duration = SCROLL_ANIMATION_CONFIG.duration,
    viewport = SCROLL_ANIMATION_CONFIG.viewport,
  } = options;

  if (shouldReduceMotion) {
    return {
      initial: 'visible',
      animate: 'visible',
      variants: reducedMotionVariants,
    };
  }

  const variants = isContainer
    ? getContainerVariants(stagger, delay)
    : getItemVariants(displacement, duration);

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
      once: viewport.once ?? SCROLL_ANIMATION_CONFIG.viewport.once,
      amount: viewport.amount ?? SCROLL_ANIMATION_CONFIG.viewport.amount,
      margin: viewport.margin ?? SCROLL_ANIMATION_CONFIG.viewport.margin,
    },
    variants,
  };
}
