import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export const fetchArticles = createAsyncThunk(
    'articles/fetch',
    async () => {
      const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&pageSize=10&apiKey=968eb88304e84a5eab0b2f367f95b5cf');
      const data = await response.json();
      console.log("slice", data.articles);
    //   setArticlesState(data.articles);
      return data.articles;
    }
  );
// export const fetchArticles = () => {

//     let headers = new Headers();

//     headers.set('Authorization', 'Bearer ');

//     fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&pageSize=10&apiKey=968eb88304e84a5eab0b2f367f95b5cf`, {

//     method: 'GET',
//     headers: headers,
//     })
//     .then(res => res.json())
//     .then(response => {
//         console.log("ololo into slice", response)
//         setArticlesState(response);
//     }).catch(function(error) {
//         console.log(error.message);
//     });

// }
// Type for our state
export interface ArticlesState {
  articlesState: object;
}

// Initial state
const initialState: ArticlesState = {
  articlesState: [],
};

// Actual Slice
export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    // Action to set the authentication status
    setArticlesState(state, action) {
      state.articlesState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.articles,
      };
    },
  },
});

export const { setArticlesState } = articlesSlice.actions;

export const selectArticlesState = (state: AppState) => state.articles.articlesState;

export default articlesSlice.reducer;