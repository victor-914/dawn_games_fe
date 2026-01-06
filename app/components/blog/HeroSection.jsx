'use client'
import { Box, Container, Typography } from '@mui/material'

export default function HeroSection() {
  return (
    <Box sx={{
      height: { xs: 'auto', md: 561 }, minHeight: { xs: '50vh', md: 561 }, width: '100%',
      backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/pricing-hero-bg.png)',
      backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: { xs: 10, md: 0 }
    }}>
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.0)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h1" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 36, md: 64 }, color: '#FFFFFF', mb: 3 }}>
          Insights & Resources
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 24 }, color: '#FFFFFF', maxWidth: 900, mx: 'auto', lineHeight: 1.5 }}>
          Expert insights on sports management, e-sports trends, and technology tips to help your institution thrive.
        </Typography>
      </Container>
    </Box>
  )
}