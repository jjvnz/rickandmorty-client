import React from 'react';
import Card from "./Card/Card";
import { Button } from './styles/Button.styled';

const RandomCharacter = ({ character, onButtonClick, loading }) => (
  <div style={{ marginBottom: '20px' }}>
    <Button onClick={onButtonClick}>Mostrar personaje aleatorio</Button>
    {loading && <p>Cargando...</p>}
    {character && <Card item={character} />}
  </div>
);

export default RandomCharacter;
