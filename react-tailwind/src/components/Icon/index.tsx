import { FC } from "react";
import { IconProps } from "./Icon.interfaces";

export const Icon: FC<IconProps> = ({ position, children }) => (
  <span
    className={`absolute ${
      position === "left" ? "left-3" : "right-3"
    } text-gray-500`}
  >
    {children}
  </span>
);
