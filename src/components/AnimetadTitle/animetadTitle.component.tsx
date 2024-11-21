import { motion } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
  return (
    <motion.h4
      initial={{ opacity: 0, y: -50 }} // Posição inicial (fora da tela e invisível)
      animate={{ opacity: 1, y: 0 }} // Posição final (visível)
      transition={{
        duration: 1, // Duração da animação em segundos
        ease: "easeInOut", // Tipo de transição
      }}
    >
     {title}
    </motion.h4>
  );
};

export default AnimatedTitle;
