import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { API_URL } from "./config";
import CharacterCard from "./CharacterCard";
import CharacterFilter from "./CharacterFilter";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ name: "", species: "", status: "", gender: "" });
    const [info, setInfo] = useState({});

    useEffect(() => {
        const fetchCharacters = async () => {
            const query = new URLSearchParams({
                page,
                name: filters.name,
                species: filters.species,
                status: filters.status,
                gender: filters.gender,
            }).toString();

            const response = await fetch(`${API_URL}?${query}`);
            const data = await response.json();
            setCharacters(data.results || []);
            setInfo(data.info || {});
        };

        fetchCharacters();
    }, [page, filters]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <CharacterFilter filters={filters} setFilters={setFilters} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4rem" }}>
                {characters.map((char) => (
                    <CharacterCard
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        species={char.species}
                        status={char.status}
                        gender={char.gender}
                        image={char.image}
                    />
                ))}
            </div>

                <Pagination
                    count={info.pages || 1}
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    showFirstButton
                    showLastButton
                    sx={{
                        '& .MuiPaginationItem-root': {
                            fontSize: '2rem',
                            color: '#ffffff',
                            marginTop: "2rem",
                            marginBottom: "2rem",
                        },
                    }}
                />
        </div>
    );
};

export default CharacterList;