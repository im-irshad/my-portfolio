import React from "react";
import { ExpDetail } from "../data";

const WorkExp = () => {
  return (
    <div className="p-4 my-5 bg-gray-300 flex-grow">
      <h6 className="my-3 text_xl font-bold">Work Experience</h6>
      <div className="grid gap-6  ">
        {ExpDetail.map((exp) => (
          <div
            key={exp.Company}
            className="bg-gray-200 rounded-lg lg:col-span-1"
          >
            <div className="p-2 flex items-center space-x-4">
              <exp.Icon className="w-12 h-12 text-red-500" />
              <div>
                <h4 className="font-bold">{exp.JobTitle}</h4>
                <p>{exp.Company}</p>
                <p>
                  {exp.Location} - {exp.Duration}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
