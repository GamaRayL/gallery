import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: (custom = { y: 0 }) => ({
    y: custom.y,
    opacity: 0
  }),
  visible: (custom = { delay: .4 }) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: .5,
      delay: custom.delay
    },
  }),
};