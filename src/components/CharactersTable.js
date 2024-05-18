import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditableCell from './EditableCell';
import ConditionSelector from './ConditionSelector';
import { styled } from '@mui/material/styles';
import DuplicateCharacter from './DuplicateCharacter';


const TurnTableRow = styled(TableRow)(({ theme, isPlaying, isEnemy }) => ({
    backgroundColor: isPlaying ? '#FDFFB6' : isEnemy ? '#FFADAD' : theme.palette.background.default,
}));

const CharactersTable = ({ updateCharacter,  characters, currentTurn }) => {
    const evaluateHP = (character, expression) => {
        try {
            const newHP = eval(expression);
            character.hp = newHP;
            updateCharacter(character);
        } catch (e) {

        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Character</TableCell>
                        <TableCell>Initiative</TableCell>
                        <TableCell>HP</TableCell>
                        <TableCell>Conditions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {characters.map((character, index) => (
                    <TurnTableRow key={character.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    isPlaying={index === currentTurn}
                    isEnemy={character.enemy}>
                        <TableCell sx={{'width': '100px'}} scope="row"><DuplicateCharacter character={character} updateCharacter={updateCharacter} /></TableCell>
                        <EditableCell value={character.name} updateValue={(value) => {character.name = value; updateCharacter(character)} } />
                        <EditableCell value={character.initiative} updateValue={(value) => {character.initiative = value; updateCharacter(character)} } />
                        <EditableCell value={character.hp} updateValue={(value) => {evaluateHP(character, value)}} />
                        <TableCell scope="row"><ConditionSelector character={character} updateCharacter={updateCharacter} /></TableCell>
                    </TurnTableRow>
                ))}
                </TableBody>                
            </Table>
        </TableContainer>
    );
}

export default CharactersTable;