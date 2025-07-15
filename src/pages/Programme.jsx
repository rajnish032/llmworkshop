import React from 'react';

const ProgramSchedule = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 space-y-8 mt-20">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          1st International Workshop on Big Data Analytics with Artificial Intelligence for Climate Change
        </h1>
        <p className="text-lg mt-2 font-medium text-gray-600">
          <strong>Workshop Chair:</strong> Dr. Abhijit Kumar
        </p>
        <p className="mt-1">
          <strong>Date:</strong> December 8, 2025 &nbsp;|&nbsp; <strong>Time Zone:</strong> US Eastern Standard Time
        </p>
        <p className="mt-2">
          <strong>Meeting Link:</strong>{' '}
          <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzcwMDQwZWQtNWJmNy00NTZlLWE4MjAtNjIzMzM4NjRkY2Q1%40thread.v2/0?context=%7b%22Tid%22%3a%22a57f7d92-038e-4d4c-8265-7cd2beb33b34%22%2c%22Oid%22%3a%227e8b17c8-9baf-480f-9659-bcac8f5a324b%22%7d" className="text-blue-600 underline hover:text-blue-800">
            Join Here
          </a>
        </p>
      </section>

      {/* Schedule Table */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 border-b pb-2 mb-4">📅 Program Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Presenter / Author</th>
              </tr>
            </thead>
            {/* <tbody>
              {[
                ["8:30-8:45", "Opening Remarks by Organizers", "-"],
                ["8:45-9:00", "S24210- Graph Representation Learning for Dengue Forecasting", "Jiaqi Weng"],
                ["9:00-9:15", "S24211- Assessment of Quantum Machine Learning Applicability for Climate Actions", "Thilanka Munasinghe"],
                ["9:15-9:30", "S24212- NLP for Extracting Rich Disease Data Aligned To Satellite Meteorological Data", "Mahi Pasarkar"],
                ["9:30-9:45", "S24214- Data-Driven Analysis of Climate Change Impacts on Public Health", "Sahar Yarmohammadtoosky"],
                ["9:45-10:00", "BigD594- Forecast of Wildfire Potential Using a Transformer", "Russ Limber"],
                ["10:00-10:15", "BigD685- Hybrid Ensemble Deep Graph Temporal Clustering for Spatiotemporal Data", "Francis Nji"],
                ["10:15-10:30", "Coffee Break", "-"],
                ["10:30-10:45", "BigD825- Early Wildfire Detection Using One Class Learning", "Wen Le Hong"],
                ["10:45-11:00", "S24204- Enabling Provenance Tracking in Workflow Systems", "Ludovica Sacco"],
                ["11:00-11:15", "S24208- Multi-Agent Copilot for Agricultural Data Management", "Yu Pan"],
                ["11:15-11:30", "BigD521- Global Multimodal Land Surface Temp Forecasting", "Ryan Brown"],
                ["11:30-11:45", "BigD619- Enhancing Photosynthesis Simulation in ESMs with ML", "Elias Massoud"],
                ["11:45-12:00", "S24201- GNN-ARG: Predicting Antibiotic Resistance Genes", "Mohd Manzar Abbas"],
                ["12:00-12:15", "S24203- MEC-Assisted Task Offloading using Meta-RL", "Priyadarshni Gupta"],
                ["12:15-12:30", "S24202- Dueling Double DQN for Optimized Offloading", "Shivani Tripathi"],
                ["12:30-12:45", "S24206- Swarm UAV Placement via Deep RL", "Aswini Ghosh"],
                ["12:45-1:00", "S24207, S24209- Knowledge Distillation in Medical LLMs & Deep LTSF for AQI Forecasting", "Mohit Nathani"],
                ["1:00-1:15", "BigD224, BigD634- Deep Learning Models for CO₂ Prediction & RNN for Emission Forecasting", "Anil Verma"],
                ["1:15-1:35", "BigD56, BigD643, BigD459- CNN-Transformer for O₃, AQI Statistical Modeling, & ConvTrans for PM2.5/NO₂", "Multiple Authors"]
              ].map(([time, title, author], idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{time}</td>
                  <td className="border px-4 py-2">{title}</td>
                  <td className="border px-4 py-2">{author}</td>
                </tr>
              ))}
            </tbody> */}

            <div>
              <h1>To Be Announced ....</h1>
            </div>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProgramSchedule;

