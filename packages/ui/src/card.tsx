import { type JSX } from "react";

export function Card({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>{children}</p>
    </a>
  );
}
