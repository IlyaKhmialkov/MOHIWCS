import { Modal, Box, List, ListItem, ListItemText, IconButton, Divider } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

interface IMUIModalParams {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    bgcolor: "#222",
    border: "2px solid",
    borderColor: "divider",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
};

export function MUIModal({ open, setOpen }: IMUIModalParams) {
    const handleClose = () => setOpen(false);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <List sx={{ bgcolor: "inherit" }}>
                    <ListItem
                        key={"i1"}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment" color="info">
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Contact 1`} />
                    </ListItem>
                    <Divider key={"d1"} component="li" sx={{ backgroundColor: "#fff" }} />
                    <ListItem
                        key={"i2"}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment" color="info">
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Contact 2`} />
                    </ListItem>
                    <Divider key={"d2"} component="li" sx={{ backgroundColor: "#fff" }} />
                    <ListItem
                        key={"i3"}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment" color="info">
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Contact 3`} />
                    </ListItem>
                </List>
            </Box>
        </Modal>
    );
}
