import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/main.css";

import WelcomeLayout from "@/layouts/default-layout";
import ProjectedRoute from "@/layouts/protected-route";
import ErrorPage from "@/layouts/error-page";

import { IndexPage } from "@/pages/index";
import { LoginPage } from "@/pages/login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProjectedRoute>
        <WelcomeLayout>
          <IndexPage />
        </WelcomeLayout>
      </ProjectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />

    <Toaster />
  </QueryClientProvider>
);
