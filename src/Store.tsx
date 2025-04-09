import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
import SortReducer from "./Slices/SortSlice";
import jwtReducer from "./Slices/JwtSlice";

export default configureStore({
    reducer:{
        user : userReducer,
        profile : profileReducer,
        filter: filterReducer,
        sort: SortReducer,
        token: jwtReducer
    }
})