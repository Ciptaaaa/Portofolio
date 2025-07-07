import { motion } from "framer-motion";
import Reveal from "./Reveal";

const education = [
  {
    School: "SMK Teknindo Jaya",
    studyProgram: "Computer Networking",
    period: "2016-2019",
    finalGPA: "77 out of 100",
  },
  {
    School: "Universitas Bina Sarana Informatika",
    studyProgram: "Information Technology ",
    period: "2019-2024",
    finalGPA: "3.66 out of 4 ",
  },
  {
    School: "Bootcamp HariSenin.com",
    studyProgram: "FullStack Web Developer",
    period: "2024-2025 (4month)",
    finalGPA: "3.66 out of 4 ",
  },
];
const Education = () => {
  return (
    <div className="p-8" id="education">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        {" "}
        Education
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-[600px] mx-auto border border-purple-600 rounded-lg p-6 shadow-md  hover:shadow-xl transition-shadow duration-300 bg-purple-700/10
             "
          >
            <Reveal key={index}>
              <h2 className="text-gray-100 text-2xl font-semibold">
                {edu.School}
              </h2>
              <p className="text-gray-300">{edu.studyProgram}</p>
              <p className="text-gray-400  ">{edu.finalGPA}</p>
              <p className="text-gray-400 mt-4 ">{edu.period}</p>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
