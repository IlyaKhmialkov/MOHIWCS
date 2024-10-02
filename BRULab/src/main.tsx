import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactAbout } from "./pages/reactAbout/reactAabout.tsx";
import { ReactApps } from "./pages/reactApps/reactApps.tsx";
import { ReactGuide } from "./pages/reactGuide/reactGuide.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReactAbout />,
    },
    {
        path: "/guide",
        element: <ReactGuide />,
    },
    {
        path: "/apps",
        element: <ReactApps />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
