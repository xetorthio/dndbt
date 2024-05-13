import React from "react";
import { Button } from "@mui/material";

const NewEncounter = ({ newEncounter }) => {
    return (
        <Button variant="contained" color="warning" onClick={newEncounter}>New Encounter</Button>
    );
}

export default NewEncounter;