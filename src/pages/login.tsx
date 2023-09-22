import * as React from "react";

import { LoginForm } from "@/features/auth";

export function LoginPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <LoginForm />
    </div>
  );
}
