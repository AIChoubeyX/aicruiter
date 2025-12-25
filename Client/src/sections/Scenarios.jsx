import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Code, Briefcase, LineChart, DollarSign, PieChart, FileText, Phone, Users, Cpu } from "lucide-react";

const Scenarios = () => {
  const scenarios = [
    {
      icon: Code,
      title: "System Design Interviews",
      description: "Need an edge in system design interviews? RecruitIn AI Coding Copilot delivers real-time insights on architecture and scalability.",
    },
    {
      icon: Code,
      title: "Software Engineering Interviews",
      description: "Lock in your software engineering offer with Coding Copilot's real-time coding guidance.",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Need to elevate your PM interview game? Unlock your potential with RecruitIn AI's real-time insights.",
    },
    {
      icon: LineChart,
      title: "Financial Interviews",
      description: "Nail your top finance interviews with RecruitIn AI's real-time insights on financial models, market trends, and investment strategies.",
    },
    {
      icon: DollarSign,
      title: "Market Sizing Interviews",
      description: "Get ahead! Deliver a standout pitch to your top marketing job offer with RecruitIn AI.",
    },
    {
      icon: PieChart,
      title: "Case Study Interviews",
      description: "Get ready to impress! Master your case study interviews with RecruitIn AI's real-time feedback.",
    },
    {
      icon: Phone,
      title: "Sales Calls",
      description: "Struggling to close deals? Our AI provides real-time sales insights and helps you respond to client questions with confidence and accuracy.",
    },
    {
      icon: Users,
      title: "Consultation Sessions",
      description: "Don't walk! Start delivering high-impact consultations with real-time insights and tailored solutions from RecruitIn AI.",
    },
    {
      icon: FileText,
      title: "Deep Dive",
      description: "Enhance your interview games with RecruitIn AI's Co-Pilot features, including memory clearing, pausing, and autoscrolling.",
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
    <SectionWrapper id="scenarios" className="bg-card">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {scenarios.map((scenario) => (
          <motion.div
            key={scenario.title}
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden border border-border bg-card hover-lift"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <scenario.icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {scenario.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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


