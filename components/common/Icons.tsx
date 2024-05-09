import * as Icons from "react-bootstrap-icons";

export type IconProps = {
  className?: string;
  size?: string;
};

//
// If we create any more of these, we should create a private component that
// to handle the common logic.
//
export function IconLinkedIn({ className, size }: IconProps) {
  return (
    <a
      title={"LinkedIn"}
      className={`${className || ""}`}
      href={"https://www.linkedin.com/in/frankvillasenor/"}
      target={"_blank"}
    >
      <Icons.Linkedin size={size || undefined} />
    </a>
  );
}

export function IconGitHub({ className, size }: IconProps) {
  return (
    <a
      title={"GitHub"}
      className={`${className || ""}`}
      href={"https://github.com/FrankV01"}
      target={"_blank"}
    >
      <Icons.Github size={size || undefined} />
    </a>
  );
}

export function IconTheOpenSourceUorg({ className, size }: IconProps) {
  return (
    <a
      title={"The Open Source U - Frank Villasenor"}
      className={`${className || ""}`}
      href={"http://www.theOpenSourceU.org"}
      target={"_blank"}
    >
      <Icons.Projector size={size || undefined} />
    </a>
  );
}

const IconSet = { IconGitHub, IconLinkedIn, IconTheOpenSourceUorg };
export default IconSet;
