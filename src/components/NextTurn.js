import React from "react";
import { Button } from "@mui/material";

const NextTurn = ({nextTurn}) => {
    return (
        <Button variant="contained" color="error" onClick={nextTurn}>Next Turn</Button>
    );
}

export default NextTurn;