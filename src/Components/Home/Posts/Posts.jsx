import React, {useEffect, useState} from 'react';
import {
    Card, CardActions, CardContent,
    CardMedia, Container, Grid,
    IconButton, Typography
} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Divider from '@mui/material/Divider';
import './Posts.scss'
import {useDispatch, useSelector} from "react-redux";
import {addMorePicture, searchPictures} from "../../../Redux/searchSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalCase from "../../ModalCase/ModalCase";


const Posts = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState()

    const handleOpen = (idx) => {
        setIndex(idx)
        setOpen(true);
    };
    const normalTime = (time) => {
        const date = Date(time)
        const fullDate = date.toLocaleString().split(' ')
        const normalDate = `${fullDate[0]} ${fullDate[1]} ${fullDate[2]} ${fullDate[3]}`
        return normalDate
    }

    const dispatch = useDispatch()
    const pictures = useSelector((state => state.picture.picture))

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(searchPictures({page}))
    }, [dispatch])

    const scrollHandler = () => {
        dispatch(addMorePicture({
            pictures: pictures
        }))
        setPage(() => page + 1)
    }


    return (
        <Container maxWidth="xl" className="posts_container">
            <InfiniteScroll
                dataLength={pictures.length}
                next={scrollHandler}
                hasMore={true}
                loader={
                    <Typography textAlign="center">
                        Loading...
                    </Typography>
                }
                endMessage={
                    <Typography textAlign="center">
                        Its all
                    </Typography>
                }
            >
                <Grid container spacing={3}>
                    {pictures?.map((item, idx) => (
                        <Grid item key={item?.id} xs={12} sm={6} md={3}>
                            <Card className="posts_card">
                                <div onClick={() => handleOpen(idx)}>
                                    <CardMedia
                                        image={item?.urls.regular}
                                        className="posts_cardMedia"
                                    />
                                    <CardContent style={{height: 150}}>
                                        <Typography variant="h5" gutterBottom>
                                            {item?.user.name}
                                        </Typography>
                                        <Typography paragraph color="darkgrey">
                                            {normalTime(item?.user.updated_at)}
                                        </Typography>
                                        <Typography color="darkgrey">
                                            {item?.alt_description}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <Divider/>
                                <CardActions className="posts_cardActions">
                                    <IconButton>
                                        <BookmarkBorderIcon/>
                                    </IconButton>
                                    <div className="posts_card_icons">
                                        <IconButton>
                                            <FavoriteBorderIcon/>
                                        </IconButton>
                                        <span>{item?.likes}</span>
                                        <IconButton>
                                            <ChatBubbleOutlineIcon/>
                                        </IconButton>
                                        <span>512</span>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <ModalCase open={open} setOpen={setOpen} pictures={pictures} picture={pictures[index]}/>
                </Grid>
            </InfiniteScroll>
        </Container>
    );
};

export default Posts;
