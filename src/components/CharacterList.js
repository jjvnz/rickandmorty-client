import React from 'react';
import Card from "./Card/Card";

const CharacterList = ({ characters, loading }) => (
  <div style={{ marginBottom: '20px' }}>
    {loading && <p>Cargando...</p>}
    {characters && characters.map((item) => (
      <Card key={item.id} item={item} />
    ))}
  </div>
);

export default CharacterList;
