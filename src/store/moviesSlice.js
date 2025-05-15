import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  currentPage: 1,
  hasMore: true,
  cache: {},
};

export const getMovies = createAsyncThunk(
  "getmovies",
  async (page = 1, { getState }) => {
    const state = getState().movies;

    if (state.cache[page]) {
      return { movies: state.cache[page], page, fromCache: true, totalPages: state.totalPages };
    }

    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1a7539ea0ab98552a4217cb34a11f68a&page=${page}`);

    return {
      movies: data.results,
      page,
      fromCache: false,
      totalPages: data.total_pages,
    };
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.cache = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        const { movies, page, fromCache, totalPages } = action.payload;

        if (page === 1) {
          state.movies = movies;
        } else {
          state.movies = [...state.movies, ...movies];
        }

        state.cache[page] = movies;
        state.currentPage = page;
        state.hasMore = page < totalPages;
        state.loading = false;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        console.error("Error fetching movies:", action.error.message);
      });
  },
});

export const { resetMovies } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
export const selectMoviesByPage = (state, page) => state.movies.cache[page] || null;
