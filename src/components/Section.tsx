import React from "react";

interface Props {
  title: String;
}

export default function Section({
  title,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="mt-10">
      <div className="text-xl font-bold">{title}</div>
      {children}
    </div>
  );
}
