

import React from "react";
import { motion } from "framer-motion";

// Chair images (replace with actual image URLs or import local assets)
const workshopChairs = [
  {
    name: "Dr. Abhijit Kumar",
    image: "https://res.cloudinary.com/dz3yaj24a/image/upload/v1748791162/c_mutb9z.jpg",
    description:
      "Dr. Abhijit Kumar is a Senior Associate Professor at UPES Dehradun and also a Visvesvaraya Research Fellow at IIT Patna. His core research areas include Remote Sensing using Deep Learning, Generative AI, and Natural Language Processing (NLP). He is an active member of IEEE, IACSIT Singapore, IAENG Hong Kong, and UACEE.",
  },
  {
    name: "Dr. Ashutosh Sharma",
    image: "https://res.cloudinary.com/dz3yaj24a/image/upload/v1748791162/a_akyq0t.jpg",
    description:
      "Dr. Ashutosh Sharma serves as a Distinguished Professor at Henan University of Science and Technology, China. He has expertise in IoT, Big Data, and e-Business. He has published 62+ papers and is a consultant for various international bodies.",
    link: "https://scholar.google.co.in/citations?user=MvJPqGMAAAAJ&hl=en",
  },
  {
    name: "Dr. Tanupriya Choudhury",
    image: "https://res.cloudinary.com/dz3yaj24a/image/upload/v1748791163/b_vqkg6e.jpg",
    description:
      "Dr. Tanupriya Choudhury is a Professor at UPES Dehradun and a Visiting Professor at DIU, Bangladesh. He has filed 25 patents and 16 software copyrights and published over 150 papers in Cloud, Soft Computing, and Data Mining.",
  },
  {
    name: "Mr. Praveen Kumar",
    image: "https://res.cloudinary.com/dz3yaj24a/image/upload/v1748791183/p_ilus3z.jpg",
    description:
      "Mr. Praveen Kumar is an Assistant Professor at B.P. Mandal College of Engineering and a Ph.D. scholar at IIT Patna. His research interests include UAVs, RIS, Deep RL, Transformers, and LLMs.",
  },
];

const committeeList = [
  "Workshop Chairs: Dr. Abhijit Kumar, Dr. Ashutosh Sharma, Dr. Tanupriya Choudhury, Mr. Praveen Kumar",
  "TPC Co-Chair: Prof. Sandro Fiore, University of Trento, Italy",
  "Organizing Co-Chairs: Representation from Italy",
  "TPC Members: Minimum of ten foreign specialists involved",
  "WEB Chairs: IIT Bombay team",
  "Publicity Co-Chairs: Teams from India and the United States",
  "Invited Speakers: Experts from the US, Italy, Australia, and industries like Google, Amazon, Microsoft",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Organiser = () => {
  return (
    <section id="organiser" className="bg-sky-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Workshop Chairs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {workshopChairs.map((chair, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 p-6">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-700">
                    {chair.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {chair.link ? (
                      <a
                        href={chair.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Profile
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-slate-700 leading-relaxed">
                {chair.description}
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-slate-800 mt-20 mb-6">
          Organizing Committee
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="list-disc list-inside space-y-3 max-w-3xl mx-auto text-slate-700 text-sm sm:text-base"
        >
          {committeeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Organiser;
