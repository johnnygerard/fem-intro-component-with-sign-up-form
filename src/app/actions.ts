"use server";
import {
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  isValidPassword,
} from "@/util/validators";
import { redirect } from "next/navigation";

export const subscribe = async (formData: FormData) => {
  if (
    isValidFirstName(formData.get("first-name")) &&
    isValidLastName(formData.get("last-name")) &&
    isValidEmail(formData.get("email")) &&
    isValidPassword(formData.get("password"))
  ) {
    redirect("/thank-you");
  }

  throw new Error("Server-side validation mismatch");
};
