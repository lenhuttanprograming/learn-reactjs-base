import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.number,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  return (
    <Box margin="0 8px">
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
