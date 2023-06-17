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

export const layoutBtnVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .4,
    }
  }
};

export const notificationVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .6,
    }
  }
};