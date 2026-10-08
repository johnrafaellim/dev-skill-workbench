"use client";

import { cn } from "cn";
import { buttonVariants } from "./ui/button";

import { getCurrentUser } from "@/services/users";

const CustomButton = () => {
  async function test() {
    try {
      const user = await getCurrentUser();

      console.log("User:", user);
      console.log("User ID:", user.id);
    } catch (error) {
      console.error("Failed to get current user:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={test}
      className={cn(buttonVariants({ size: "sm" }))}
    >
      Trigger
    </button>
  );
};

export default CustomButton;
