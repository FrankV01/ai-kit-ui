import BasicPlaceHolder from "../../common/BasicPlaceHolder";

export type TagLinkPlaceholderProps = {
  className: string;
  linkClassName: string;
  key: string;
};

export function TagLinkPlaceholder({
  className,
  linkClassName,
}: TagLinkPlaceholderProps) {
  return (
    <div className={`placeholder-glow ${className}  w-25`}>
      <a href="#" className={`${linkClassName} w-100`}>
        <BasicPlaceHolder n={12} />
      </a>
    </div>
  );
}
