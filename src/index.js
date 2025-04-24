import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home"
import SearchResults from './pages/searchResult';
import FavoritesPage from "./pages/FavoritePage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home /> 
      },
      {
        path: "movie/:movieId",
        element: <MovieDetail />
      },
      {
        path: "search/:query",
        element: <SearchResults />
      },{
         path:"/favorites" ,
         element:<FavoritesPage />
         

      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
