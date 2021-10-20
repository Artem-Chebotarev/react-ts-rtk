import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUser } from "../../models/IUser";
import { userSlice } from "../reducers/userReducer/userSlice";
import { AppDispatch } from "../store/store";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());

//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)