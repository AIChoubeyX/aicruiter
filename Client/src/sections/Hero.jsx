import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 relative overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          <span className="text-sm text-muted-foreground">AI-Powered Interview </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Ace Your Job Interviews With</span>
          <br />
          <span className="text-foreground underline decoration-2 underline-offset-4">RecruitIn AI™</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-semibold text-foreground mb-4"
        >
          #1 Real-time AI Interview Assistant for Job Seekers
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Actively listen and automatically generate{" "}
          <span className="text-foreground font-medium">insights</span>,{" "}
          <span className="text-foreground font-medium">answers</span>,{" "}
          <span className="text-foreground font-medium">guidance</span>, and{" "}
          <span className="text-foreground font-medium">feedback</span> on the spot.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Button size="lg" className="group">
            Start For Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-foreground" />
            <span>No credit card required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


