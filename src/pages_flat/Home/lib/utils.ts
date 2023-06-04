import { Variants } from "framer-motion";

export const homeVariants: Variants = {
  hidden: (custom = { x: 0 }) => ({
    xChannelSelector: custom.x,
    opacity: 0
  }),
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: .5,
    },
  }),
};
