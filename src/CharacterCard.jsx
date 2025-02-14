import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = ({ id, name, species, status, gender, image }) => (
    <Card as={Link} to={`/character/${id}`}>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header className="text-outline">Name: {name}</Card.Header>
            <Card.Description className="text-outline">Status: {status}</Card.Description>
            <Card.Meta className="text-outline">Species: {species}</Card.Meta>
            <Card.Description className="text-outline">Gender: {gender}</Card.Description>
        </Card.Content>
    </Card>
);

CharacterCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CharacterCard;