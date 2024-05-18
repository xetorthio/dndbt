import React from 'react';
import { TableCell } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const EditableCell = ({value, updateValue}) => {
    const [editKey, setEditKey] = useState(false);

    const handleCellClick = () => {
        setEditKey(true);
    }

    const handleInputBlur = () => {
        setEditKey(false);
    }

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleInputBlur();
        }
    }

    const onChangeValue = (event) => {
        updateValue(event.target.value);
    }

    return (
        <TableCell scope="row" onClick={handleCellClick}>
            {editKey ?  (
                <TextField id="standard-basic" label="Standard" variant="standard" defaultValue={value} onChange={onChangeValue} onBlur={handleInputBlur} autoFocus={true} onKeyDown={handleInputKeyDown} />
            ) : (
                value
            )
            }
        </TableCell>
    );
}

export default EditableCell;
