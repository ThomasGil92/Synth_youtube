import { motion, Variants } from "framer-motion";
export const Loader = ({ bg = "bg-blue-800" }: { bg?: string }) => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
        ease: "circIn",
      },
    },
  };

  return (
    <motion.div
      transition={{
        staggerChildren: 0.1,
      }}
      initial='initial'
      animate='animate'
      className='flex gap-1'
    >
      <motion.div
        variants={variants as Variants}
        className={`h-12 w-2 ${bg}`}
      />
      <motion.div
        variants={variants as Variants}
        className={`h-12 w-2 ${bg}`}
      />
      <motion.div
        variants={variants as Variants}
        className={`h-12 w-2 ${bg}`}
      />
      <motion.div
        variants={variants as Variants}
        className={`h-12 w-2 ${bg}`}
      />
      <motion.div
        variants={variants as Variants}
        className={`h-12 w-2 ${bg}`}
      />
    </motion.div>
  );
};
