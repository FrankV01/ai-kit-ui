export default function Author({ className }: { className?: string }) {
  return (
    <a
      href={"mailto:frank.villasenor@gmail.com;frank@theOpenSourceU.org"}
      className={className || ""}
    >
      Frank Villasenor
    </a>
  );
}
