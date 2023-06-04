import { Variants } from "framer-motion";

export const infoChildVariants: Variants = {
  hidden: () => ({
    y: 20,
    opacity: 0
  }),
  visible: () => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: .4
    },
  }),
};