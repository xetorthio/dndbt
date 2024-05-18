import React from "react";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { v4 as uuidv4 } from 'uuid';

const DuplicateCharacter = ({character, updateCharacter}) => {
    const generateName = (oldName) => {
        const chunks = oldName.split(' ');
        if (chunks.length === 0) {
            return oldName + ' 1';
        }
        chunks.push((parseInt(chunks.pop())+1));
        return chunks.join(' ');
    }
    const handleDuplicateCharacter = () => {
        updateCharacter({...character, name: generateName(character.name), id: uuidv4()});
    }

    return (
        <IconButton aria-label="duplicate" onClick={handleDuplicateCharacter}>
            <ContentCopyIcon />
        </IconButton>
    );
}

export default DuplicateCharacter;