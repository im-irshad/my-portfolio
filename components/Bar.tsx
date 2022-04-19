import React, { FC } from "react";
import { ISkill } from "../types";

const Bar: FC<{ data: ISkill }> = ({ data: { Icon, name, level } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        style={{ width: level }}
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-green-300"
      >
        <Icon className="mr-3" />

        {name}
      </div>
    </div>
  );
};

export default Bar;
