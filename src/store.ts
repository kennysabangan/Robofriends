import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/search/searchSlice'
import robotsReducer from './features/robots/robotsSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    robots: robotsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch