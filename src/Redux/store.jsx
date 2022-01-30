import {configureStore} from "@reduxjs/toolkit";
import photoReducer from './photoSlice'
import pictureReducer from "./searchSlice";
import userPhotoReducer from "./userPhotoSlice";
import followingReducer from "./getUserFollowing"

const store = configureStore({
    reducer:{
        photo:photoReducer,
        picture:pictureReducer,
        userPhoto: userPhotoReducer,
        following: followingReducer,
        }
})

export default store;
