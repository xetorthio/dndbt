import * as React from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const NewCharacter = ({addCharacter}) => {
    const addNewCharacter = () => {
        addCharacter({id: uuidv4(), name: '', initiative: 0, hp: 0, conditions: {}});
    }
    return (
        <Button variant="contained" onClick={addNewCharacter}>Add Character</Button>
    );
}

export default NewCharacter;