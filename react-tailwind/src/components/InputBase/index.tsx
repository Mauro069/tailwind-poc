import { FC, InputHTMLAttributes } from "react";
import { Icon } from "../Icon";
import { ExclamationIcon } from "../Icons";
import { Label } from "../Label";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  iconPosition?: "left" | "right";
  className?: string;
}

export const InputBase: FC<InputBaseProps> = ({
  label,
  errorMessage,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col space-y-1 ${className}`}>
      {/* Usamos el componente Label */}
      {label && <Label text={label} />}

      <div
        className={`relative flex items-center ${
          iconPosition === "right" ? "flex-row-reverse" : ""
        }`}
      >
        {/* Usamos el componente Icon */}
        {children && <Icon position={iconPosition}>{children}</Icon>}

        {/* Input */}
        <input
          {...props}
          className={`w-full py-2 px-3 ${
            children ? (iconPosition === "left" ? "pl-10" : "pr-10") : "pl-3"
          } pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errorMessage
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : ""
          }`}
        />

        {/* Mensaje de error en forma de ícono */}
        {errorMessage && (
          <span className="absolute right-3 text-red-500">
            <ExclamationIcon />
          </span>
        )}
      </div>

      {/* Mensaje de error de texto */}
      {errorMessage && (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputBase;
