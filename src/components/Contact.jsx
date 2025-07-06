import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { personalData } from '../data';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Box className="container">
        <Typography variant="h4" component="h2" sx={{ 
          textAlign: 'center', 
          mb: 6,
          fontWeight: 700,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #3f51b5 0%, #f50057 100%)',
            borderRadius: '2px'
          }
        }}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  alignSelf: 'flex-start',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              bgcolor: 'background.default',
              p: 4,
              borderRadius: '12px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3
              }
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> {personalData.email}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Phone:</strong> {personalData.phone}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Address:</strong> {personalData.address}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Link href={personalData.github} target="_blank" rel="noopener">
                  <Button variant="outlined">GitHub</Button>
                </Link>
                <Link href={personalData.linkedIn} target="_blank" rel="noopener">
                  <Button variant="outlined">LinkedIn</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;