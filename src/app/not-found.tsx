import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center text-white">
      <h1 className="text-[3.125rem]/[3.4375rem] font-bold -tracking-[0.03256rem]">
        404 Not Found
      </h1>
      <p className="text-[1rem]/[1.625rem] font-medium">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="grid place-items-center rounded-[0.625rem] bg-[#5E54A4] px-16 py-4 text-[0.9375rem]/[1.625rem] tracking-[0.01675rem] text-white shadow-[0_0.5rem_rgba(0,0,0,0.15)] transition duration-300 ease-in-out hover:bg-[#4a3e85]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default memo(NotFound);
