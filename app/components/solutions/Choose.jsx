'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const reasons = [
  {
    title: 'Purpose-Built for Africa',
    description: 'Every feature designed with African sports ecosystem in mind. No generic solutions.',
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)'
  },
  {
    title: 'Scales With You',
    description: 'From 50 athletes to 5,000. One facility to fifty. We grow as you grow.',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)'
  },
  {
    title: 'Enterprise Grade',
    description: 'World-class technology backed by Cognix Group. Reliable, secure, and powerful.',
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)'
  }
]

export default function Choose() {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)', py: 15 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 32, md: 48 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Why Choose Dawn Games?
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 20 },
            color: '#D1D5DC',
            maxWidth: 800,
            mx: 'auto'
          }}>
            We're not just a software provider—we're your partner in excellence.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4 
        }}>
          {reasons.map((item, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 335.6 },
              height: { md: 335.6 },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px',
              border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
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
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
              }}>
                {item.icon}
              </Box>

              <Typography variant="h3" sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 24,
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
        </Box>

      </Container>
    </Box>
  )
}