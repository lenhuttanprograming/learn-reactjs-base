import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './filters/FilterByCategory';
import FilterPriceRange from './filters/FilterPriceRange';
import FilterByService from './filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newFilter) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newFilter,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
      <FilterPriceRange onChange={handleChange}></FilterPriceRange>
      <FilterByService filters={filters} onChange={handleChange}></FilterByService>
    </Box>
  );
}

export default ProductFilters;
