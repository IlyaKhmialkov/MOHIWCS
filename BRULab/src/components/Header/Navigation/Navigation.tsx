import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import LinkMui from "@mui/material/Link";
import { useTranslation } from "react-i18next";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
}

export function Navigation() {
    const { t } = useTranslation();

    return (
        <nav role="presentation" onClick={handleClick}>
            <Breadcrumbs
                aria-label="breadcrumb"
                sx={{
                    "& .MuiBreadcrumbs-separator": { color: "#FFFFFF" },
                    "@media (max-width: 400px)": {
                        "& .MuiBreadcrumbs-separator": { display: "none" },
                        "& .MuiBreadcrumbs-ol": {
                            display: "flex",
                            flexDirection: "column",
                        },
                    },
                }}
            >
                <LinkMui component={Link} to="/" underline="hover">
                    {t("d0")}
                </LinkMui>
                <LinkMui underline="hover" component={Link} to="/guide">
                    {t("d1")}
                </LinkMui>
                <LinkMui underline="hover" component={Link} to="/apps">
                    {t("d2")}
                </LinkMui>
            </Breadcrumbs>
        </nav>
    );
}
