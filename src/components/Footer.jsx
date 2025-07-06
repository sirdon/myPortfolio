import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      py: 4,
      bgcolor: 'primary.main',
      color: 'white',
      textAlign: 'center'
    }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Amit Kumar. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Built with React and Material-UI
      </Typography>
    </Box>
  );
};

export default Footer;