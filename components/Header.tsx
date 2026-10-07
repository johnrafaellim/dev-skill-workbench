import React from "react";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
  UserProfile,
  UserDropdown,
  SignUpButton,
} from "@asgardeo/nextjs";
import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b bg-background/90 px-8 py-4 backdrop-blur">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-bold tracking-tight"
      >
        React Auth Demo
      </Link>
      <SignedIn>
        <nav className="ml-auto flex items-center gap-1">
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Dashboard
          </Link>

          <Link
            href="/admin"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Admin
          </Link>
        </nav>
        <UserDropdown />
        {/* <SignOutButton /> */}
      </SignedIn>
      <SignedOut>
        <nav className="ml-auto flex items-center gap-2">
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Sign In
          </Link>
          <Link href="/sign-up" className={cn(buttonVariants({ size: "sm" }))}>
            Sign Up
          </Link>
        </nav>
      </SignedOut>
    </header>
  );
};

export default Header;
