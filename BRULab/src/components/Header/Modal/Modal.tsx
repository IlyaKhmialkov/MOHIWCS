import styles from "./Modal.module.scss";
import { Fab, Backdrop, Checkbox, Slider, Box, Badge } from "@mui/material";
import { Favorite, FavoriteBorder, Mail, Close } from "@mui/icons-material";
import { useState } from "react";

interface IModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Modal({ open, setOpen }: IModalProps) {
    const handleClose = () => {
        setOpen(false);
    };

    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };

    return (
        <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
        >
            <div className={styles.modalContainer}>
                <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
                    <img src="react.svg" alt="react" />
                    <div className={styles.checkboxDiv}>
                        <p>do you like react?</p>
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </div>
                    <Badge badgeContent={sliderValue} color="success">
                        <Mail color="warning" />
                    </Badge>
                    <Box sx={{ width: 220 }}>
                        <Slider
                            defaultValue={0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            valueLabelDisplay="off"
                        />
                    </Box>
                    <Fab aria-label="add" onClick={() => handleClose()}>
                        <Close />
                    </Fab>
                </div>
            </div>
        </Backdrop>
    );
}
