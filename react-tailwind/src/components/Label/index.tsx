import { FC } from "react";
import { LabelProps } from "./Label.interfaces";

export const Label: FC<LabelProps> = ({ text, className = "", ...props }) => (
  <label
    className={`text-sm font-medium text-gray-700 ${className}`}
    {...props}
  >
    {text}
  </label>
);
