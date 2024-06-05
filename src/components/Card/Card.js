import React from 'react';
import { StyledCard } from '../styles/Card.styled';

const padTo2Digits = (num) => num.toString().padStart(2, '0');

const formatDate = (date) => {
  const formattedDate = new Date(date);
  const day = padTo2Digits(formattedDate.getDate());
  const month = padTo2Digits(formattedDate.getMonth() + 1);
  const year = formattedDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const CharacterDetail = ({ label, value }) => (
  <>
    <hr />
    <p>{label}: {value}</p>
  </>
);

const Card = ({ item }) => {
  const { id, name, status, species, type, gender, location, origin, created, image } = item;

  const characterDetails = [
    { label: 'Estatus', value: status },
    { label: 'Species', value: species },
    { label: 'Type', value: type },
    { label: 'Gender', value: gender },
    { label: 'Location', value: location.name },
    { label: 'Origin', value: origin.name },
    { label: 'Created', value: formatDate(created) },
  ];

  const isRowReverse = id % 1 === 0;

  return (
    <StyledCard layout={isRowReverse && 'row-reverse'}>
      <div>
        <h2>{name}</h2>
        <p>CHARACTER ID: {id}</p>
        {characterDetails.map((detail, index) => (
          <CharacterDetail key={index} label={detail.label} value={detail.value} />
        ))}
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </StyledCard>
  );
};

export default Card;
