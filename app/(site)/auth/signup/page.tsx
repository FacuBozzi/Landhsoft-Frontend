import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landhsoft",

  // other metadata
  description: "Custom software development",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
