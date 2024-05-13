import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
import WarningIcon from '@mui/icons-material/Warning';
import PanToolIcon from '@mui/icons-material/PanTool';
import BlockIcon from '@mui/icons-material/Block';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ScienceIcon from '@mui/icons-material/Science';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LockIcon from '@mui/icons-material/Lock';
import BoltIcon from '@mui/icons-material/Bolt';
import HotelIcon from '@mui/icons-material/Hotel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Chip, Select, MenuItem, FormControl } from "@mui/material";



const ConditionSelector = ({character, updateCharacter}) => {
    const [condition, setCondition] = React.useState('');

    const handleChange = (event) => {
        setCondition(event.target.value);
    };

    const handleConditionSelection = (e) => {
        character.conditions[e.target.value] = true;
        updateCharacter(character);
    }

    const handleConditionDelete = (condition) => {
        character.conditions[condition] = false;
        updateCharacter(character);
    }

    const allConditions = ['Blinded', 'Charmed', 'Deafned', 'Frightened', 'Grappled', 'Incapacitated', 'Invisible',
        'Paralyzed', 'Petrified', 'Poisoned', 'Prone', 'Restrained', 'Stunned', 'Unconscious'
    ];

    const availableConditions = allConditions.filter((condition) => { return !character.conditions[condition.toLowerCase()] });
    const selectedConditions = allConditions.filter((condition) => { return character.conditions[condition.toLowerCase()] });

    return (
        <Box>
            <FormControl>
                <Select onChange={handleConditionSelection} label="Condition" value={condition}>
                    {availableConditions.map((condition) => (
                        <MenuItem key={condition} value={condition.toLowerCase()}>{condition}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {selectedConditions.map((condition) => (
                <Chip key={condition.toLowerCase()} label={condition} onDelete={() => {handleConditionDelete(condition.toLowerCase())} } />
            ))}
        </Box>
    );
}

export default ConditionSelector;