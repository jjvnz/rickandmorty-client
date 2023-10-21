import React from 'react';
import { FilterContainer, FilterSelect } from './styles/Filter.styled';

const Filters = ({ statusFilter, genderFilter, onStatusChange, onGenderChange }) => (
  <FilterContainer>
    <FilterSelect value={statusFilter} onChange={onStatusChange}>
      <option value="">Todos los estados</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconocido</option>
    </FilterSelect>

    <FilterSelect value={genderFilter} onChange={onGenderChange}>
      <option value="">Todos los géneros</option>
      <option value="male">Masculino</option>
      <option value="female">Femenino</option>
      <option value="genderless">Sin género</option>
      <option value="unknown">Desconocido</option>
    </FilterSelect>
  </FilterContainer>
);

export default Filters;
