import { Variants } from "framer-motion";

export const expandVariants: Variants = {
  hidden: () => ({
    y: -20,
    opacity: 0,
  }),
  visible: () => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: .5,
      damping: 17,
      stiffness: 400,
      type: "spring",
    },
  }),
};