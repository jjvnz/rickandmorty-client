import React from 'react';
import { PaginationWrapper } from './styles/Pagination.styled';
import { Button } from './styles/Button.styled';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Anterior
      </Button>
      <span>{currentPage} de {totalPages}</span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
