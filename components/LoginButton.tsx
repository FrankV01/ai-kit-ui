import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      console.log(session);

      if (!session || !session.user) return;
      const response = fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(session),
      }).then((response) => {
        if (response.ok) {
          console.log("Data recorded successfully");
        } else {
          console.error("Failed to record data");
        }
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
