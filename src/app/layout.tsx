import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const APP_NAME = "Intro component with sign-up form";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://fem-intro-component-with-sign-up-form-jgerard.vercel.app",
  ),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html
      className={cn(poppins.variable, "font-sans antialiased")}
      lang="en-US"
    >
      <body
        className={cn(
          "grid min-h-screen place-items-center px-6 pt-22 pb-17 dt:py-16",
          "bg-[#FF7979] bg-[url('/asset/image/background-mobile.svg')] bg-center",
          "dt:bg-[url('/asset/image/background-desktop.svg')]",
        )}
      >
        <main>{children}</main>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
