import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div>
      <div className="relative min-h-full">{children}</div>
    </div>
  );
}
