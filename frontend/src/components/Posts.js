import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}));

const Posts = (props) => {
    const { posts } = props;
    const [images, setImages] = useState({});
    const classes = useStyles();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
                const imageRequests = posts.map(async (post) => {
                    const response = await axios.get('https://api.unsplash.com/photos/random', {
                        params: {
                            client_id: accessKey,
                            query: 'nature', 
                            count: 1, 
                        },
                    });
                    return response.data[0]?.urls?.regular;
                });

                const imagesUrls = await Promise.all(imageRequests);
                setImages(posts.reduce((acc, post, index) => {
                    acc[post.id] = imagesUrls[index];
                    return acc;
                }, {}));
            } catch (error) {
                console.error("Resimler alınırken bir hata oluştu:", error);
            }
        };

        fetchImages();
    }, [posts]);

    if (!posts || posts.length === 0) return <p>Hiçbir post bulamadık..</p>;

    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {posts.map((post) => (
                        <Grid item key={post.id} xs={12} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={images[post.id]}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h2"
                                        className={classes.postTitle}
                                    >
                                        {post.title}
                                    </Typography>
                                    <div className={classes.postText}>
                                        <Typography
                                            component="p"
                                            color="textPrimary"
                                        ></Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {post.excerpt}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Posts;