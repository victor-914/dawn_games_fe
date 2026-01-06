'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Ask() {
  return (
    <Box sx={{
      width: '100%',
      // Gradient based on specs: Darker Orange -> Lighter Orange -> Darker Orange
      background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 50%, #FF6B35 100%)',
      py: 12, // Generous padding to match the spacious look
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 28, md: 36 },
            color: '#FFFFFF'
          }}>
            Still Have Questions?
          </Typography>
          
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#FFFFFF',
            maxWidth: 600,
            mb: 4
          }}>
            Can't find what you're looking for? Our team is here to help.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {/* Primary Button */}
            <Button
              endIcon={<ArrowForwardIcon sx={{ width: 20, height: 20 }} />}
              sx={{
                bgcolor: '#FFFFFF',
                width: { xs: '100%', sm: 'auto' },
                height: 56,
                px: 4,
                borderRadius: '10px',
                color: '#FF6B35',
                textTransform: 'none',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: 400,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', // Subtle shadow based on visual
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
              }}
            >
              Contact Support
            </Button>

            {/* Secondary Button */}
            <Button
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)', // White 20%
                border: '1.6px solid #FFFFFF', // Inside stroke
                width: { xs: '100%', sm: 'auto' },
                height: 56,
                px: 4,
                borderRadius: '10px',
                color: '#FFFFFF',
                textTransform: 'none',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: 400,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
              }}
            >
              Schedule Call
            </Button>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}