import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Globe, Cpu, Users, Layers, Smartphone, Zap, ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const WhyRecruitIn = () => {
  const features = [
    {
      icon: Globe,
      category: "Speech Recognition",
      title: "Multilingual",
      description: "Experience a lightning-fast 115 ms response time for natural, uninterrupted interviews—complete seamlessly in 42 languages with regional accent and dialect support, breaking down language barriers with AI-powered communication.",
      link: { text: "AI-driven localization", href: "#" },
    },
    {
      icon: Cpu,
      category: "Premium AI",
      title: "Advanced AI Models",
      description: "Powered by the latest and most capable models from Deepseek, Azure OpenAI, Google Gemini, Claude, and Grok—always updated to ensure top-tier reasoning, accuracy, and performance. Includes integrated WebSearch for real-time results. Far beyond the lightweight models used by most platforms.",
      link: { text: "AI-driven localization", href: "#" },
    },
    {
      icon: Users,
      category: "Constant Innovation",
      title: "Built by Users, for Users",
      description: "We improve fast because our users shape the product—every piece of feedback is valued by impact and implemented rapidly so you always get the best interview support possible. Join our Discord and submit your ideas and feature requests!",
      link: { text: "Powered by user insights", href: "#" },
    },
    {
      icon: Layers,
      category: "Full Coverage",
      title: "Complete Career Ecosystem",
      description: "One platform for everything: build your resume, find and apply to jobs, ace your interviews, and tap into expert communities to excel at every stage.",
      link: { text: "Full ecosystem", href: "#" },
    },
    {
      icon: Smartphone,
      category: "Mobile Optimized",
      title: "Practice Anywhere",
      description: "No app download needed – get real-time support in your live interview and conduct mock interviews anywhere, anytime with our mobile-optimized platform. start practicing interviews instantly from your phone's browser. Supported Browsers.",
      link: { text: "Mobile-first design", href: "#" },
    },
    {
      icon: Zap,
      category: "Cutting-Edge Technology",
      title: "Dual-Layer AI Platform",
      description: "The first dual-layer platform offering both an AI Copilot and an AI Coach running simultaneously, delivering real-time insights and instant corrections.",
      link: { text: "Next-Gen Solution", href: "#" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id="why">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Why use RecruitIn AI™ ?
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
      >
        The most advanced interview preparation platform, backed by cutting-edge AI technology
      </motion.p>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="p-6 rounded-2xl border border-border bg-card hover-lift hover-glow"
          >
            {/* Category */}
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {feature.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mt-2 mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {feature.description}
            </p>

            {/* Icon Display - Last Item Special */}
            {index === 5 && (
              <div className="flex gap-1 my-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-foreground/30"
                    style={{ height: `${Math.random() * 20 + 10}px` }}
                  />
                ))}
              </div>
            )}

            {/* Link */}
            <a
              href={feature.link.href}
              className="inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors group"
            >
              <ArrowRight className="w-4 h-4" />
              <span>{feature.link.text}</span>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Button size="lg">
          Start Practicing Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

      {/* Footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-muted-foreground mt-6"
      >
        * Start practicing with the most advanced career preparation platform available
      </motion.p>
    </SectionWrapper>
  );
};

export default WhyRecruitIn;


