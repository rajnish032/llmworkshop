// import React from "react";

// const workshopChairs = [
//   {
//     name: "Dr. Abhijit Kumar",
//     description:
//       "Dr. Abhijit Kumar is a Senior Associate Professor at UPES Dehradun and also a Visvesvaraya Research Fellow at IIT Patna. His core research areas include Remote Sensing using Deep Learning, Generative AI, and Natural Language Processing (NLP). He is an active member of several international professional bodies, including the IEEE, the International Association of Computer Science and Information Technology (IACSIT) Singapore, the International Association of Engineers (IAENG) Hong Kong, and the Universal Association of Computer and Electronics Engineers (UACEE).",
//   },
//   {
//     name: "Dr. Ashutosh Sharma",
//     description:
//       "Dr. Ashutosh Sharma serves as a Distinguished Professor at Henan University of Science and Technology in China. He has extensive expertise in the domains of the Internet of Things (IoT), Big Data Analytics, and e-Business systems. He has published over 62 research papers in reputed journals and conferences. Dr. Sharma is also a reviewer and consultant for numerous international research and funding organizations.",
//     link: "https://scholar.google.co.in/citations?user=MvJPqGMAAAAJ&hl=en",
//   },
//   {
//     name: "Dr. Tanupriya Choudhury",
//     description:
//       "Dr. Tanupriya Choudhury is a Professor at UPES Dehradun and a Visiting Professor at Daffodil International University (DIU), Bangladesh. He has filed 25 patents and 16 software copyrights, and has published more than 150 research papers in leading journals and conferences. His research areas include Cloud Computing, Soft Computing, and Data Mining. He is actively involved in international collaborations and academic leadership.",
//   },
//   {
//     name: "Mr. Praveen Kumar",
//     description:
//       "Mr. Praveen Kumar is an Assistant Professor at B.P. Mandal College of Engineering. He is also pursuing his Ph.D. from IIT Patna. His current research interests focus on Unmanned Aerial Vehicles (UAVs), Reconfigurable Intelligent Surfaces (RIS), Deep Reinforcement Learning, Transformer Architectures, and Large Language Models (LLMs). He contributes to both academic research and practical applications in AI-powered systems.",
//   },
// ];

// const committeeList = [
//   "Workshop Chairs: Dr. Abhijit Kumar, Dr. Ashutosh Sharma, Dr. Tanupriya Choudhury, Mr. Praveen Kumar",
//   "Technical Program Committee (TPC) Co-Chair: Prof. Sandro Fiore, University of Trento, Italy",
//   "Organizing Co-Chairs: Expert representatives from leading institutions in Italy",
//   "Technical Program Committee Members: Involvement of at least ten international experts from various countries",
//   "Web and IT Chairs: Dedicated team from the Indian Institute of Technology (IIT) Bombay",
//   "Publicity Co-Chairs: Coordinated efforts by teams from India and the United States to promote the workshop globally",
//   "Invited Speakers: Eminent personalities from the United States, Italy, Australia, and leading industries such as Google, Amazon, and Microsoft",
// ];

// const Organiser = () => {
//   return (
//     <section id="organiser" className="bg-gray-50 px-6 py-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Workshop Chairs
//         </h2>

//         {/* Workshop Chair Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {workshopChairs.map((chair, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-indigo-700 mb-3">
//                 {chair.name}
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed mb-2">
//                 {chair.description}
//               </p>
//               {chair.link && (
//                 <a
//                   href={chair.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-sm text-blue-600 underline hover:text-blue-800 mt-2"
//                 >
//                   View Google Scholar Profile
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Committee Section */}
//         <h2 className="text-3xl font-bold text-center text-gray-800 mt-16 mb-8">
//           Organizing Committee
//         </h2>

//         <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-4xl mx-auto text-sm sm:text-base">
//           {committeeList.map((item, index) => (
//             <li key={index} className="leading-relaxed">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Organiser;




import React from "react";
import { motion } from "framer-motion";

// Chair images (replace with actual image URLs or import local assets)
const workshopChairs = [
  {
    name: "Dr. Abhijit Kumar",
    image: "https://via.placeholder.com/150?text=Abhijit+Kumar",
    description:
      "Dr. Abhijit Kumar is a Senior Associate Professor at UPES Dehradun and also a Visvesvaraya Research Fellow at IIT Patna. His core research areas include Remote Sensing using Deep Learning, Generative AI, and Natural Language Processing (NLP). He is an active member of IEEE, IACSIT Singapore, IAENG Hong Kong, and UACEE.",
  },
  {
    name: "Dr. Ashutosh Sharma",
    image: "https://via.placeholder.com/150?text=Ashutosh+Sharma",
    description:
      "Dr. Ashutosh Sharma serves as a Distinguished Professor at Henan University of Science and Technology, China. He has expertise in IoT, Big Data, and e-Business. He has published 62+ papers and is a consultant for various international bodies.",
    link: "https://scholar.google.co.in/citations?user=MvJPqGMAAAAJ&hl=en",
  },
  {
    name: "Dr. Tanupriya Choudhury",
    image: "https://via.placeholder.com/150?text=Tanupriya+Choudhury",
    description:
      "Dr. Tanupriya Choudhury is a Professor at UPES Dehradun and a Visiting Professor at DIU, Bangladesh. He has filed 25 patents and 16 software copyrights and published over 150 papers in Cloud, Soft Computing, and Data Mining.",
  },
  {
    name: "Mr. Praveen Kumar",
    image: "https://via.placeholder.com/150?text=Praveen+Kumar",
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
