import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>Welcome to Twitch application</p>
      <SignOutButton />
    </>
  );
}
