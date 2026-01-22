import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`glass-panel rounded-3xl p-6 ${className ?? ""}`}>{children}</div>
  );
}
