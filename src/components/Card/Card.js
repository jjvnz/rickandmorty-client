import React from 'react';
import { StyledCard } from '../styles/Card.styled';


export default function Card({ item: { id, name, status, image, species, type, gender, created } }) {
  return (
    <StyledCard layout={'row-reverse'}>
      <div>
        <h2>{name}</h2>
        <h6>CHARATER ID: {id}</h6>
        <hr/>
        <h3> Estatus: {status}</h3>
        <hr/>
        <h3>Species: {species}</h3>
        <hr/>
        <h3>Type: {type}</h3>
        <hr/>
        <h3>Gender: {gender}</h3>
        <hr/>
        <h3>Created: {created}</h3>
        <hr/>
      </div>
      <div>
        <img src={image} alt='' />
      </div>
    </StyledCard>
  )
}