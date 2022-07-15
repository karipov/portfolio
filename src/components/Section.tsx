import { ReactNode } from "react";

interface Props {
  title: String;
  children: ReactNode;
}

export default function ({ title, children }: Props) {
  return (
    <div className="py-5">
      <div className="">{title}</div>
      {children}
    </div>
  );
}
