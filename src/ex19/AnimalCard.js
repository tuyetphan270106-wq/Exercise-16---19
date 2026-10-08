import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
    name,
    scientificName,
    size,
    diet,
    additional,
    showAdditional
}) {

    return (
        <div className="animal-card">
            <h2>{name}</h2>

            <p>
                Scientific Name: {scientificName}
            </p>

            <p>
                Size: {size} kg
            </p>

            <p>
                Diet: {diet.join(', ')}
            </p>

            <button onClick={() => showAdditional(additional)}>
                More Info
            </button>
        </div>
    );
}
AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),

    diet: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,

    name: PropTypes.string.isRequired,

    scientificName: PropTypes.string.isRequired,

    showAdditional: PropTypes.func.isRequired,

    size: PropTypes.number.isRequired
};