import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getCategory = createAsyncThunk('api/getCategory', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://api.eobusinessclub.com/api/categories')
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message)
    }
})

export const initialState = {
    data: [],
    isloading: false,
    iserror: null
}

export const getCatslice = createSlice({
    name: 'getCatslice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.isloading = true
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isloading = false;
                state.iserror = null;
                state.data = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isloading = false;
                state.iserror = action.payload;
            })
    }
})


export default getCatslice.reducer