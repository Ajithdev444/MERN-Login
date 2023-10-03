"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const data = useSession();
  const router = useRouter();

  // if (session) {
  //   router.replace("/homePage");
  //   return null;
  // }
  return (
    <>
      <h1>Login</h1>
      <h2>Login with Google</h2>
      <button onClick={() => signIn("google")}>Login</button>
    </>
  );
}
