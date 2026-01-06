'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

export default function HeroSection() {
  return (
    <Box sx={{
      height: 494,
      width: '100%',
      backgroundImage: 'url(/faq-hero-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5, 11, 20, 0.7)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" spacing={3}>
          
          {/* Icon Box */}
          <Box sx={{
            width: 80,
            height: 80,
            background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Box shadow FF6B35 50% opacity approximation
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)', 
            mb: 2
          }}>
            <HelpOutlineIcon sx={{ color: '#FFFFFF', fontSize: 40 }} />
          </Box>

          {/* Title */}
          <Typography variant="h1" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF',
            lineHeight: 1.2
          }}>
            Frequently Asked Questions
          </Typography>

          {/* Subtitle */}
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 24 },
            color: '#D1D5DC',
            maxWidth: 700,
            lineHeight: 1.5
          }}>
            Find answers to common questions about Dawn Games
          </Typography>

        </Stack>
      </Container>
    </Box>
  )
}