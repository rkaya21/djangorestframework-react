import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const footers = [
  { title: 'Şirket', description: ['Ekip', 'Tarihçe', 'İletişim', 'Lokasyon'] },
  { title: 'Özellikler', description: ['Hizmetler', 'Öne çıkan özellikler', 'Takım özellikleri', 'Geliştirici bilgileri', 'Diğer özellikler'] },
  { title: 'Kaynaklar', description: ['django-rest-framework', 'react-app', 'webAPI', 'django-orm'] },
  { title: 'Hukuki', description: ['Gizlilik politikası', 'Kullanım şartları'] },
];

function Footer() {
  return (
    <Container maxWidth="md" component="footer">
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Telif hakkı © '}
          <Link color="inherit" href="https://mui.com/">
            Web Siteniz
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
