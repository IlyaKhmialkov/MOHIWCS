import styles from "./Footer.module.scss";
import { MUIModal } from "./MUIModal/MUIModal";
import { Breadcrumbs } from "@mui/material";
import LinkMui from "@mui/material/Link";
import { useState } from "react";

export function Footer() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <footer className={styles.footer}>
            <MUIModal open={open} setOpen={setOpen} />

            <Breadcrumbs
                aria-label="breadcrumb"
                sx={{
                    "& .MuiBreadcrumbs-separator": { color: "#FFFFFF" },
                }}
            >
                <LinkMui href="tel: +123456789" underline="hover">
                    phone
                </LinkMui>
                <LinkMui href="mailto: aaa@a.com" underline="hover">
                    email
                </LinkMui>
                <LinkMui underline="hover" component="button" onClick={handleOpen}>
                    MUI modal
                </LinkMui>
            </Breadcrumbs>
        </footer>
    );
}
