import React from 'react';

const ProgramSchedule = () => {
  const schedule = [
    {
      time: "14:00-14:15",
      title:
        "S24202: Transformer Scalability Crisis: The First Comprehensive Empirical Analysis of Performance Walls in Modern Language Models",
      presenter: "Mahdi Naser Moghadasi",
    },
    {
      time: "14:15-14:30",
      title:
        "S24203: Neural Activation Patterns Across Language Model Architectures: A Comprehensive Analysis of Cognitive Task Performance",
      presenter: "Mahdi Naser Moghadasi",
    },
    {
      time: "14:30-14:45",
      title:
        "S24204: SwasthLLM: a Unified Cross-Lingual, Multi-Task, and Meta-Learning Zero-Shot Framework for Medical Diagnosis Using Contrastive Representations",
      presenter:
        "Ayan Sar, Pranav Singh Puri, Sumit Aich, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "14:45-15:00",
      title:
        "S24205: Hierarchical Resolution Transformers: A Wavelet-Inspired Architecture for Multi-Scale Language Understanding",
      presenter:
        "Ayan Sar, Pranav Singh Puri, Sumit Aich, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "15:00-15:15",
      title:
        "S24206: Dynamic Reasoning Chains through Depth-Specialized Mixture-of-Experts in Transformer Architectures",
      presenter:
        "Ayan Sar, Sampurna Roy, Kanav Gupta, Anurag Kaushish, Tanupriya Choudhury, and Abhijit Kumar",
    },
    {
      time: "15:15-16:00",
      title: "Coffee Break",
      presenter: "-",
    },
    {
      time: "16:00-16:15",
      title:
        "S24207: Enhanced ESG Data Processing Using Retrieval-Augmented AI",
      presenter:
        "Milad Olad, Ehsan Khaksar, Robert Lytle, Ryan Hilimoniuk, Maryam Ghanbari, Leila Tahmooresnejad, and Anteneh Ayanso",
    },
    {
      time: "16:15-16:30",
      title:
        "S24208: CU-1: A Class-Agnostic Detection Transformer Bridging Large Language Models and Big Data Interface Understanding",
      presenter:
        "André-Louis Rochet, Matis Despujols, Léo Appourchaux, Noé Brandolini, David Soeiro-Vuong, Paul Lemaistre, Gérard Réus, and Bikram Pratim Bhuyan",
    },
    {
      time: "16:30-16:45",
      title: "S24209: Mapping Discrimination in LLM-driven HR Systems",
      presenter:
        "Eldar Jalilzade, Maksim Kalameyets, Shrikant Malviya, Rebecca Owens, Stamos Katsigiannis, Ben Farrand, and Lei Shi",
    },
    {
      time: "16:45-17:00",
      title:
        "BigD844: Multi-Agent Debate for Content Moderation with Dynamic Group Arbitration",
      presenter:
        "Yuzhou Jiang, Liang Wang, Yuwei Lou, Xianping Tao, and Hao Hu",
    },
    {
      time: "17:00-17:15",
      title:
        "S24210: Graph Neural Network (GNN) and Its Application: A State-of-the-Art Survey",
      presenter:
        "Ashutosh Sharma, Amit Sharma, Abhijit Kumar, Ayan Sar, and Tanupriya Choudhury",
    },
    {
      time: "17:15-17:30",
      title: "Closing Remarks",
      presenter: "-",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 space-y-8 mt-20">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-700">
          1st International Workshop on
          <br />
          Harnessing Big Data Analytics with Large Language Models (HBDA-LLM 2025)
        </h1>

        <p className="text-lg mt-2 font-medium text-gray-700">
          <strong>Workshop Chairs:</strong>{" "}
          Dr. Abhijit Kumar, Dr. Tanupriya Choudhury, Dr. Ashutosh Sharma, Mr. Praveen Kumar
        </p>

        <p className="mt-1 text-gray-700">
          <strong>Date:</strong> December 8, 2025 &nbsp;|&nbsp;
          <strong>Time Zone:</strong> UTC +8:00 (Macau, China)
        </p>

        <p className="mt-1 text-sm text-gray-600 italic">
          *Note: All timings are in UTC +8:00 (as per Macau, China).
        </p>

        <p className="mt-2">
          <strong>Meeting Link:</strong>{" "}
          <a
            href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzcwMDQwZWQtNWJmNy00NTZlLWE4MjAtNjIzMzM4NjRkY2Q1%40thread.v2/0?context=%7b%22Tid%22%3a%22a57f7d92-038e-4d4c-8265-7cd2beb33b34%22%2c%22Oid%22%3a%227e8b17c8-9baf-480f-9659-bcac8f5a324b%22%7d"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            Join Here
          </a>
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Workshop schedule: 2025 IEEE International Conference on Big Data
          <br />
          HBDA-LLM 2025 workshop details: Workshop detail
        </p>
      </section>

      {/* Schedule Table */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 border-b pb-2 mb-4">
          📅 Program Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2 w-32">Time (UTC +8:00)</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Presenter / Author</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 align-top">{item.time}</td>
                  <td className="border px-4 py-2 align-top">{item.title}</td>
                  <td className="border px-4 py-2 align-top whitespace-pre-line">
                    {item.presenter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProgramSchedule;
