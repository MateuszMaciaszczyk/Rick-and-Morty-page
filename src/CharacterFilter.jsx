import {Select, MenuItem, TextField} from '@mui/material';
import PropTypes from 'prop-types';

const statusOptions = [
    {key: "", text: "All", value: ""},
    {key: "alive", text: "Alive", value: "alive"},
    {key: "dead", text: "Dead", value: "dead"},
    {key: "unknown", text: "Unknown", value: "unknown"},
];

const genderOptions = [
    {key: "", text: "All", value: ""},
    {key: "male", text: "Male", value: "male"},
    {key: "female", text: "Female", value: "female"},
    {key: "genderless", text: "Genderless", value: "genderless"},
    {key: "unknown", text: "Unknown", value: "unknown"},
];

const CharacterFilter = ({filters, setFilters}) => (
    <div style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        marginTop: "1rem",
        justifyContent: "center",
    }}>
        <TextField
            label="Search by Name"
            value={filters.name}
            onChange={(e) => setFilters({...filters, name: e.target.value})}
            variant={"outlined"}
            sx={{
                input: { color: "white" },
                label: { color: "white" },
                fieldset: { borderColor: "white" },
            }}
        />
        <TextField
            label="Search by Species"
            value={filters.species}
            onChange={(e) => setFilters({...filters, species: e.target.value})}
            variant={"outlined"}
            sx={{
                input: { color: "white" },
                label: { color: "white" },
                fieldset: { borderColor: "white" },
            }}
        />
        <Select
            value={filters.gender}
            onChange={(e) => setFilters({...filters, gender: e.target.value})}
            displayEmpty
            sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                ".MuiSvgIcon-root": { color: "white" },
            }}
        >
            {genderOptions.map((option) => (
                <MenuItem key={option.key} value={option.value} className="text-outline">
                    {option.text}
                </MenuItem>
            ))}
        </Select>
        <Select
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
            displayEmpty
            sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                ".MuiSvgIcon-root": { color: "white" },
            }}
        >
            {statusOptions.map((option) => (
                <MenuItem key={option.key} value={option.value} className="text-outline">
                    {option.text}
                </MenuItem>
            ))}
        </Select>
    </div>
);

CharacterFilter.propTypes = {
    filters: PropTypes.shape({
        name: PropTypes.string,
        species: PropTypes.string,
        status: PropTypes.string,
        gender: PropTypes.string,
    }).isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default CharacterFilter;