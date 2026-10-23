import Link from "next/link";

export default function Home() {
  return (
      <main>
        <br />
        <h1>Better Auth</h1>

        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
      </main>
  )
}