import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { RecordLogin } from "../lib/ServerActions";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log("use effect");
    // Under_dev: We need to move this. I think.
    //  It should be when the user is created. Not (1) every time
    //  and (2) when we're actually creating the user.
    RecordLogin().then(() => {
      console.log("recordData:then");
    });
  }, []);

  if (session && session.user) {
    return (
      <div className={"float-end"}>
        <Button className={"text-dark small"} onClick={() => signOut()}>
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
