import React from 'react';
import { Outlet } from 'react-router-dom';
import Avatar from "./component/Avatar";
import Search from "./component/Search";

function App() {
  return (
      <Outlet />
  );
}

export default App;
