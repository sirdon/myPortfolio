import { Box, Typography, Avatar, useTheme } from '@mui/material';
import { personalData } from '../data';
const image = require('../images/profile.jpeg'); // Adjust the path as necessary
const About = () => {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
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
          About Me
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6
        }}>
          {/* Photo Section */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            minWidth: 300
          }}>
            <Avatar
              src={image}
              alt={personalData.name}
              sx={{ 
                width: 280, 
                height: 280,
                boxShadow: 3,
                border: `4px solid ${theme.palette.primary.main}`,
                transform: 'rotate(-3deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.05)'
                }
              }}
            />
          </Box>
          
          {/* Text Section */}
          <Box sx={{
            flex: 2,
            p: 4,
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: 2,
            transform: 'translateZ(20px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 4,
              transform: 'translateZ(20px) translateY(-5px)'
            }
          }}>
            <Typography 
              variant="h5" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 3
              }}
            >
              Who Am I?
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem', 
              mb: 2,
              lineHeight: 1.8
            }}>
              {personalData.description}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}>
              I specialize in building full-stack applications with modern technologies. 
              With expertise in both frontend and backend development, I create seamless 
              user experiences powered by robust architectures.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2, 
              mt: 4,
              '& > *': {
                px: 3,
                py: 1,
                borderRadius: '20px',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                fontWeight: 500
              }
            }}>
              <Typography variant="body2">Full Stack Development</Typography>
              <Typography variant="body2">Web Applications</Typography>
              <Typography variant="body2">Cloud Solutions</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;