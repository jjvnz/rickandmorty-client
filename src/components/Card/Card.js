import React from 'react';
import { StyledCard } from '../styles/Card.styled';


export default function Card({ item: { id, name, status, image, species, type, gender, created, location, origin } }) {
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
        <span>Created:{created}</span>
      </div>
     
      <br/>
      <div>
        <img src={image} alt='img' />
      </div>
      
    </StyledCard>
  )
}