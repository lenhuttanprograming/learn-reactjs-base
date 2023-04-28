import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonPage from '../components/ProductSkeletonPage';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '253px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',

    marginTop: '20px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  });
  const [pagination, setPagination] = useState({
    _total: 100,
    _page: 1,
    _limit: 9,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to get API ');
      }
      setLoading(false);
    })();
  }, [filter]);

  const handlePagination = (e, page) => {
    setFilter((prevPage) => ({
      ...prevPage,
      _page: page,
    }));
  };

  const handleSortChange = (sort) => {
    setFilter((prevSort) => ({
      ...prevSort,
      _sort: sort,
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _page: 1,
      ...newFilters,
    }));
  };

  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>
                <ProductFilters filters={filter} onChange={handleFilterChange}></ProductFilters>
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                <ProductSort currentSort={filter._sort} onChange={handleSortChange}></ProductSort>
                {loading ? <ProductSkeletonPage></ProductSkeletonPage> : <ProductList data={productList}></ProductList>}
                <Box className={classes.pagination}>
                  <Pagination
                    count={Math.ceil(pagination._total / pagination._limit)}
                    page={pagination._page}
                    color="primary"
                    onChange={handlePagination}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
