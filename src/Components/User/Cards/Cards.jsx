import React, {useEffect} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import Divider from "@mui/material/Divider";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {useDispatch, useSelector} from "react-redux";
import {getUserPhotos} from "../../../Redux/userPhotoSlice";


const Cards = (props) => {


    const dispatch = useDispatch()
    const normalTime = (time) => {
        const date = Date(time)
        const fullDate = date.toLocaleString().split(' ')
        const normalDate = `${fullDate[0]} ${fullDate[1]} ${fullDate[2]} ${fullDate[3]}`
        return normalDate
    }

    const {state} = props
    const {username} = state?.user

    useEffect(() => {
        dispatch(getUserPhotos({username}))
    }, [dispatch])
    useEffect(() => {
        dispatch(getUserPhotos())
    }, [dispatch])
    const photosUser = useSelector((state => state.userPhoto.photosUser))
    const {results} = photosUser


    return (
        <Container maxWidth="xl" className="posts_container">
            <Grid container spacing={4}>
                {results?.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={3}>
                        <Card className="posts_card">
                            <div>
                                <CardMedia
                                    image={card.urls.regular}
                                    className="posts_cardMedia"
                                />
                                <CardContent style={{height: 150}}>
                                    <Typography variant="h5" gutterBottom>
                                        {card.user.name}
                                    </Typography>
                                    <Typography paragraph color="darkgrey">
                                        {normalTime(card.user.updated_at)}
                                    </Typography>
                                    <Typography paragraph color="darkgrey">
                                        {card.alt_description}
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
                                    <span>{card.likes}</span>
                                    <IconButton>
                                        <ChatBubbleOutlineIcon/>
                                    </IconButton>
                                    <span>512</span>
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Cards;
