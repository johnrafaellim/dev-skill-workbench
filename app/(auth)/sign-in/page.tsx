"use client";

import { SignIn } from "@asgardeo/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center">
      <SignIn
        preferences={{
          i18n: {
            bundles: {
              "en-US": {
                translations: {
                  "elements.fields.username.label": "Email (Username)",
                  "elements.fields.username.placeholder": "Enter your email",
                },
              },
            },
          },
        }}
      />
      <p className="text-sm text-muted-foreground">
        No account?
        <Link
          href="/sign-up"
          className="text-primary underline-offset-4 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
