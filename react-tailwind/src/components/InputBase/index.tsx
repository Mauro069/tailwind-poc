import { FC, useState } from "react";
import { InputBaseProps } from "./InputBase.interfaces";

export const InputBase: FC<InputBaseProps> = ({
  label,
  containerClassName,
  inputClassName,
  children,
  iconPosition = "left",
  validators = [],
  asyncValidators = [],
  onBlur,
  onChange,
  onFocus,
  ...props
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle synchronous validation on change or blur
  const handleValidation = (value: string) => {
    for (const validator of validators) {
      const validationError = validator(value);
      if (validationError) {
        setError(validationError);
        return;
      }
    }
    setError(null); // No errors
  };

  // Handle asynchronous validation on blur
  const handleAsyncValidation = async (value: string) => {
    if (asyncValidators.length > 0) {
      setIsLoading(true);
      const results = await Promise.all(
        asyncValidators.map((validator) => validator(value))
      );
      const validationError = results.find((result) => result !== null);
      setError(validationError || null);
      setIsLoading(false);
    }
  };

  // Combine internal and external onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Ejecutamos la validación interna
    handleValidation(value);

    // Si el usuario pasa su propio handleChange, lo ejecutamos
    if (onChange) {
      onChange(event);
    }
  };

  // Combine internal and external onBlur
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleValidation(value);
    handleAsyncValidation(value);

    // Ejecutamos onBlur del usuario si existe
    if (onBlur) {
      onBlur(event);
    }
  };

  // Combine internal and external onFocus
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    // Ejecutamos onFocus del usuario si existe
    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label && <label>{label}</label>}
      <div
        className={`flex items-center bg-white p-3 ${
          iconPosition === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {children && <div>{children}</div>}
        <input
          className={`rounded focus:outline-none flex-1 ${
            iconPosition === "left" ? "pl-4" : ""
          } ${iconPosition === "right" ? "pr-4" : ""} ${inputClassName}`}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          {...props}
        />
      </div>
      {isLoading && <div className="text-sm text-gray-500">Validating...</div>}
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
};
