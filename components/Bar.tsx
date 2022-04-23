import React, { FC } from "react";
import { ISkill } from "../types";

const Bar: FC<{ data: ISkill }> = ({ data: { Icon, name, level } }) => {
  return (
    <div className=" mx-2 my-2 text-orange bg-gray-600 rounded-full">
      <div
        style={{ width: level }}
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-black-600 to-black-100"
      >
        <Icon className="mr-3 text-orange h-8 w-8" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
