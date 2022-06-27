import { motion } from "framer-motion";
import React from "react";
import { ExpDetail } from "../data";

const WorkExp = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
      exit={{
        x: "-100vw",
        transition: { ease: "easeOut" },
      }}
      className="px-4 pt-1"
    >
      <div className="p-4 my-5 bg-gray-300 flex-grow">
        <h6 className="my-3 text-xl font-bold text-dblue">Work Experience</h6>
        <div className="grid gap-6  ">
          {ExpDetail.map((exp) => (
            <div
              key={exp.Company}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <div className="p-2 flex items-center space-x-4">
                <exp.Icon className="w-12 h-12 text-orange" />
                <div>
                  <h4 className="font-bold text-dblue">{exp.JobTitle}</h4>
                  <p className="text-bblue">{exp.Company}</p>
                  <p className="text-bblue">
                    {exp.Location} - {exp.Duration}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExp;
