import { motion } from "framer-motion";
import React from "react";
import { EducationDetail } from "../data";

const Education = () => {
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
        <h6 className="my-3 text-xl font-bold text-dblue">My Education</h6>
        <div className="grid gap-6  ">
          {EducationDetail.map((edu) => (
            <div
              key={edu.Degree}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <div className="p-2 flex items-center space-x-4">
                <edu.Icon className="w-12 h-12 text-orange" />
                <div className="text-bblue">
                  <h4 className="font-bold">{edu.Degree}</h4>
                  <p>{edu.University}</p>
                  <p>
                    {edu.Location} - {edu.Year}{" "}
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

export default Education;
