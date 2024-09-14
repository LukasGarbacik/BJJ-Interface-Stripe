import Image from 'next/image';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, ImageList, ImageListItem} from '@mui/material';

const itemData = [
    { img: '/images/p1.png', title: 'Photo 1' },
    { img: '/images/p2.png', title: 'Photo 2' },
    { img: '/images/p3.png', title: 'Photo 3' },
    { img: '/images/p4.png', title: 'Photo 4' },
    { img: '/images/p2.png', title: 'Photo 5' },
    { img: '/images/p3.png', title: 'Photo 3' },
    { img: '/images/p4.png', title: 'Photo 4' },
    { img: '/images/p2.png', title: 'Photo 5' },
    { img: '/images/p3.png', title: 'Photo 6' },
    { img: '/images/p1.png', title: 'Photo 7' },
    { img: '/images/p4.png', title: 'Photo 8' },
    { img: '/images/p3.png', title: 'Photo 9' },
    { img: '/images/p4.png', title: 'Photo 8' },
    { img: '/images/p3.png', title: 'Photo 9' },
    { img: '/images/p1.png', title: 'Photo 1' },
    { img: '/images/p3.png', title: 'Photo 6' },
    { img: '/images/p1.png', title: 'Photo 7' },
    { img: '/images/p4.png', title: 'Photo 8' },
    { img: '/images/p3.png', title: 'Photo 9' },
    { img: '/images/p1.png', title: 'Photo 1' },
    { img: '/images/p2.png', title: 'Photo 2' },
    { img: '/images/p3.png', title: 'Photo 3' },
    { img: '/images/p4.png', title: 'Photo 4' },
    { img: '/images/p2.png', title: 'Photo 5' },
    { img: '/images/p3.png', title: 'Photo 6' },
    { img: '/images/p1.png', title: 'Photo 7' },
    { img: '/images/p4.png', title: 'Photo 8' },
    { img: '/images/p3.png', title: 'Photo 9' },
    { img: '/images/p4.png', title: 'Photo 8' },
    { img: '/images/p3.png', title: 'Photo 9' },
    { img: '/images/p1.png', title: 'Photo 1' },
  ]
    const GalleryPage = () => {
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
        <ImageList variant="masonry" cols={4} gap={6} sx={{ margin: 0 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={item.img}
                alt={item.title}
                width={200}   // Adjust this based on your layout needs
                height={200}  // Maintain aspect ratio if needed
                layout="responsive"  // Make the images responsive to the container
                loading="lazy"
                style={{ borderRadius: '8px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default GalleryPage;