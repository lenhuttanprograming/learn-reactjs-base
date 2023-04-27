import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonPage from '../components/ProductSkeletonPage';
import { Pagination } from '@material-ui/lab';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '253px',
  },
  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 9,
  });
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 100,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        console.log(data, pagination);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to get API ');
      }
      setLoading(false);
    })();
  }, [filter]);

  const handlePagination = (e, page) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>Left column</Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                {loading ? <ProductSkeletonPage></ProductSkeletonPage> : <ProductList data={productList}></ProductList>}
                <Pagination
                  count={Math.ceil(pagination._total / pagination._limit)}
                  page={pagination._page}
                  color="primary"
                  onChange={handlePagination}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
