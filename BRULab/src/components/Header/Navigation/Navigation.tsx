import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import LinkMui from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
}

export function Navigation() {
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
                    about react
                </LinkMui>
                <LinkMui underline="hover" component={Link} to="/guide">
                    react guide
                </LinkMui>
                <LinkMui underline="hover" component={Link} to="/apps">
                    react apps
                </LinkMui>
            </Breadcrumbs>
        </nav>
    );
}
