import { combineReducers } from '@reduxjs/toolkit';
import { postAPI } from '../../../services/PostService';
import userReducer from '../userReducer/userSlice';

export const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
});