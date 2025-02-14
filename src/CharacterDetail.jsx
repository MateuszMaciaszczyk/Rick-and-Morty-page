import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Header, Segment, List } from "semantic-ui-react";
import { API_URL } from "./config";

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`${API_URL}/${id}`);
            const data = await response.json();
            setCharacter(data);

            const episodeResponses = await Promise.all(data.episode.map(url => fetch(url)));
            const episodeData = await Promise.all(episodeResponses.map(res => res.json()));

            setEpisodes(episodeData);
        };

        fetchCharacter();
    }, [id]);

    if (!character) return <p>Loading...</p>;

    const formatEpisodeCode = (episode) => {
        const match = episode.match(/S(\d+)E(\d+)/);
        if (match) {
            return `Season ${parseInt(match[1], 10)}, Episode ${parseInt(match[2], 10)}`;
        }
        return episode;
    };

    return (
        <Container style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
        }}>
            <Segment padded style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "3rem" }}>
                <Image src={character.image} size="medium" />
                <Header as="h1" className="text-outline">{character.name}</Header>
                <p className="text-outline"><strong>Species:</strong> {character.species}</p>
                <p className="text-outline"><strong>Gender:</strong> {character.gender}</p>
                <p className="text-outline"><strong>Status:</strong> {character.status}</p>
                {character.type && <p className="text-outline"><strong>Type:</strong> {character.type}</p>}
                <p className="text-outline"><strong>Origin:</strong> {character.origin?.name}</p>
                <p className="text-outline"><strong>Location:</strong> {character.location?.name}</p>
            </Segment>
            <Segment padded style={{ flex: 1 }}>
                <Header as="h1" className="text-outline">Episodes</Header>
                <List>
                    {episodes.map((episode, index) => (
                        <List.Item key={index}>
                            <a href={episode.url} target="_blank" rel="noopener noreferrer" className="text-outline">
                                {formatEpisodeCode(episode.episode)} - {episode.name}
                            </a>
                        </List.Item>
                    ))}
                </List>
            </Segment>
        </Container>
    );
};

export default CharacterDetail;