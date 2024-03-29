import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

ProductSkeletonPage.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonPage.defaultProps = {
  length: 6,
};

function ProductSkeletonPage({ length }) {
  return (
    <Box margin="0 8px">
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonPage;
