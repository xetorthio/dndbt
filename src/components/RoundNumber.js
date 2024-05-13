import React from "react";
import { Typography } from "@mui/material";

const RoundNumber = ({rounds}) => {
    return (
        <Typography gutterBottom variant="h5" component="div">
            Round: {rounds} (Elapsed: {rounds*6}s)
        </Typography>
    );
}

export default RoundNumber;