// app/membership/page.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar} from '@mui/material';


const MembershipPage = () => {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#00274C' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} sx={{ color: '#FFCB05' }}>
            BJJ Club
          </Typography>
          <Button href="/" color="inherit" sx={{ color: '#FFCB05' }}>Home</Button>
          <Button href="/gallery" color="inherit" sx={{ color: '#FFCB05' }}>Gallery</Button>
          <Button href="/membership" color="inherit" sx={{ color: '#FFCB05' }}>Membership</Button>
          <IconButton
            edge="end"
            color="inherit"
            sx={{ ml: 2 }}
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>
          Membership Page
        </Typography>
      </div>
    </>
  );
};

export default MembershipPage;