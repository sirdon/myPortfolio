import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger } from '@mui/material';
import { personalData } from '../data';

const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        color: trigger ? 'text.primary' : 'white',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          {personalData.name}
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button 
              key={item.id} 
              href={`#${item.id}`} 
              sx={{ 
                color: 'inherit',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;