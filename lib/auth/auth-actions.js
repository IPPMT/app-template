"use server";
import { signIn } from "@/auth";

export async function SignIn(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
}
