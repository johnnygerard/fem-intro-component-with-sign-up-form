import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  autoComplete?: string;
  className?: string;
  placeholder: string;
  type: "text" | "email" | "password";
};

export const FormField = memo(({ className, ...props }: Props) => {
  return (
    <input
      className={cn(
        "text-[0.875rem]/[1.625rem] font-semibold tracking-[0.01563rem]",
        "text-[#3D3B48] placeholder:text-[#3D3B48]/75",
        "h-14 rounded-[0.3125rem] border border-[#DEDEDE] bg-white px-5",
        "w-full",
        className,
      )}
      {...props}
    />
  );
});

FormField.displayName = "FormField";
