import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionWrapper = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-16 md:py-24 px-4 md:px-8", className)}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;


