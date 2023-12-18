import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { RecordLogin } from "../lib/ServerActions";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session && session.user) {
      RecordLogin().then(() => {
        console.log("recordData:then");
      });
    }
  }, [session]);

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
