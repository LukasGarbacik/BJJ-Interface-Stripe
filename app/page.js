'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import getStripe from '@/utils/get-stripe';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'profile-menu';

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#00274C' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} sx={{ color: '#FFCB05' }}>
            BJJ Club
          </Typography>
          <Button color="inherit" sx={{ color: '#FFCB05' }}>Home</Button>
          <Button href="/gallery" color="inherit" sx={{ color: '#FFCB05' }}>Gallery</Button>
          <Button  href="/membership" color="inherit" sx={{ color: '#FFCB05' }}>Membership</Button>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
            sx={{ ml: 2 }}
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link href="/sign-in" passHref>
            Login
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/sign-up" passHref>
            SignUp
          </Link>
        </MenuItem>
      </Menu>

      <Grid container sx={{ overflow: 'hidden', bgcolor:'grey'}}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
          <Box
            component="div"
            sx={{
              width: '90%',
              height: '90%',
              borderRadius: '8px',
              boxShadow: 3,
              border: 5, 
              borderColor: '#FFCB05',
              overflow: 'hidden',
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="/images/bjjHome.png"
              alt="BJJ"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            pr: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            mt: 14
          }}
        >
          <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'center' }}>
            <Grid item xs={11}>
              <Paper elevation={8} sx={{ p: 2, bgcolor: '#f0f0f0', boxShadow: '14px 14px 8px rgba(49, 54, 56, 0.6)' }}>
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                  Club Summary
                </Typography>
                <Typography variant="body1">
                  The Michigan Brazilian Jiu-Jitsu Club welcomes all Michigan students to join our inclusive community. Whether you&#39;re a seasoned practitioner or just starting out, our club is a space for everyone to learn, grow, and have fun. There&#39;s no pressure to attend every session—just drop by whenever you can!
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={11}>
              <Paper elevation={8} sx={{ p: 2, bgcolor: '#f0f0f0', boxShadow: '14px 14px 8px rgba(49, 54, 56, 0.6)' }}>
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                  Meeting Times
                </Typography>
                <Typography variant="body1">
                  We meet every Monday and Wednesday for a 2-hour session from 6 PM to 8 PM. It&#39;s a perfect opportunity to sharpen your skills, learn new techniques, and roll with fellow BJJ enthusiasts.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={11}>
              <Paper elevation={8} sx={{ p: 2, bgcolor: '#f0f0f0', boxShadow: '14px 14px 8px rgba(49, 54, 56, 0.6)' }}>
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                  Contact Information
                </Typography>
                <Typography variant="body1">
                  Have questions or want to learn more? Reach out to us at <a href="mailto:example@gmail.com">example@gmail.com</a>, or connect with us on Facebook at ######.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: '100%', 
          textAlign: 'center', 
          py: 3,
          position: 'relative', 
          bottom: 0,
          borderTop: '1px solid white'
        }}
      >
        <Typography>
          &copy; Version 1.0 
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
