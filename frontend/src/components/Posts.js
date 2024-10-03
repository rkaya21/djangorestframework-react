import React, { useState, useEffect, useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Posts = ({ posts }) => {
    const [images, setImages] = useState({});

    const safePosts = useMemo(() => Array.isArray(posts) ? posts : [], [posts]);

    useEffect(() => {
        if (safePosts.length === 0) return;

        const imageUrls = safePosts.map((post, index) => {
            return `https://picsum.photos/400/300?random=${index + 1}`;
        });

        setImages(safePosts.reduce((acc, post, index) => {
            acc[post.id] = imageUrls[index];
            return acc;
        }, {}));
    }, [safePosts]); 

    if (safePosts.length === 0) return <p>Hiçbir post bulamadık...</p>;

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {safePosts.map((post) => (
                    <Grid item key={post.id} xs={12} md={4}>
                        <Card>
                            <Link
                                color="textPrimary"
                                href={`/post/${post.slug}`}
                                sx={{ textDecoration: 'none' }}
                            >
                                <CardMedia
                                    sx={{ paddingTop: '56.25%' }} // 16:9
                                    image={images[post.id] || 'default-image-url'} 
                                    title="Image title"
                                />
                            </Link>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                    sx={{ fontSize: '16px', textAlign: 'left' }}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ fontSize: '12px', textAlign: 'left', marginBottom: 2 }}
                                >
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Posts;
