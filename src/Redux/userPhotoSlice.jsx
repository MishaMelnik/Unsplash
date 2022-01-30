import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createApi} from 'unsplash-js';

const unsplash = createApi({accessKey: process.env.REACT_APP_ACCESSKEY});

export const getUserPhotos = createAsyncThunk(
    'photos/getUserPhotos',
    async ({username}) => {
        const response = await unsplash.users.getPhotos({
            username: `${username}`,
            perPage:12
        })
        return response.response
    }
)


const userPhotoSlice = createSlice({
    name: 'photos',
    initialState: {
        photosUser: [],
        status: null,
    },
    extraReducers: {
        [getUserPhotos.fulfilled]: (state, action) => {
            state.photosUser = action.payload
            state.status = 'success'
        },
        [getUserPhotos.pending]: (state) => {
            state.status = 'loading';
        },
        [getUserPhotos.rejected]: (state) => {
            state.status = 'error'
        },
    }

})

export default userPhotoSlice.reducer;
