export type AuthorProps = {
  includeEmailLink: boolean;
  className?: string;
};

const name = "Frank Villasenor";
export default function Author({ includeEmailLink, className }: AuthorProps) {
  if (includeEmailLink) {
    return (
      <a
        href={"mailto:frank.villasenor@gmail.com;frank@theOpenSourceU.org"}
        className={className || ""}
      >
        {name}
      </a>
    );
  } else {
    return <span className={className || ""}>{name}</span>;
  }
}
