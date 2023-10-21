import React from 'react';
import { StyledCard } from '../styles/Card.styled';

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}
export default function Card({ item }) {
  const characterDetails = [
    { label: 'Estatus', value: item.status },
    { label: 'Species', value: item.species },
    { label: 'Type', value: item.type },
    { label: 'Gender', value: item.gender },
    { label: 'Location', value: item.location.name },
    { label: 'Origin', value: item.origin.name },
    { label: 'Created', value: formatDate(new Date(item.created)) },
  ];

  return (
    <StyledCard layout={item.id % 1 === 0 && 'row-reverse'}>
      <div>
        <h2>{item.name}</h2>
        <p>CHARACTER ID: {item.id}</p>
        {characterDetails.map((detail, index) => (
          <React.Fragment key={index}>
            <hr/>
            <p>{detail.label}: {detail.value}</p>
          </React.Fragment>
        ))}
      </div>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
    </StyledCard>
  )
}
