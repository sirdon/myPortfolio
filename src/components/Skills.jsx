import React from 'react';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';
import { skills } from '../data';

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.paper' }}>
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
          My Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ 
                p: 3, 
                borderRadius: '12px',
                bgcolor: 'background.default',
                boxShadow: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4
                }
              }}>
                <Typography variant="h6" gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level} 
                  sx={{ 
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      background: 'linear-gradient(90deg, #3f51b5 0%, #f50057 100%)'
                    }
                  }} 
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'right' }}>
                  {skill.level}%
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;