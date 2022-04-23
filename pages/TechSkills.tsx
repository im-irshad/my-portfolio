import React from "react";
import Bar from "../components/Bar";
import SkillTypes from "../components/SkillTypes";
import { Languages, Frontend, Backend, Database, Others } from "../data";

const TechSkills = () => {
  return (
    <div className="px-6 py-2 ">
      <div className=" grid gap-6 md:grid-cols-2 bg-gray-300">
        <div>
          <h5 className="mx-2 my-3 text-xl font-bold text-dblue">
            Programming Languages
          </h5>
          <SkillTypes data={Languages} />
        </div>
        <div>
          <h5 className="mx-2 my-3 text-xl font-bold text-dblue">Frontend</h5>
          <SkillTypes data={Frontend} />
        </div>
        <div>
          <h5 className="mx-2 my-3 text-xl font-bold text-dblue">Backend</h5>
          <SkillTypes data={Backend} />
        </div>
        <div>
          <h5 className="mx-2 my-3 text-xl font-bold text-dblue">Databases</h5>
          <SkillTypes data={Database} />
        </div>

        <div>
          <h5 className="mx-2 my-3 text-xl font-bold">Others</h5>
          <SkillTypes data={Others} />
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
