import productApi from 'api/productApi';
import CounterFeature from 'features/Counter';
import { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Header from './components/Header';
import TodoFeature from 'features/Todo/Pages';
import AlbumFeature from 'features/Album/pages';
import { SnackbarProvider } from 'notistack';
import ProductFeature from 'features/Product';

function App() {
  // useEffect(() => {
  //   async function fetchProductApi() {
  //     const params = { _limit: 10 };
  //     const products = await productApi.getAll(params);
  //   }
  //   fetchProductApi();
  // }, []);

  return (
    <div className="app">
      <Header></Header>
      {/* <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Album</Link>
      </p> */}
      <Switch>
        {/* <Route path="/" component={CounterFeature} exact /> */}
        {/* <Route path="/todos" component={TodoFeatureV3} /> */}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="" component={ProductFeature}></Route>
      </Switch>
      {/* <AlbumFeature /> */}
      {/* <Counter /> */}
      {/* <ColorBox /> */}
      Footer
    </div>
  );
}

export default App;
