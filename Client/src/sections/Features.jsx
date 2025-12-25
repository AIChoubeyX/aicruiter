import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Monitor, Briefcase, Code, Send, FileCheck } from "lucide-react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("copilots");

  const tabs = [
    { id: "copilots", label: "Copilots", icon: Monitor },
    { id: "career", label: "Career Launch Pad", icon: Briefcase },
    { id: "coding", label: "Coding Copilot", icon: Code },
    { id: "autojob", label: "Auto Job Apply", icon: Send },
    { id: "assessment", label: "Online Assessment", icon: FileCheck },
  ];

  const features = [
    "Personalized Answers",
    "Detailed Feedbacks and Correction",
    "Only You Can See",
  ];

  return (
    <SectionWrapper id="features" className="bg-card">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center">
          <Monitor className="w-8 h-8 text-foreground" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8"
      >
        Core Features
      </motion.h2>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Feature Display */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Main Feature Card */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
          {/* Header bar */}
          <div className="absolute top-0 left-0 right-0 bg-foreground/10 backdrop-blur-sm py-3 px-6 z-10">
            <h3 className="text-lg md:text-xl font-bold text-foreground text-center">
              AI Interview & Meeting Assistant
            </h3>
          </div>

          {/* Feature tags */}
          <div className="absolute top-16 left-0 right-0 flex justify-center gap-4 z-10">
            {features.map((feature, index) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-xs md:text-sm text-foreground/80"
              >
                • {feature}
              </motion.span>
            ))}
          </div>

          {/* Placeholder for video/image */}
          <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
            <div className="text-center p-8">
              <Monitor className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Interview Assistant Preview</p>
            </div>
          </div>
        </div>

        {/* Try It Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <button className="px-6 py-3 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors flex items-center gap-2">
            Try It Now
            <span>→</span>
          </button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Features;


