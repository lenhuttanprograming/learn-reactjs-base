import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import NotFound from 'components/NotFound';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TO DO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}
export default TodoFeature;
