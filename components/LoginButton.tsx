import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { RecordLogin } from "../lib/ServerActions";
import { useEffect } from "react";

export default function LoginButton() {
  //   {
  //   recordLogin,
  // }: {
  //   recordLogin: () => Promise<void>;
  // }
  const { data: session } = useSession();
  useEffect(() => {
    console.log("use effect");
    RecordLogin().then(() => {
      console.log("recordData:then");
    });
  }, []);
  // recordLogin().then(() => {
  //   console.log("recordData:then");
  // });

  // useEffect(() => {
  //   if (session && session.user) {
  //     console.log("LoginButton:making request", session);
  //
  //     if (!session || !session.user) return;
  //     const response = fetch("/api/poemapi/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(session),
  //     }).then((response) => {
  //       console.log("LoginButton:route call:then", response);
  //       if (response.ok) {
  //         console.log("Data recorded successfully");
  //       } else {
  //         console.error("Failed to record data");
  //       }
  //     });
  //   }
  // }, [session]);

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
