import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button";

type LoginFormProps = {};

export function LoginForm({}: LoginFormProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div>Login Form</div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Index Page
      </Button>
    </div>
  );
}
