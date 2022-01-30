import React, {useEffect} from 'react';
import {Avatar, Container, Grid, IconButton, Typography} from "@mui/material";
import './UserAvatar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import {useDispatch, useSelector} from "react-redux";
import {getUserFollowing} from "../../../Redux/getUserFollowing";
const UserAvatar = (props) => {


    const dispatch = useDispatch()

    const {state} = props
    const {username} = state?.user


    useEffect(() => {
        dispatch(getUserFollowing({username}))
    }, [dispatch])
    useEffect(() => {
        dispatch(getUserFollowing())
    }, [dispatch])
    const following = useSelector((state => state.following.following))

    return (
        <div className="userAvatar_paper">
            <Container maxWidth="md">
                <Grid container spacing={6} justifyContent="center" alignContent="center">
                    <Grid item>
                        <Grid container display="block" spacing={1} justifyContent="center" textAlign="center">
                            <Grid item>
                                <Avatar
                                    alt={state?.alt_description}
                                    src={state?.user?.profile_image?.large}
                                    sx={{width: 200, height: 200}}
                                />
                            </Grid>
                            <Grid item>
                                <Typography paragraph color="gray">
                                    {state?.user?.username}
                                </Typography>
                                <IconButton>
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon/>
                                </IconButton>
                                <IconButton>
                                    <PhotoSizeSelectActualOutlinedIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} display="block">
                            <Grid item>
                                <Typography variant="h3" gutterBottom>
                                    {state?.user?.name}
                                </Typography>
                            </Grid>
                            <Grid item display="flex">
                                <Grid item display="flex" marginRight={2}>
                                    <Typography>
                                        Followers:{following?.followers_count}
                                    </Typography>
                                </Grid>
                                <Grid item display="flex">
                                    <Typography>
                                        Following:{following?.following_count}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item display="flex" color="gray">
                                    <HomeOutlinedIcon/>
                                    <Typography marginLeft={1}>
                                        {state?.user?.location}
                                    </Typography>
                                </Grid>
                                <Grid item display="flex" color="gray">
                                    <RecordVoiceOverOutlinedIcon/>
                                    <Typography marginLeft={1}>
                                        {state?.user?.bio}
                                    </Typography>
                                </Grid>
                                <Grid item display="flex" color="gray">
                                    <DownloadForOfflineOutlinedIcon/>
                                    <Typography marginLeft={1}>
                                        Total downloads:{state?.user?.total_collections}
                                    </Typography>
                                </Grid>
                                <Grid item display="flex" color="gray">
                                    <FavoriteBorderOutlinedIcon/>
                                    <Typography marginLeft={1}>
                                        Total likes:{state?.user?.total_likes}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UserAvatar;
