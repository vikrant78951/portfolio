import SignIn from "@/src/serverActions/sign-in";
import SignOut from "@/src/serverActions/sign-out";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return (
    <main>
      {!session ? (
        <div>
          <h1>Welcome to the Portfolio</h1>
          <p>Please sign in to continue.</p>
          <SignIn />
        </div>
      ) : (
        <div>
          <h1>Welcome back, {session?.user?.name || "User"}!</h1>
          <p>You are signed in.</p>
          <SignOut/>
        </div>
      )}
    </main>
  );
}
