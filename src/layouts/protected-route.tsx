import * as React from "react";
import { Navigate } from "react-router-dom";

export default function ProjectedRoute({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const user = true;

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
}
