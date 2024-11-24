import { motion } from "framer-motion";
import { ReactElement } from "react";

type AnimatedTitleProps = {
  title: string | ReactElement;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{
        duration: 2, 
        ease: "easeInOut", 
      }}
    >
     {title}
    </motion.h2>
  );
};

export default AnimatedTitle;
