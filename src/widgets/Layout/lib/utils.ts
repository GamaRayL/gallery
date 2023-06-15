import { Variants } from "framer-motion";

export const getTitle = (title: string) => `${title} | Галерея`;

export const layoutVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      duration: .5,
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
    }
  }
};