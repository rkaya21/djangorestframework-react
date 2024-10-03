import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'; 

export default function Post() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 
    setLoading(true); 
    axiosInstance.get(slug)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setLoading(false); // Veriyi yüklendiysek loading durumunu kapatıyoruz
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false); // Hata oluştuğunda loading durumunu kapatıyoruz
        }
      });

    // Bileşen unmount olduğunda istekleri iptal ediyoruz
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress /> 
        </div>
      ) : error ? (
        <Typography variant="h6" align="center" color="error">
          Hata oluştu: {error} 
        </Typography>
      ) : (
        data && (
          <div>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {data.excerpt}
            </Typography>
          </div>
        )
      )}
    </Container>
  );
}
