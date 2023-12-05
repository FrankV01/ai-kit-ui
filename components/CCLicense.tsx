// Desc: Creative Commons License for the site
import Link from "next/link";
import Image from "next/image";

export default function CCLicense() {
  const style = {
    height: "22px!important",
    "margin-left": "3px",
    "vertical-align": "text-bottom",
  };
  const iconSize = 16;
  return (
    <p
      className={"text-secondary"}
      // xmlns:cc="http://creativecommons.org/ns#"
      // xmlns:dct="http://purl.org/dc/terms/"
    >
      <a
        property="dct:title"
        rel="cc:attributionURL"
        className={"link-secondary"}
        href="http://poems.theOpenSourceU.org"
      >
        AI Generated Content
      </a>
      &nbsp; is licensed under
      <Link
        href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
        target="_blank"
        className={"link-secondary"}
        rel="license noopener noreferrer"
        style={{ display: "inline-block;" }}
      >
        CC BY-NC 4.0
        <Image
          style={style}
          className={"link-secondary"}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt={"creativecommons.org/presskit"}
        />
        <Image
          style={style}
          className={"link-secondary"}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt={"creativecommons.org/presskit"}
        />
        <Image
          style={style}
          className={"link-secondary"}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt={"creativecommons.org/presskit"}
        />
      </Link>
    </p>
  );
}
