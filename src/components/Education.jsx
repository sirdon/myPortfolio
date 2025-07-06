import React from 'react';
import { Box, Typography } from '@mui/material';
import { education } from '../data';
import ThreeDCard from './ThreeDCard';

const Education = () => {
  return (
    <Box id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
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
          Education
        </Typography>
        {education.map((edu, index) => (
          <ThreeDCard
            key={index}
            title={edu.degree}
            subtitle={`${edu.institution} | ${edu.duration} | ${edu.location}`}
            content={edu.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Education;