import { Variants } from "framer-motion";

export const homeCardVariants: Variants = {
  whileTap: () => ({
    scale: 1
  }),

  whileHover: () => ({
    scale: 1.05,
    opacity: 1,
    transition: {
      type: "tween",
      damping: 17,
      stiffness: 400,
    },
  }),
};