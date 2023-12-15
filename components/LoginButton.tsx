import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";

export default function Component() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className={"float-end"}>
        <Button className={" text-dark"} onClick={() => signOut()}>
          Signed in as {session.user.email}
        </Button>
      </div>
    );
  }
  return (
    <div title={"Not signed in"} className={"float-end"}>
      <Button
        className={"button small text-dark outline button-outline"}
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </div>
  );
}
