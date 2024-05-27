import Link from "next/link";

export type TagActionButtonProps = {
  className: string;
  linkClassName: string;
  onClick: () => void;
  buttonType: "mix" | "alphabetical";
};
export function TagActionButton({
  className,
  linkClassName,
  onClick,
  buttonType,
}: TagActionButtonProps) {
  return (
    <div className={className}>
      <Link
        href={""}
        onClick={onClick}
        key={`tag-list-all`}
        className={linkClassName}
      >
        {buttonType === "mix" ? "🔀 Mix 🔀" : "🔤 All 🔤"}
      </Link>
    </div>
  );
}
