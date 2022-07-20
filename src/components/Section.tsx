import React from "react";

interface Props {
  title: String;
}

export default function Section({
  title,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="my-10">
      <div className="text-3xl sm:text-4xl font-bold my-3">{title}</div>
      {children}
    </div>
  );
}
