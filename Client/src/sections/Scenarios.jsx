import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Code, Briefcase, LineChart, DollarSign, PieChart, FileText, Phone, Users, Cpu } from "lucide-react";

const Scenarios = () => {
  const scenarios = [
    {
      icon: Code,
      title: "System Design Interviews",
      description: "Real-time insights on architecture and scalability for system design excellence.",
    },
    {
      icon: Code,
      title: "Software Engineering Interviews",
      description: "Real-time coding guidance to lock in your software engineering offer.",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Unlock your potential with real-time PM interview insights.",
    },
    {
      icon: LineChart,
      title: "Financial Interviews",
      description: "Master finance interviews with insights on models, trends, and strategies.",
    },
    {
      icon: DollarSign,
      title: "Market Sizing Interviews",
      description: "Deliver standout pitches with data-driven marketing insights.",
    },
    {
      icon: PieChart,
      title: "Case Study Interviews",
      description: "Master case studies with real-time feedback and analysis.",
    },
    {
      icon: Phone,
      title: "Sales Calls",
      description: "Close deals with real-time sales insights and confident responses.",
    },
    {
      icon: Users,
      title: "Consultation Sessions",
      description: "Deliver high-impact consultations with tailored AI solutions.",
    },
    {
      icon: FileText,
      title: "Deep Dive",
      description: "Advanced Co-Pilot features including memory clearing and autoscrolling.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <SectionWrapper id="scenarios">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-foreground" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
      >
        Support All Scenarios
      </motion.h2>

      {/* Scenarios Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {scenarios.map((scenario) => (
          <motion.div
            key={scenario.title}
            variants={itemVariants}
            className="group relative rounded-xl overflow-hidden border border-border bg-card hover-lift"
          >
            {/* Image placeholder */}
            <div className="h-32 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <scenario.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-base font-bold text-foreground mb-1.5">
                {scenario.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {scenario.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Scenarios;


