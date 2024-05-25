// Desc: Creative Commons License for the site
import Link from "next/link";
import Image from "next/image";

export default function CCLicense() {
  const styles = "align-middle ms-1";

  const iconSize = 16;
  return (
    <p className={"text-secondary"}>
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
        className={`link-secondary ${styles}`}
        rel="license noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        CC BY-NC 4.0
        <Image
          className={`link-secondary ${styles}`}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt={"creativecommons.org/presskit"}
        />
        <Image
          className={`link-secondary ${styles}`}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt={"creativecommons.org/presskit"}
        />
        <Image
          className={`link-secondary ${styles}`}
          width={iconSize}
          height={iconSize}
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt={"creativecommons.org/presskit"}
        />
      </Link>
    </p>
  );
}
