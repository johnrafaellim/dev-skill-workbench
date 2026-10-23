"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const result = await signUp.email({ name, email, password });

        if (result.error) {
            setError(result.error.message ?? "Sign up failed, bruh");
            return;
        }

        router.push("/dashboard");
    }

    return (
        <main>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error ? <p>{error}</p> : null}
                <button type="submit">Sign up</button>
            </form>

            <p>
                Already have an account? <Link href="/login">Login</Link>
            </p>
        </main>
    );
}