import React from "react";
import Bar from "../components/Bar";
import SkillTypes from "../components/SkillTypes";
import { Languages, Frontend, Backend, Database, Others } from "../data";

const TechSkills = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Programming Languages</h5>
          <SkillTypes data={Languages} />
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Frontend</h5>
          <SkillTypes data={Frontend} />
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Backend</h5>
          <SkillTypes data={Backend} />
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Databases</h5>
          <SkillTypes data={Database} />
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Others</h5>
          <SkillTypes data={Others} />
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
