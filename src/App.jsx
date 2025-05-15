import React from 'react';
import { Outlet } from 'react-router-dom';
import Avatar from "./component/Avatar";
import Search from "./component/Search";
import { FavoritesProvider } from './component/Favoraties';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundries from "./component/ErrorBoundries";

function App() {
  // const location = useLocation();

  // const getBackgroundColor = () => {
  //   if (location.pathname  === '/') return 'gray';
  //   if (location.pathname.startsWith('/movie')) return 'lightcoral';
  //   if (location.pathname.startsWith('/search')) return 'lightblue';
  //   if (location.pathname === '/favorites') return 'lightblue';
  // };

  return (
    <ErrorBoundries word= "Hi">
    <Provider store={store}>
    <FavoritesProvider>
      {/* <div style={{ backgroundColor: getBackgroundColor(), minHeight: '100vh'}}> */}
        <Outlet />
      {/* </div> */}
    </FavoritesProvider>
    </Provider>
    </ErrorBoundries>
  );
}


export default App;
