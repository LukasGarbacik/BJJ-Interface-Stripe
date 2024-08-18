'use client'

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper, IconButton, Avatar, Menu, MenuItem, TextField } from '@mui/material';
import getStripe from '../../utils/get-stripe';

const MembershipPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [email, setEmail] = useState('');

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'profile-menu';

  const handlePayment = async () => {
    try {
      const stripe = await getStripe();
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the email with the request body
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

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
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      <Grid container sx={{ height: 'calc(100vh - 64px)', overflow: 'hidden', alignItems: 'center', bgcolor: 'grey' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
          <Box
            component="img"
            src="/images/gi.png" // Placeholder for your BJJ Gi image
            alt="BJJ Gi"
            sx={{
              width: '80%',
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ pr: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ p: 4, width: '70%', textAlign: 'center', mb: 20,  boxShadow: '14px 14px 8px rgba(49, 54, 56, 0.6)' }}>
            <Typography variant="h2" gutterBottom>
              5$ Semester Membership
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 4, width: '80%', textAlign: 'center' }}>
            <TextField 
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth sx={{ bgcolor: '#FFCB05', color: '#00274C' }} onClick={handlePayment}>
              Pay Here
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MembershipPage;