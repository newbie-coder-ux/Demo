import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tableSlice = createSlice({
  name: "table",
  initialState: initialState,
  reducers: {
    setInitialData: (state, action) => {
      return action.payload;
    },
    updateRow: (state, action) => {
        const { id, ...changes } = action.payload;
        const index = state.rows.findIndex(row => row.id === id);
        if (index !== -1) {
            state.rows[index] = { ...state.rows[index], ...changes };
        }
    },
    addRow: (state, action) => {
      state.push(action.payload);
    },
  }
});

export const { setInitialData, updateRow, addRow } = tableSlice.actions;
export default tableSlice.reducer;
