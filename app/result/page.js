'use client'

import React from 'react';
import {Typography, Box, Container, CircularProgress, Button, AppBar, Toolbar, Paper, IconButton, Avatar} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';


const ResultPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const session_id = searchParams.get('session_id')
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState(null)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        const fetchCheckoutSession = async () => {
          if (!session_id) return
          try {
            const res = await fetch(`/api/checkout_sessions?session_id=${session_id}`)
            const sessionData = await res.json()
            if (res.ok) {
              setSession(sessionData)
            } else {
              setError(sessionData.error)
            }
          } catch (err) {
            <>
            <Typography variant="h4">Payment failed</Typography>
            <Box sx={{mt: 2}}>
              <Typography variant="body1">
                Your payment was not successful. Please try again.
              </Typography>
            </Box>
            </>
          } finally {
            setLoading(false)
          }
        }
        fetchCheckoutSession()
      }, [session_id])

      if (loading) {
        return (
          <Container maxWidth="sm" sx={{textAlign: 'center', mt: 4}}>
            <CircularProgress />
            <Typography variant="h6" sx={{mt: 2}}>
              Loading...
            </Typography>
          </Container>
        )
      }

      if (error) {
        return (
            <Box
            sx={{
                bgcolor: 'grey',
                height: '100vh', // Make the Box take up the full viewport height
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'flex-end', // Start aligning from the bottom
                pb: '75vh' // Push the content up by 75% of the screen height
            }}
        >
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
    
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="white">
                    Payment Failed
                </Typography>
                <Typography variant="body1" color="white">
                    Your payment was not successful. Please try again.
                </Typography>
                <Button> </Button>
            </Container>
        </Box>
        )
      }
      /*
      return (
        <Container maxWidth="sm" sx={{textAlign: 'center', mt: 4}}>
            {session.payment_status === 'paid' ? (
            <>
             <Typography variant="h4">Thank you for your purchase!</Typography>
                <Box sx={{mt: 2}}>
                    <Typography variant="h6">Session ID: {session_id}</Typography>
                    <Typography variant="body1">
                        We have received your payment. You will receive an email with the
                        order details shortly.
                    </Typography>
                 </Box>
            </>
            ) : (
            <>
            <Typography variant="h4">Payment failed</Typography>
            <Box sx={{mt: 2}}>
              <Typography variant="body1">
                Your payment was not successful. Please try again.
              </Typography>
            </Box>
            </>
        )}
        </Container>
    )
    */
   return(
    <>
    <AppBar position="static" sx={{ bgcolor: '#00274C' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} sx={{ color: '#FFCB05' }}>
            BJJ Club
          </Typography>
          <Button href="/" color="inherit" sx={{ color: '#FFCB05' }}>Home</Button>
          <Button href="/gallery" color="inherit" sx={{ color: '#FFCB05' }}>Gallery</Button>
          <Button  href="/membership" color="inherit" sx={{ color: '#FFCB05' }}>Membership</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
        bgcolor: 'grey',
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        }}
    >
        <Container sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: '70%',
                    textAlign: 'center',
                    boxShadow: '14px 14px 8px rgba(150,0,0, 0.6)',
                    mb: '230px'
                }}
            >
                <Typography variant="h2">
                    Payment Failed
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Please Try Again
                </Typography>
            </Paper>
        </Container>
    </Box>
    </>
   )
}


  export default ResultPage;
