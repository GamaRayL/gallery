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

export const array = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763938/1_jqdd3e.webp"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763932/2_t4gyz9.webp"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763934/3_expe87.webp"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763935/4_zolo9o.webp"
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763936/5_hi4tlc.webp"
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763911/6_olkqim.webp"
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763939/7_lrktsv.webp"
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763947/8_duygko.webp"
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dvkfwqm4y/image/upload/v1684763944/9_c0w6z8.webp"
  }
];