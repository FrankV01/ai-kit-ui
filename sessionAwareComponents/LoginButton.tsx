import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Overlay, OverlayTrigger } from "react-bootstrap";
import { useRouter } from "next/navigation";
import * as Icons from "react-bootstrap-icons";

const overlayConfig = { show: 250, hide: 400 };
const overlayStyles = "bg-warning-subtle p-1 small text-dark";

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <div className={"float-end"}>
        <OverlayTrigger
          placement="auto"
          delay={overlayConfig}
          overlay={<div className={overlayStyles}>Submit a prompt</div>}
        >
          <Button
            className={"text-dark small"}
            title={"Submit Prompt"}
            onClick={() => {
              router.push("/poem/create");
            }}
          >
            <Icons.PlusCircleFill title={"Submit Prompt"} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="auto"
          delay={overlayConfig}
          overlay={
            <div className={overlayStyles}>
              Click to sign out of your account
            </div>
          }
        >
          <Button
            className={"text-dark small"}
            title={"Click to signout"}
            onClick={() => signOut()}
          >
            Hi {(session.user.name || "Name-Unknown LastName")?.split(" ")[0]}!{" "}
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
  return (
    <div title={"Not signed in"} className={"float-end"}>
      <OverlayTrigger
        placement="auto"
        delay={overlayConfig}
        overlay={
          <div className={overlayStyles}>
            New Feature! If you create an account and log in, you can submit a
            poem prompt for the AI. (May take a couple of days as we pilot this
            feature)
          </div>
        }
      >
        <Button className={"button text-dark"} onClick={() => signIn()}>
          Sign In/Up
        </Button>
      </OverlayTrigger>
    </div>
  );
}
