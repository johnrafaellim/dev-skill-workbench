import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return (
        <main>
            <h1>Super cool dashboard</h1>
            <p>Signed in as {session.user.email}</p>
            <SignOutButton />
        </main>
    );
}