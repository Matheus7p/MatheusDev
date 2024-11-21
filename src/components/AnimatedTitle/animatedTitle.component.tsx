import { motion } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
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
