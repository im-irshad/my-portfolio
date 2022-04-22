import React from "react";
import { CertInfo, ExpDetail } from "../data";

const Certs = () => {
  return (
    <div className="p-4 my-5 bg-gray-300 flex-grow">
      <h6 className="my-3 text_xl font-bold">Certification & Achievements</h6>
      <div className="grid gap-6  ">
        {CertInfo.map((cert) => (
          <div
            key={cert.Company}
            className="bg-gray-200 rounded-lg lg:col-span-1"
          >
            <div className="p-2 flex items-center space-x-4">
              <cert.Icon className="w-12 h-12 text-red-500" />
              <div>
                <h4 className="font-bold">{cert.CourseTitle}</h4>
                <p>{cert.Company}</p>
                <p>
                  {cert.CourseDetail} - {cert.Duration}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certs;
