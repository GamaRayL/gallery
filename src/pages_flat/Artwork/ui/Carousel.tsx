import { FC, useEffect, useRef, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from "next/image";
import classNames from "classnames";

interface ICarousel {
  className?: string;
}
const Carousel: FC<ICarousel> = ({ className }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = carouselRef.current?.scrollWidth;
    const offsetWidth = carouselRef.current?.offsetWidth;

    if (scrollWidth && offsetWidth)
      setWidth(scrollWidth - offsetWidth);
  }, []);

  const handlePrevClick = () => {
    // setCurrentImage((prevImage) => (prevImage === 0 ? array.length - 1 : prevImage - 1));
  };

  const handleNextClick = () => {
    // setCurrentImage((prevImage) => (prevImage === array.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }} className={classNames(className, "carousel")}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="carousel__inner">
        {/* {array.map(i => {
          return (
            <motion.div className="carousel__item" key={i.id} >
              <Image className="carousel__image" src={i.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </motion.div>
          );
        })} */}
      </motion.div>
      {/* <motion.img
        src={array[currentImage].image}
        alt={`Image ${currentImage + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: 'auto' }}
      /> */}
    </motion.div>
  );
};

export default Carousel;
