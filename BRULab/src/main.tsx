import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ReactAbout } from "./pages/reactAbout/reactAabout.tsx";
import { ReactApps } from "./pages/reactApps/reactApps.tsx";
import { ReactGuide } from "./pages/reactGuide/reactGuide.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./store/store.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./assets/i18n.ts";

const customTheme = createTheme({
    components: {
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    backgroundColor: "#61dbfb",
                    color: "#000000",
                    transition: "background-color 0.5s",
                    "&:hover": {
                        backgroundColor: "#3599a9",
                    },
                    "&:active": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { color: "primary" },
                            style: { backgroundColor: "#341178" },
                        },
                    ],
                },
            },
        },
    },
});

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
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <I18nextProvider i18n={i18n}>
                    <RouterProvider router={router} />
                </I18nextProvider>
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
