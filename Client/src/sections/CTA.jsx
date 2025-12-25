import { motion } from "framer-motion";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const partners = [
    { name: "AWS Startups", logo: "aws" },
    { name: "NVIDIA", logo: "nvidia" },
    { name: "Founders Hub", logo: "founders" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get started with RecruitIn AI today to unlock your potential.
            </h2>
            <Button size="lg">
              Try it Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Content - Partners */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
            <div className="flex flex-wrap justify-center lg:justify-end gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-4 rounded-xl border border-border bg-card/50"
                >
                  <span className="text-lg font-semibold text-muted-foreground">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


