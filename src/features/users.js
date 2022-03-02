import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const userSlice = createSlice({
    name: "users",
    initialState: { value: { isLoading: false, users: [], error: "" } },
    reducers: {
        FETCH_USERS_REQUEST: (state, action) => {
            state.value.isLoading = true
        },
        FETCH_USERS_SUCCESS: (state, action) => {
            state.value.isLoading = false
            state.value.users = action.payload
            state.value.error = " "
        },
        FETCH_USERS_FAILURE: (state, action) => {
            state.value.error = action.payload
            state.value.isLoading = false
            state.value.users = []
        }
    }
})

export const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = userSlice.actions
export default userSlice.reducer

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(FETCH_USERS_REQUEST())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data;
                dispatch(FETCH_USERS_SUCCESS(users))
            })
            .catch((error) => {
                dispatch(FETCH_USERS_FAILURE(error.message))
            })
    }
}