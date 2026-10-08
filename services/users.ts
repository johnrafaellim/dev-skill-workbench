"use server";

import { asgardeo } from "@asgardeo/nextjs/server";

export async function getCurrentUser() {
  const client = await asgardeo();

  const sessionId = await client.getSessionId();

  if (!sessionId) {
    throw new Error("No authenticated session");
  }

  const accessToken = await client.getAccessToken(sessionId);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL}/scim2/Me`,
    {
      headers: {
        Accept: "application/scim+json",
        "Content-Type": "application/scim+json",
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
}
