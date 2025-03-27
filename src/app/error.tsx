"use client";
import { memo, useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error("Uncaught exception:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-[#5E54A4] p-8 text-center shadow">
      <h1 className="text-[3.125rem]/[3.4375rem] font-bold text-white">
        Something went wrong!
      </h1>
      <button
        onClick={() => reset()}
        className="rounded-[0.3125rem] bg-[#38CC8B] px-6 py-3 font-semibold tracking-[0.0625rem] text-white uppercase shadow-[0_-4px_rgba(0,0,0,0.09)_inset] transition-colors hover:bg-[#77E2B3]"
      >
        Try again
      </button>
    </div>
  );
};

export default memo(Error);
