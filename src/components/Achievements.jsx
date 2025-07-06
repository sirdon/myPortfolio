import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { achievements } from '../data';
import StarIcon from '@mui/icons-material/Star';

const Achievements = () => {
  return (
    <Box id="achievements" sx={{ py: 8, bgcolor: 'background.default' }}>
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
          Achievements
        </Typography>
        <List sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2
        }}>
          {achievements.map((achievement, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                bgcolor: 'background.paper',
                borderRadius: '8px',
                boxShadow: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}
            >
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={achievement} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Achievements;