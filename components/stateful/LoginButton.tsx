import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as Icons from "react-bootstrap-icons";

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();
  //if (!router.isReady) return null;

  if (session && session.user) {
    return (
      <div className={"float-end"}>
        <div
          className={"btn btn-primary small"}
          title={"Submit Prompt"}
          onClick={() => {
            router.push("/poem/create");
          }}
        >
          <Icons.PlusCircleFill title={"Submit Prompt"} />
          <span className="visually-hidden">Submit a prompt</span>
        </div>

        <div
          className={"btn btn-primary small"}
          title={"Click to signout"}
          onClick={() => signOut()}
        >
          Hi {(session.user.name || "Name-Unknown LastName")?.split(" ")[0]}!{" "}
        </div>
      </div>
    );
  }
  return (
    <div title={"Not signed in"} className={"float-end"}>
      <div className={"btn btn-primary"} onClick={() => signIn()}>
        Sign In/Up
      </div>
    </div>
  );
}
