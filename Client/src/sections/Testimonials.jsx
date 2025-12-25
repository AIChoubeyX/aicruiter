import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Before I found RecruitIn AI, preparing for project management interviews was exhausting. This tool helped me nail all the behavioral questions and the career pivot scenario. Thanks to RecruitIn AI, I secured a role at Mailchimp that I was just straight results—this was a must-have!",
      name: "Lily, 26",
      role: "Project Manager @ Mailchimp",
    },
    {
      text: "Getting back into finance after years away was intimidating, but RecruitIn AI totally came through. It helped me prep for all the financial modeling and market analysis questions, and I landed my job at JP Morgan in just a month. This helped me crack high-end investment banking interviews, 100% recommend!",
      name: "Ryan, 33",
      role: "Software Developer @ Microsoft",
      featured: true,
    },
    {
      text: "As a UX Designer, interviews can be nothing short of terrifying—my ability to show off my design critiques and user research. RecruitIn AI helped me feel confident, landed a UX role at Amazon. I confidently handled all designing interviews, and I'm loving your career now that this is done.",
      name: "Emily, 28",
      role: "UIUX @ Google",
    },
    {
      text: "RecruitIn AI transformed my interview prep! It broke down step by step what I exactly needed. I actually feel well prepared. Thanks to this tool, I secured a role at Google. If you are stuck, this tool is an absolute game changer!",
      name: "James, 30",
      role: "Product Manager",
    },
    {
      text: "Public speaking and technical interviews were my worst nightmares, but RecruitIn AI made prepping a breeze. It helped me feel confident in my system design interviews, and I snagged a job at Microsoft. This tool is a lifesaver. You've gotta try it!",
      name: "Alex, 27",
      role: "Software Engineer",
    },
    {
      text: "Dreaded interview questions used to make me panic, but RecruitIn AI made everything click. It guided me through exactly what to say. Thanks to this amazing tool, I landed my dream job!",
      name: "Sarah, 25",
      role: "Data Analyst",
    },
  ];

  const featuredTestimonial = {
    text: "Public speaking and technical interviews were my worst nightmares, but RecruitIn AI made prepping a breeze. It helped me feel confident in my system design interviews, and I snagged a job at Microsoft. This tool is a lifesaver. You've gotta try it!",
    name: "Ryan, 33",
    role: "Software Developer @ Microsoft",
  };

  return (
    <SectionWrapper id="testimonials">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
      >
        Trusted by our users
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card hover-glow"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Testimonial */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-secondary/30"
      >
        {/* Company Logo Placeholder */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center">
            <span className="text-2xl font-bold text-foreground">M</span>
          </div>
        </div>

        <p className="text-center text-lg md:text-xl text-foreground leading-relaxed mt-4 mb-6">
          "{featuredTestimonial.text}"
        </p>

        <div className="text-center">
          <p className="font-semibold text-foreground">{featuredTestimonial.name}</p>
          <p className="text-sm text-muted-foreground">{featuredTestimonial.role}</p>
        </div>
      </motion.div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {testimonials.slice(4, 6).map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card hover-glow"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;


