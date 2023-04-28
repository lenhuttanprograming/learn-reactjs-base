import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACHOLDER } from 'constants';
import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACHOLDER;
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="210px">
        <img width="100%" src={thumbnailUrl} alt="img tag" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>

      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
