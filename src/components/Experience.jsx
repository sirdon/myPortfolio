import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { experiences } from '../data';
import ThreeDCard from './ThreeDCard';

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 8, bgcolor: 'background.default' }}>
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
          Professional Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ThreeDCard
                title={exp.title}
                subtitle={`${exp.company} | ${exp.duration} | ${exp.location}`}
                content={exp.description}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  <strong>Technologies:</strong> {exp.technologies}
                </Typography>
              </ThreeDCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;