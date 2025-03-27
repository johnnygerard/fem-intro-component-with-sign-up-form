"use client";
import { IconError } from "@/component/svg/icon-error";
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
  ({ className, isSubmitted, placeholder, validate, ...props }: Props) => {
    const [validationMessage, setValidationMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const isErrorVisible = validationMessage !== "";

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
      <div>
        <div className="relative">
          <input
            ref={inputRef}
            onBlur={() => updateValidation()}
            onChange={() => updateValidation()}
            placeholder={isErrorVisible ? "" : placeholder}
            className={cn(
              "text-[0.875rem]/[1.625rem] font-semibold tracking-[0.01563rem]",
              "text-[#3D3B48] transition-colors placeholder:text-[#3D3B48]/75",
              "h-14 rounded-[0.3125rem] bg-white px-5 outline-none",
              isErrorVisible && "pr-17 text-[#FF7979]",
              isErrorVisible
                ? "border-2 border-[#FF7979]"
                : "border border-[#DEDEDE] focus-visible:border-[#5E54A4]",
              "w-full",
              className,
            )}
            {...props}
          />
          {isErrorVisible && (
            <IconError className="absolute top-1/2 right-6 -translate-y-1/2 animate-fade-in" />
          )}
        </div>
        {isErrorVisible && (
          <p
            className={cn(
              "mt-1.5 animate-fade-in text-right",
              "text-[0.6875rem]/[normal] font-medium text-[#FF7979] italic",
            )}
          >
            {validationMessage}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = "FormField";
