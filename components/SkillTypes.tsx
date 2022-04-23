import React, { FC } from "react";
import { ISkill } from "../types";
import Bar from "./Bar";

const SkillTypes: FC<{ data: ISkill[] }> = ({ data }) => {
  return (
    <div>
      <div className="my-2"></div>
      {data.map((lang) => (
        <Bar data={lang} key={lang.name} />
      ))}
    </div>
  );
};

export default SkillTypes;
