import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createApi} from 'unsplash-js';

const unsplash = createApi({accessKey: process.env.REACT_APP_ACCESSKEY});

export const searchPictures = createAsyncThunk(
    'picture/getPictures',
    async ({search, page}) => {
        const response = await unsplash.search.getPhotos({
            query: `${search}`,
            page: `${page}`,
            perPage: 12,
        })
        return response.response
    }
)


const searchSlice = createSlice({
    name: 'picture',
    initialState: {
        picture: [],
        status: null,
    },
    reducers: {
        addMorePicture: (state, action) => {
            state.picture = [...state.picture, ...action.payload.pictures]
        }
    },
    extraReducers: {
        [searchPictures.pending]: (state) => {
            state.status = 'loading';
        },
        [searchPictures.fulfilled]: (state, action) => {
            state.picture = action.payload.results
            state.status = 'success'
        },
        [searchPictures.rejected]: (state) => {
            state.status = 'error'
        },
    }

})

export const {addMorePicture} = searchSlice.actions;

export default searchSlice.reducer;
