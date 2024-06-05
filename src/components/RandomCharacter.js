import React from 'react';
import Card from "./Card/Card";
import { Button } from './styles/Button.styled';

const RandomCharacter = ({ character, onButtonClick, loading }) => {
  const renderCharacterCard = () => character && <Card item={character} />;

  return (
    <div style={{ marginBottom: '20px' }}>
      <Button onClick={onButtonClick}>Mostrar personaje aleatorio</Button>
      {loading && <p>Cargando...</p>}
      {renderCharacterCard()}
    </div>
  );
};

export default RandomCharacter;
