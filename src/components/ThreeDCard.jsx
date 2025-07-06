import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ThreeDCard = ({ title, subtitle, content, children }) => {
  return (
    <Card 
      sx={{
        minHeight: '300px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px) rotateX(5deg)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #3f51b5 0%, #f50057 100%)'
        }
      }}
      className="card-3d"
    >
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        <Box sx={{ mt: 2 }}>
          {content && (
            <Typography variant="body1" paragraph>
              {content}
            </Typography>
          )}
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ThreeDCard;