import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    { id: "general", name: "General", count: 7 },
    { id: "career", name: "Career Launchpad", count: 5 },
    { id: "resume", name: "Resume Tools", count: 4 },
    { id: "profile", name: "Profile Optimization", count: 4 },
    { id: "cover", name: "Cover Letter Tools", count: 3 },
    { id: "communication", name: "Professional Communication", count: 4 },
    { id: "tracking", name: "Job Search & Tracking", count: 4 },
    { id: "planning", name: "Career Planning", count: 4 },
    { id: "assessment", name: "Skill Assessment", count: 2 },
  ];

  const questions = {
    general: [
      { id: "1", question: "Web App System Requirement", answer: "RecruitIn AI works best with modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for optimal performance." },
      { id: "2", question: "Desktop App System Requirement", answer: "Our desktop app is available for Windows 10+ and macOS 10.14+. Minimum 4GB RAM and stable internet connection required." },
      { id: "3", question: "Supported Browser", answer: "We support Chrome 90+, Firefox 88+, Safari 14+, and Microsoft Edge 90+. For best experience, use Chrome or Firefox." },
      { id: "4", question: "What are the supported Industries?", answer: "RecruitIn AI supports all major industries including Tech, Finance, Healthcare, Consulting, Marketing, and more." },
      { id: "5", question: "How do I cancel?", answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your billing period." },
      { id: "6", question: "What are some other use cases?", answer: "Beyond interviews, use RecruitIn AI for sales calls, presentations, meetings, and any professional communication scenarios." },
      { id: "7", question: "How does the credit work?", answer: "Credits are used for AI-powered features. Each plan includes a monthly credit allocation. Additional credits can be purchased as needed." },
    ],
  };

  return (
    <SectionWrapper id="faq" className="bg-card">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-muted-foreground mb-12"
      >
        Find answers to common questions about our AI-powered career tools
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="p-4 rounded-2xl border border-border bg-card">
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="block text-xs opacity-70">{category.count} questions</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Questions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground">General</h3>
            <p className="text-sm text-muted-foreground">Basic information about our platform and services</p>
          </div>

          <div className="space-y-3">
            {questions.general.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openQuestion === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openQuestion === item.id && (
                    <motion.div
                      initial={{ height, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Showing 7 questions in General • Updated recently
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;


