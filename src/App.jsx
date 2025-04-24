import React from 'react';
import { Outlet } from 'react-router-dom';
import Avatar from "./component/Avatar";
import Search from "./component/Search";
import { FavoritesProvider } from './component/Favoraties';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname  === '/') return 'gray';
    if (location.pathname.startsWith('/movie')) return 'lightcoral';
    if (location.pathname.startsWith('/search')) return 'lightblue';
    if (location.pathname === '/favorites') return 'lightblue';
  };

  return (
    <FavoritesProvider>
      <div style={{ backgroundColor: getBackgroundColor(), minHeight: '100vh', padding: '20px' }}>
        <Outlet />
      </div>
    </FavoritesProvider>
  );
}


export default App;
