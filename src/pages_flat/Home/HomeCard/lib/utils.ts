import { Variants } from "framer-motion";

export const homeCardVariants: Variants = {
  whileTap: () => ({
    scale: 0.95
  }),

  whileHover: () => ({
    scale: 0.96,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 17,
      stiffness: 400,
    },
  }),
};