import { Box } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.path} exact component={ListPage}></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
