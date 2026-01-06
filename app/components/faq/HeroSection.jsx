'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import { HelpOutline } from '@mui/icons-material'

export default function HeroSection() {
  return (
    <Box sx={{
      height: { xs: 'auto', md: 494 }, minHeight: { xs: '50vh', md: 494 }, width: '100%',
      backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/faq-hero-bg.png)',
      backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: { xs: 10, md: 0 }
    }}>
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5, 11, 20, 0.7)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" spacing={3}>
          <Box sx={{
            width: 80, height: 80, background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)', mb: 2
          }}>
            <HelpOutline sx={{ color: '#FFFFFF', fontSize: 40 }} />
          </Box>
          <Typography variant="h1" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', lineHeight: 1.2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 24 }, color: '#D1D5DC', maxWidth: 700, lineHeight: 1.5 }}>
            Find answers to common questions about Dawn Games
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}