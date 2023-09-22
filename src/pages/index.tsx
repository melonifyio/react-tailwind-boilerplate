import * as React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button";

export function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4">
        <div>Index Page</div>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Go to Login Page
        </Button>
      </div>
    </div>
  );
}
