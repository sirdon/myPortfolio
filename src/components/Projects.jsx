import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { projects } from '../data';
import ThreeDCard from './ThreeDCard';

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.default' }}>
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
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ThreeDCard
                title={project.title}
                content={project.description}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
              </ThreeDCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;