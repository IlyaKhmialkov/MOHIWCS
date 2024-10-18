import { Modal, Box, List, ListItem, ListItemText, IconButton, Divider } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { usePersons } from "../../../hooks/usePersons";
import { usePersonActions } from "../../../hooks/usePersonActions";
import { AddCircleOutline, Edit, DeleteForever } from "@mui/icons-material";

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

    const { persons } = usePersons();
    const { addPerson, deletePerson, updatePerson } = usePersonActions();

    let maxId = 0;
    persons.forEach((p) => {
        if (p.person.id >= maxId) {
            maxId = p.person.id + 1;
        }
    });

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <IconButton
                    aria-label="comment"
                    color="info"
                    onClick={() => addPerson({ person: { id: maxId, name: "new name", isBusy: false } })}
                >
                    <AddCircleOutline />
                </IconButton>
                <List sx={{ bgcolor: "inherit" }}>
                    {persons.map((i) => {
                        return (
                            <div key={`${i.person.id}K`}>
                                <ListItem
                                    key={i.person.id}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton aria-label="comment" color="info" disabled={i.person.isBusy}>
                                            <CommentIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={i.person.name} />
                                    <IconButton
                                        aria-label="comment"
                                        color="info"
                                        onClick={() =>
                                            updatePerson({
                                                person: {
                                                    id: i.person.id,
                                                    name: i.person.name,
                                                    isBusy: !i.person.isBusy,
                                                },
                                            })
                                        }
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        aria-label="comment"
                                        color="info"
                                        onClick={() => deletePerson({ ...i })}
                                    >
                                        <DeleteForever />
                                    </IconButton>
                                </ListItem>
                                <Divider key={`${i.person.id}D`} component="li" sx={{ backgroundColor: "#fff" }} />
                            </div>
                        );
                    })}
                </List>
            </Box>
        </Modal>
    );
}
