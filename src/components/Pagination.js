import React from 'react';
import { PaginationWrapper } from './styles/Pagination.styled';
import { Button } from './styles/Button.styled';


const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <PaginationWrapper>
    <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      Anterior
    </Button>
    <span>{currentPage} de {totalPages}</span>
    <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
      Siguiente
    </Button>
  </PaginationWrapper>
);

export default Pagination;