import { MouseEventHandler } from "react";

export type TagActionButtonProps = {
  className: string;
  linkClassName: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  buttonType: "mix" | "alphabetical";
  disabled: boolean;
};
export function TagActionButton({
  className,
  linkClassName,
  onClick,
  buttonType,
  disabled,
}: TagActionButtonProps) {
  const finalClasses = `${linkClassName} ${disabled ? "disabled" : ""}`;
  return (
    <div className={className}>
      <a
        href={"#"}
        onClick={onClick}
        key={`tag-list-all`}
        className={finalClasses}
      >
        {buttonType === "mix" ? "🔀 Mix 🔀" : "🔤 All 🔤"}
      </a>
    </div>
  );
}
