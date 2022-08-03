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

export default function Card({ 
    item: { id,
      name,
      status, 
      image, 
      species, 
      type, 
      gender, 
      created, 
      location, 
      origin 
    } 
  }) {

  return (
    <StyledCard layout={id % 1 === 0 && 'row-reverse'}>
      <div>
        <h2>{name}</h2>
        <h6>CHARATER ID: {id}</h6>
        <hr/>
        <span> Estatus: {status}</span>
        <hr/>
        <span>Species: {species}</span>
        <hr/>
        <span>Type: {type}</span>
        <hr/>
        <span>Gender: {gender}</span>
        <hr/>
        <span>Location: {location["name"]}</span>
        <hr/>
        <span>Origin: {origin["name"]}</span>
        <hr/>
        <span>Created: {formatDate(new Date(created))}</span>
        <br/>
      </div>
      <br/>
      <div>
        <img src={image} alt='img' />
      </div>
      
    </StyledCard>
  )
}