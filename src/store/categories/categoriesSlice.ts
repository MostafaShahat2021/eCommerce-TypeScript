import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actCategories";
import { TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";

interface ICategoriesSlice {
  records: TCategory[]
  loading: TLoading
  error: string | null
}

const initialState: ICategoriesSlice = {
  records: [],
  loading: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = 'failed';
      //type casting
      // state.error = action.payload as string
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    })
  }
})

export {actGetCategories}
export default categoriesSlice.reducer