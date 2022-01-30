import React, {useEffect, useState} from 'react';
import {
    Button, Grid, InputBase, Paper, Typography
} from "@mui/material";
import './Main.scss'
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@material-ui/core";
import Posts from "../Posts/Posts";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../../Redux/photoSlice";
import {searchPictures} from "../../../Redux/searchSlice";


const Main = () => {

    const dispatch = useDispatch()
    const photos = useSelector((state => state.photo.photos))

    const [value, setValue] = useState("")

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch])

    useEffect(() => {
        dispatch(searchPictures())
    }, [dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchPictures({
            search: value,
        }))
        setValue("")
    }
    const handleUseTage = (tag) => {
        dispatch(searchPictures({
            search: tag,
        }))
    }

    const navbarLinks = [
        {title: "Trending"},
        {title: "Nature"},
        {title: "Travel"},
        {title: "Animals"},
        {title: "Food"},
        {title: "Health"},
        {title: "Technology"},
        {title: "Events"}
    ];

    return (
        <div>
            <Paper className="main">
                <Grid container zIndex={1} height="91vh" columns={2}>
                    <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
                        <Grid item paddingLeft={5} paddingRight={5} display="block" position="relative">
                                <Typography className="main_typography_1">
                                    Photo of the<br/>
                                    Day by<br/>
                                    {photos[0]?.user?.name}
                                </Typography>
                                <Typography className="main_typography_2" variant="subtitle2" paragraph>
                                    {photos[0]?.description}
                                </Typography>
                            <Button className="main_button" variant="contained" color="success">
                                Explore All
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item zIndex={3} position="absolute" className="main_grid_search_line">
                        <div className="main_search_line">
                            <form onSubmit={handleSubmit} className="main_search_line_input">
                                <InputBase
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="main_search_line_InputBase"
                                    placeholder="Search for high-resolution photos"
                                />
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </form>
                            <div className="main_search_line_toolbar">
                                <div className="main_search_line_toolbar_div_2">
                                    <ul className="main_list">
                                        {navbarLinks.map((item) => {
                                            return (
                                                <li className="main_item" key={item.title}>
                                                    <Button className="main_link" onClick={() => {
                                                        handleUseTage(item.title)
                                                    }}>
                                                        {item.title}
                                                    </Button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="main_grid_img" zIndex={1} item xs={1} position="relative">
                            <img className="main_img" src={photos[0]?.urls?.regular} alt={photos[0]?.alt_description}/>
                    </Grid>
                </Grid>
            </Paper>
            <Posts/>
        </div>
    );
};

export default Main;
