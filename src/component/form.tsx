"use client";
import { FormField } from "@/component/form-field";
import { cn } from "@/util/cn";
import Link from "next/link";
import { memo, useState } from "react";

type Props = {
  className?: string;
};

export const Form = memo(({ className }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setIsSubmitted(true);
        if (!form.checkValidity()) return;

        const formData = new FormData(form);
        console.debug(Object.fromEntries(formData));
      }}
      className={cn(
        "p-6 shadow-[0_0.5rem_rgba(0,0,0,0.15)]",
        "w-full max-w-135 rounded-[0.625rem] bg-white",
        className,
      )}
    >
      <div className="flex flex-col gap-4 dt:gap-5">
        <FormField
          aria-label="First Name"
          autoComplete="given-name"
          defaultValue=""
          isSubmitted={isSubmitted}
          name="first-name"
          placeholder="First Name"
          required
          type="text"
          validate={(input: HTMLInputElement): string =>
            input.validity.valueMissing ? "First Name cannot be empty" : ""
          }
        />
        <FormField
          aria-label="Last Name"
          autoComplete="family-name"
          defaultValue=""
          isSubmitted={isSubmitted}
          name="last-name"
          placeholder="Last Name"
          required
          type="text"
          validate={(input: HTMLInputElement): string =>
            input.validity.valueMissing ? "Last Name cannot be empty" : ""
          }
        />
        <FormField
          aria-label="Email Address"
          autoComplete="email"
          defaultValue=""
          isSubmitted={isSubmitted}
          name="email"
          placeholder="Email Address"
          required
          type="email"
          validate={(input: HTMLInputElement): string =>
            input.validity.valueMissing
              ? "Email cannot be empty"
              : input.validity.typeMismatch
                ? "Looks like this is not an email"
                : ""
          }
        />
        <FormField
          aria-label="Password"
          autoComplete="new-password"
          defaultValue=""
          isSubmitted={isSubmitted}
          minLength={8}
          name="password"
          placeholder="Password"
          required
          type="password"
          validate={(input: HTMLInputElement): string =>
            input.validity.valueMissing
              ? "Password cannot be empty"
              : input.validity.tooShort
                ? "Password must be at least 8 characters"
                : ""
          }
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
