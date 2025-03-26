import { Form } from "@/component/form";
import { cn } from "@/util/cn";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="grid place-items-center gap-16 dt:grid-cols-2 dt:gap-11">
      <div className="text-center text-white max-dt:max-w-82 dt:w-131 dt:text-left">
        <h1
          className={cn(
            "text-[1.75rem]/[2.25rem] font-bold -tracking-[0.01825rem]",
            "dt:text-[3.125rem]/[3.4375rem] dt:-tracking-[0.03256rem]",
          )}
        >
          Learn to code by watching others
        </h1>
        <p className="mt-4 text-[1rem]/[1.625rem] font-medium">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
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
    </div>
  );
};

export default memo(HomePage);
