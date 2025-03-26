import { cn } from "@/util/cn";
import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export const IconError = memo(({ className, ...props }: Props) => {
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#FF7979" />
      <rect x="11" y="6" width="2" height="9" rx="1" fill="white" />
      <rect x="11" y="17" width="2" height="2" rx="1" fill="white" />
    </svg>
  );
});

IconError.displayName = "IconError";
