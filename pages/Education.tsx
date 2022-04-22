import React from "react";
import { EducationDetail } from "../data";

const Education = () => {
  return (
    <div className="p-4 my-5 bg-gray-300 flex-grow">
      <h6 className="my-3 text_xl font-bold">My Education</h6>
      <div className="grid gap-6  ">
        {EducationDetail.map((edu) => (
          <div
            key={edu.Degree}
            className="bg-gray-200 rounded-lg lg:col-span-1"
          >
            <div className="p-2 flex items-center space-x-4">
              <edu.Icon className="w-12 h-12 text-red-500" />
              <div>
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
  );
};

export default Education;
