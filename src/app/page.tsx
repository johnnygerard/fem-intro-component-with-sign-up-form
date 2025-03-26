import { Form } from "@/component/form";
import { cn } from "@/util/cn";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="w-full max-w-135">
      <p
        className={cn(
          "grid place-items-center text-center shadow-[0_0.5rem_rgba(0,0,0,0.15)]",
          "rounded-[0.625rem] bg-[#5E54A4] px-16 py-4",
          "text-[0.9375rem]/[1.625rem] tracking-[0.01675rem] text-white",
        )}
      >
        <span>
          <span className="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </span>
      </p>
      <Form className="mt-6" />
    </div>
  );
};

export default memo(HomePage);
