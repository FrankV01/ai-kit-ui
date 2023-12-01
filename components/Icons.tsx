import * as Icons from "react-bootstrap-icons";

export type IconProps = {
  className?: string;
  size?: string;
};

export function IconLinkedIn({ className, size }: IconProps) {
  return (
    <a
      title={"LinkedIn"}
      className={`${className || ""}`}
      href={"https://www.linkedin.com/in/frankvillasenor/"}
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
      href={"http://github.com/"}
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
    >
      <Icons.Projector size={size || undefined} />
    </a>
  );
}
export default { IconGitHub, IconLinkedIn, IconTheOpenSourceUorg };
