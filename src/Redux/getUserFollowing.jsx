import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createApi} from 'unsplash-js';

const unsplash = createApi({accessKey: process.env.REACT_APP_ACCESSKEY});

export const getUserFollowing = createAsyncThunk(
    'following/getUserFollowing',
    async ({username}) => {
        const response = await unsplash.users.get({
            username: `${username}`,
        })
        return response.response
    }
)


const userFollowingSlice = createSlice({
    name: 'following',
    initialState: {
        following: [],
        status: null,
    },
    extraReducers: {
        [getUserFollowing.fulfilled]: (state, action) => {
            state.following = action.payload
            state.status = 'success'
        },
        [getUserFollowing.pending]: (state) => {
            state.status = 'loading';
        },
        [getUserFollowing.rejected]: (state) => {
            state.status = 'error'
        },
    }

})

export default userFollowingSlice.reducer;
