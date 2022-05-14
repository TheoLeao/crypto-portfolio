import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react';
const ColorNumber = ({ number }) => {

    const type = number > 0 ? 'increase' : 'decrease';
    return <><StatArrow type={type} /> {number}</>
}
export default ColorNumber;
