import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createApi} from 'unsplash-js';

const unsplash = createApi({accessKey: process.env.REACT_APP_ACCESSKEY});

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await unsplash.photos.getRandom({count: 1,})
        return response.response
    }
)


const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
    },
    extraReducers: {
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload
        }
    }

})

export default photoSlice.reducer;
