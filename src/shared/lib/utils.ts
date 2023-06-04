import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  whileTap: () => ({
    scale: 1
  }),

  whileHover: () => ({
    scale: 0.9,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 17,
      stiffness: 400,
    },
  }),
};

export const formVariants: Variants = {
  hidden: () => ({
    opacity: 0
  }),

  visible: () => ({
    opacity: 1,
    transition: {
      type: "tween",
      delay: .6,
      duration: 1,
    },
  }),
};