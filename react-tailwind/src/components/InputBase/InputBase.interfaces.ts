import { InputHTMLAttributes, ReactNode } from "react";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  containerClassName?: string;
  children?: ReactNode; // To render icons
  iconPosition?: "left" | "right"; // Position of the icon
  validators?: Array<(value: string) => string | null>; // Synchronous validators
  asyncValidators?: Array<(value: string) => Promise<string | null>>; // Asynchronous validators
}
