import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experience = [
  {
    company: "PT.Prima Layanan Nasional Enjiniring(Intern)",
    Period: "August 2022-December 2022",
    Description: "Develop Internal Website With Laravel and Tailwind CSS",
  },
];
const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experience.map((exp, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 rounded-lg p-6 shadow-md  hover:shadow-xl transition-shadow duration-300 bg-purple-700/10
             "
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {exp.company}
              </h2>
              <p className="text-gray-300">{exp.Period}</p>
              <p className="text-gray-400 mt-4 ">{exp.Description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
