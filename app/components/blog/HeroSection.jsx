'use client'
import { Box, Container, Typography } from '@mui/material'

export default function HeroSection() {
  return (
    <Box sx={{
      height: 561,
      width: '100%',
      backgroundImage: 'url(/blog-hero.png)', // Replace with your actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      {/* Dark Overlay */}
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)' }} />
      
      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h1" sx={{
          fontFamily: 'Inter',
          fontWeight: 'bold',
          fontSize: { xs: 48, md: 64 },
          color: '#FFFFFF',
          mb: 3
        }}>
          Insights & Resources
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: { xs: 18, md: 24 },
          color: '#FFFFFF',
          maxWidth: 900,
          mx: 'auto',
          lineHeight: 1.5
        }}>
          Expert insights on sports management, e-sports trends, and technology tips to help your institution thrive.
        </Typography>
      </Container>
    </Box>
  )
}