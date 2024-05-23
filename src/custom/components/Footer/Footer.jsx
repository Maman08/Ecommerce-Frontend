import React from 'react';
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <div>
      <Grid container sx={{ bgcolor: "black", color: "white", py: 3 }} className='text-center mt-10'>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>About Us</Typography>
          <div><Button variant="text" color="inherit">Our Story</Button></div>
          <div><Button variant="text" color="inherit">Mission</Button></div>
          <div><Button variant="text" color="inherit">Team</Button></div>
          <div><Button variant="text" color="inherit">Careers</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Services</Typography>
          <div><Button variant="text" color="inherit">Consulting</Button></div>
          <div><Button variant="text" color="inherit">Development</Button></div>
          <div><Button variant="text" color="inherit">Design</Button></div>
          <div><Button variant="text" color="inherit">Support</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Resources</Typography>
          <div><Button variant="text" color="inherit">Blog</Button></div>
          <div><Button variant="text" color="inherit">Case Studies</Button></div>
          <div><Button variant="text" color="inherit">E-books</Button></div>
          <div><Button variant="text" color="inherit">Webinars</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Contact</Typography>
          <div><Button variant="text" color="inherit">Contact Us</Button></div>
          <div><Button variant="text" color="inherit">Support</Button></div>
          <div><Button variant="text" color="inherit">FAQs</Button></div>
          <div><Button variant="text" color="inherit">Live Chat</Button></div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ mt: 3 }}>© {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
