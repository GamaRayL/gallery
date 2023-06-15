import { Variants } from "framer-motion";

export const homeVariants: Variants = {
  hidden: (custom = { x: 0 }) => ({
    x: custom.x,
    opacity: 0
  }),
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
    },
  }),
};
