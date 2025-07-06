import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { personalData } from '../data';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box 
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(30deg)',
          zIndex: 1,
        }
      }}
    >
      <Box 
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 20px',
        }}
        className="layer-3"
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
          className="float-animation"
        >
          {personalData.name}
        </Typography>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          {personalData.designation}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}
        >
          {personalData.description}
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          sx={{
            borderRadius: '50px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            fontWeight: 600,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transform: 'translateZ(20px)',
            '&:hover': {
              transform: 'translateY(-5px) translateZ(20px)'
            }
          }}
          href="#contact"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;