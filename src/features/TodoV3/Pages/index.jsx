import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './ListPage';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import DetailPage from './DetailPage';

TodoFeatureV3.propTypes = {};

function TodoFeatureV3(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
      </Switch>
    </div>
  );
}

export default TodoFeatureV3;
