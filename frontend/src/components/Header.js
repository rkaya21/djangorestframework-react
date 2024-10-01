import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme();

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              RecepBlog
            </Link>
          </Typography>
          <nav>
            <Link
              component={NavLink}
              to="/register"
              underline="none"
              color="textPrimary"
              sx={{ margin: theme.spacing(1, 1.5) }}
            >
              Kayıt Ol
            </Link>
          </nav>
          <Button
            color="primary"
            variant="outlined"
            component={NavLink}
            to="/login"
            sx={{ margin: theme.spacing(1, 1.5) }}
          >
            Giriş
          </Button>
          <Button
            color="primary"
            variant="outlined"
            component={NavLink}
            to="/logout"
            sx={{ margin: theme.spacing(1, 1.5) }}
          >
            Çıkış
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
