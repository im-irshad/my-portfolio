import React, { FC } from "react";
import { IService } from "../types";

const ServiceCard: FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className="w-12 h-12 text-red-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
