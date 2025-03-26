"use client";
import { cn } from "@/util/cn";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = InputProps & {
  isSubmitted: boolean;
  validate: (input: HTMLInputElement) => string;
};

export const FormField = memo(
  ({ className, isSubmitted, validate, ...props }: Props) => {
    const [validationMessage, setValidationMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const updateValidation = useCallback(() => {
      const input = inputRef.current;

      if (input === null) return;
      input.setCustomValidity(validate(input));
      setValidationMessage(input.validationMessage);
    }, [validate]);

    useEffect(() => {
      if (isSubmitted) updateValidation();
    }, [updateValidation, isSubmitted]);

    return (
      <>
        <input
          ref={inputRef}
          onBlur={() => updateValidation()}
          onChange={() => updateValidation()}
          className={cn(
            "text-[0.875rem]/[1.625rem] font-semibold tracking-[0.01563rem]",
            "text-[#3D3B48] placeholder:text-[#3D3B48]/75",
            "h-14 rounded-[0.3125rem] border border-[#DEDEDE] bg-white px-5",
            "w-full",
            className,
          )}
          {...props}
        />
        {validationMessage && <p>{validationMessage}</p>}
      </>
    );
  },
);

FormField.displayName = "FormField";
