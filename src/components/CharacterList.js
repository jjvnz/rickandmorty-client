import React from 'react';
import Card from "./Card/Card";

const CharacterList = ({ characters, loading }) => {
  const renderCharacterCards = () =>
    characters.map((item) => <Card key={item.id} item={item} />);

  return (
    <div style={{ marginBottom: '20px' }}>
      {loading && <p>Cargando...</p>}
      {characters && renderCharacterCards()}
    </div>
  );
};

export default CharacterList;
