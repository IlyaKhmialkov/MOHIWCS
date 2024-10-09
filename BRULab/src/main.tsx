import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactAbout } from "./pages/reactAbout/reactAabout.tsx";
import { ReactApps } from "./pages/reactApps/reactApps.tsx";
import { ReactGuide } from "./pages/reactGuide/reactGuide.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReactAbout />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/guide",
        element: <ReactGuide />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/apps",
        element: <ReactApps />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
