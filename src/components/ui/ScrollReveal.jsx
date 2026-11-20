import { motion, useReducedMotion } from 'framer-motion';
import {
  SCROLL_ANIMATION_CONFIG,
  getContainerVariants,
  getItemVariants,
  reducedMotionVariants,
} from '../../config/animations';

/**
 * ScrollReveal Component
 * Reversible, bidirectional viewport scroll reveal component with 24px displacement, 700ms duration, and 100ms stagger.
 */
export default function ScrollReveal({
  as = 'div',
  container = false,
  stagger = SCROLL_ANIMATION_CONFIG.staggerDelay,
  delay = 0,
  displacement = SCROLL_ANIMATION_CONFIG.displacement,
  duration = SCROLL_ANIMATION_CONFIG.duration,
  viewport = SCROLL_ANIMATION_CONFIG.viewport,
  className = '',
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const variants = container
    ? getContainerVariants(stagger, delay)
    : getItemVariants(displacement, duration);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: viewport.once ?? SCROLL_ANIMATION_CONFIG.viewport.once,
        amount: viewport.amount ?? SCROLL_ANIMATION_CONFIG.viewport.amount,
        margin: viewport.margin ?? SCROLL_ANIMATION_CONFIG.viewport.margin,
      }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * ScrollRevealItem Component
 * Used inside a parent <ScrollReveal container={true}> to inherit coordinated stagger timings.
 */
export function ScrollRevealItem({
  as = 'div',
  displacement = SCROLL_ANIMATION_CONFIG.displacement,
  duration = SCROLL_ANIMATION_CONFIG.duration,
  className = '',
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const variants = getItemVariants(displacement, duration);

  return (
    <MotionComponent
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

ScrollReveal.Item = ScrollRevealItem;
