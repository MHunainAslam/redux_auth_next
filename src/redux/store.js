import { configureStore } from "@reduxjs/toolkit";
import getCategory from "./slices/category/GetCategory";

export const store = configureStore({
    reducer: {
        getCategoryApi: getCategory
    }
})