import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TextState {
  value: string;
}

const initialState: TextState = {
  value: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { updateText } = textSlice.actions;

export default textSlice.reducer;
