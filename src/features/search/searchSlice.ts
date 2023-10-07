import { RootState } from '../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    searchField: string;
}

const initialState: SearchState = {
    searchField: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = searchSlice.actions;

export const selectSearchField = (state: RootState) => state.search.searchField;

export default searchSlice.reducer;