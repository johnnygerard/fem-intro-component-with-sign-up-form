import { FormField } from "@/component/form-field";
import { cn } from "@/util/cn";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Form = memo(({ className }: Props) => {
  return (
    <form
      className={cn(
        "p-6 shadow-[0_0.5rem_rgba(0,0,0,0.15)]",
        "w-full max-w-135 rounded-[0.625rem] bg-white",
        className,
      )}
    >
      <div className="flex flex-col gap-4 dt:gap-5">
        <FormField
          type="text"
          autoComplete="given-name"
          placeholder="First Name"
        />
        <FormField
          type="text"
          autoComplete="family-name"
          placeholder="Last Name"
        />
        <FormField
          type="email"
          autoComplete="email"
          placeholder="Email Address"
        />
        <FormField
          type="password"
          autoComplete="new-password"
          placeholder="Password"
        />
        <button
          className={cn(
            "text-[0.9375rem]/[1.625rem] font-semibold text-white uppercase",
            "tracking-[0.0625rem] shadow-[0_-4px_rgba(0,0,0,0.09)_inset]",
            "h-14 rounded-[0.3125rem] bg-[#38CC8B]",
            "transition-colors hover:bg-[#77E2B3]",
          )}
          type="submit"
        >
          Claim your free trial
        </button>
      </div>
      <p className="mt-2 px-4 text-center">
        <small
          className={cn(
            "text-[0.6875rem]/[1.3125rem] font-medium text-[#BAB7D4]",
            "dt:leading-[1.625rem]",
          )}
        >
          By clicking the button, you are agreeing to our{" "}
          <Link className="font-bold text-[#FF7979]" href="/terms">
            Terms and Services
          </Link>
        </small>
      </p>
    </form>
  );
});

Form.displayName = "Form";
