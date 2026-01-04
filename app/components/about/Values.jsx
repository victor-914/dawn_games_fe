'use client'
import { Box, Container, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/StarBorder'
import PublicIcon from '@mui/icons-material/Public'
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined'
import GroupsIcon from '@mui/icons-material/GroupsOutlined'
import SecurityIcon from '@mui/icons-material/SecurityOutlined'

const values = [
  {
    title: 'Excellence',
    description: 'We build software worthy of the champions you develop.',
    icon: <StarIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #F0B100 0%, #FF6B35 100%)',
  },
  {
    title: 'African Focus',
    description: 'Every feature is designed with African realities, regulations, and aspirations in mind.',
    icon: <PublicIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #00C853 0%, #00E676 100%)',
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our platform based on real usage and emerging needs.',
    icon: <LightbulbIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #00B0FF 0%, #00E5FF 100%)',
  },
  {
    title: 'Partnership',
    description: 'Your success is our success. We’re invested in your long-term growth.',
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #AA00FF 0%, #EA80FC 100%)',
  },
  {
    title: 'Accessibility',
    description: 'World-class technology should be available to institutions at every level.',
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF3D00 0%, #FF6E40 100%)',
  }
]

export default function Values() {
  return (
    <Box sx={{ bgcolor: '#0a1628', py: 15 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Our Values
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 20 },
            color: '#D1D5DC',
            maxWidth: 800,
            mx: 'auto'
          }}>
            These principles guide everything we do.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4
        }}>
          {values.map((item, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', sm: '48%', md: '30%' }, 
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px',
              border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 107, 53, 0.5)' }
            }}>
              <Box sx={{
                width: 80,
                height: 80,
                borderRadius: '16px',
                background: item.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}>
                {item.icon}
              </Box>
              <Typography variant="h3" sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: { xs: 24, md: 30 },
                color: '#FFFFFF',
                mb: 2
              }}>
                {item.title}
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: '#D1D5DC',
                lineHeight: 1.6
              }}>
                {item.description}
              </Typography>
            </Box>
          ))}
          
          <Box sx={{ 
            width: { xs: '100%', sm: '48%', md: '30%' }, 
            height: 0, 
            visibility: 'hidden' 
          }} />
        </Box>
      </Container>
    </Box>
  )
}