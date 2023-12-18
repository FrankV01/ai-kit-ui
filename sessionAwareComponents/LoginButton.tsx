import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Overlay, OverlayTrigger } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { RecordLogin } from "../lib/ApiActions";
import { useRouter } from "next/navigation";
import * as Icons from "react-bootstrap-icons";

const overlayConfig = { show: 250, hide: 400 };
const overlayStyles = "bg-warning-subtle p-1 small text-dark";

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const target = useRef(null);

  useEffect(() => {
    if (session && session.user) {
      RecordLogin();
    }
  }, [session]);

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
            ref={target}
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
            Signed In
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
