import NotFound from 'components/NotFound';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import DetailPage from './DetailPage';
import ListPage from './ListPage';

TodoFeatureV2.propTypes = {};

function TodoFeatureV2(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeatureV2;
