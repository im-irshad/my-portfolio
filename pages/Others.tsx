import { motion } from "framer-motion";
import React from "react";
import { Interest, Lang, SoftSkills } from "../data";

const Others = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
      exit={{
        x: "-100vw",
        transition: { ease: "easeOut" },
      }}
      className="px-4 pt-1 "
    >
      <div className="p-4 my-5 bg-gray-300 flex-grow">
        <h2 className="my-3 text-xl font-bold text-dblue">Soft Skills</h2>
        <div className=" grid gap-6 md:grid-cols-3 ">
          {SoftSkills.map((ss) => (
            <div
              key={ss.sskil}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <div className="p-2 flex items-center space-x-4">
                <ss.Icon className="w-8 h-8 text-orange" />
                <div>
                  <h4 className=" text-bblue">{ss.sskil}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h5 className="my-3 text-xl font-bold text-dblue">Languages</h5>
        <div className=" grid gap-6 md:grid-cols-3 ">
          {Lang.map((l) => (
            <div key={l.name} className="bg-gray-200 rounded-lg lg:col-span-1">
              <div className="p-2 flex items-center space-x-4">
                <l.Icon className="w-8 h-8 text-orange" />
                <div>
                  <h4 className=" text-bblue">{l.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h5 className="my-3 text-xl font-bold text-dblue">Interest</h5>
        <div className=" grid gap-6 md:grid-cols-3 ">
          {Interest.map((int) => (
            <div
              key={int.name}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <div className="p-2 flex items-center space-x-4">
                <int.Icon className="w-8 h-8 text-orange" />
                <div>
                  <h4 className=" text-bblue">{int.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Others;
