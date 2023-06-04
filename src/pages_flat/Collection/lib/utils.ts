import { Variants } from "framer-motion";

export const collectionVariants: Variants = {
  hidden: (custom = { y: 0 }) => ({
    y: custom.y,
    opacity: 0
  }),
  visible: (custom = { delay: .4, type: "tween" }) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: custom.type,
      duration: .5,
      delay: custom.delay
    },
  }),
};

export const getCorrectEnd = (value: number) => {
  const n = value % 10;
  const n1 = value % 100;
  if (n1 > 10 && n1 < 20) return `${value} картин`;
  if (n > 1 && n < 5) return `${value} картины`;
  if (n === 1) return `${value} картина`;
  if (value == 0) return `${value} картин`;
  return `${value} картины`;
};