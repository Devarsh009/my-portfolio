import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-white text-black hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white",
  outline: "border border-white/30 text-white/80 hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classNames = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return <button className={classNames}>{children}</button>;
}
