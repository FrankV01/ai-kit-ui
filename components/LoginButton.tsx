import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";

// Under_dev;
//  it seemed to send the user to my api rather than the built in one.
export default function Component() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className={"float-end"}>
        <Button className={"text-dark"} onClick={() => signOut()}>
          Signed in as {session.user.email}
        </Button>
      </div>
    );
  }
  return (
    <div title={"Not signed in"} className={"float-end"}>
      <Button className={"button text-dark"} onClick={() => signIn()}>
        Sign In/Up
      </Button>
    </div>
  );
}
