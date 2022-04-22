import React from "react";
import Bar from "../components/Bar";
import { Languages, tools } from "../data";

const TechSkills = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2"></div>
          {Languages.map((lang) => (
            <Bar data={lang} key={lang.name} />
          ))}
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Software & Tools</h5>
          <div className="my-2"></div>
          {tools.map((tool) => (
            <Bar data={tool} key={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
