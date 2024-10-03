import { FC, useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../Icons";
import { InputPasswordProps } from "./InputPassword.interfaces";
import { InputBase } from "../InputBase";

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <InputBase {...props} type={showPassword ? "text" : "password"}>
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="focus:outline-none"
      >
        {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
      </button>
    </InputBase>
  );
};

export default InputPassword;
