import React from 'react';
import { FilterContainer, FilterSelect } from './styles/Filter.styled';

const FilterOptions = ({ options }) =>
  options.map(({ value, label }) => <option key={value} value={value}>{label}</option>);

const Filters = ({ statusFilter, genderFilter, onStatusChange, onGenderChange }) => (
  <FilterContainer>
    <FilterSelect value={statusFilter} onChange={onStatusChange}>
      <option value="">Todos los estados</option>
      <FilterOptions options={[
        { value: "alive", label: "Vivo" },
        { value: "dead", label: "Muerto" },
        { value: "unknown", label: "Desconocido" }
      ]} />
    </FilterSelect>

    <FilterSelect value={genderFilter} onChange={onGenderChange}>
      <option value="">Todos los géneros</option>
      <FilterOptions options={[
        { value: "male", label: "Masculino" },
        { value: "female", label: "Femenino" },
        { value: "genderless", label: "Sin género" },
        { value: "unknown", label: "Desconocido" }
      ]} />
    </FilterSelect>
  </FilterContainer>
);

export default Filters;
