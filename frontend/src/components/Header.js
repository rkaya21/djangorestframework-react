import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="white" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            RecepBlog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
