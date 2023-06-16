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
      delay: .2,
      duration: .6,
    },
  }),
};

export const popupVariants: Variants = {
  hidden: (custom = { y: 0 }) => ({
    y: custom.y,
    opacity: 0,
    transition: {
      duration: .5
    }
  }),

  visible: () => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
    },
  }),
};