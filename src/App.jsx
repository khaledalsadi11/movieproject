import React from 'react';
import { Outlet } from 'react-router-dom';
import Avatar from "./component/Avatar";
import Search from "./component/Search";
import { FavoritesProvider } from './component/Favoraties';

function App() {
  return (
    <FavoritesProvider>
      <Outlet />
      </FavoritesProvider>
  );
}

export default App;
