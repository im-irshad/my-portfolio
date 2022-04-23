import React from "react";
import { CertInfo, Interest, Lang, SoftSkills } from "../data";

const Etc = () => {
  return (
    <div className="p-4 my-5 bg-gray-300 flex-grow">
      <h6 className="my-3 text_xl font-bold">Soft Skills</h6>
      <div className=" grid gap-6 md:grid-cols-3 ">
        {SoftSkills.map((ss) => (
          <div key={ss.sskil} className="bg-gray-200 rounded-lg lg:col-span-1">
            <div className="p-2 flex items-center space-x-4">
              <ss.Icon className="w-12 h-12 text-red-500" />
              <div>
                <h4 className="font-bold">{ss.sskil}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h6 className="my-3 text_xl font-bold">Languages</h6>
      <div className=" grid gap-6 md:grid-cols-3 ">
        {Lang.map((l) => (
          <div key={l.name} className="bg-gray-200 rounded-lg lg:col-span-1">
            <div className="p-2 flex items-center space-x-4">
              <l.Icon className="w-12 h-12 text-red-500" />
              <div>
                <h4 className="font-bold">{l.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h6 className="my-3 text_xl font-bold">Interest</h6>
      <div className=" grid gap-6 md:grid-cols-3 ">
        {Interest.map((int) => (
          <div key={int.name} className="bg-gray-200 rounded-lg lg:col-span-1">
            <div className="p-2 flex items-center space-x-4">
              <int.Icon className="w-12 h-12 text-red-500" />
              <div>
                <h4 className="font-bold">{int.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Etc;
