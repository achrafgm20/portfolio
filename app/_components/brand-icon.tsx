import type { SimpleIcon } from "simple-icons";

type BrandIconProps = {
  icon: SimpleIcon;
  className?: string;
  title?: string;
};

export function BrandIcon({ icon, className, title }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={title ?? icon.title}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
