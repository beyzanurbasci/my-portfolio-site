import { type Transition } from "framer-motion";

export const fadeInTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: fadeInTransition,
};
