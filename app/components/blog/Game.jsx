'use client'
import { Box, Container, Typography, Button, Stack, InputBase } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

export default function Game() {
  return (
    <Box sx={{
      width: '100%',
      // Height spec: 566px
      minHeight: 566, 
      // Gradient: 0% BC9809 -> 50% F8D651 -> 100% 8F800C
      background: 'linear-gradient(180deg, #BC9809 0%, #F8D651 50%, #8F800C 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      py: 8
    }}>
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          
          {/* --- Icon --- */}
          <Box sx={{
            width: 80,
            height: 80,
            borderRadius: '16px',
            bgcolor: 'rgba(255, 255, 255, 0.2)', // White 20%
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            <CalendarTodayIcon sx={{ color: '#FFFFFF', width: 40, height: 40 }} />
          </Box>

          {/* --- Text Content --- */}
          <Box sx={{ maxWidth: 800 }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: { xs: 32, md: 48 },
              color: '#FFFFFF',
              mb: 2
            }}>
              Stay Ahead of the Game
            </Typography>
            
            <Typography sx={{
              fontFamily: 'Inter',
              fontSize: { xs: 16, md: 20 },
              color: '#FFFFFF',
              lineHeight: 1.5
            }}>
              Get weekly insights on sports management, e-sports trends, and technology tips delivered to your inbox.
            </Typography>
          </Box>

          {/* --- Form Section --- */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={2} 
            alignItems="center" 
            justifyContent="center"
            sx={{ width: '100%', mt: 2 }}
          >
            {/* Input Field */}
            <InputBase 
              placeholder="Enter your email"
              sx={{
                width: { xs: '100%', md: 458.35 },
                height: 59.2,
                bgcolor: 'rgba(255, 255, 255, 0.2)', // White 20%
                border: '1.6px solid #FFFFFF', // Inside stroke
                borderRadius: '10px',
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontSize: 16,
                px: 3,
                '& ::placeholder': {
                  color: '#FFFFFF',
                  opacity: 1
                }
              }}
            />

            {/* Subscribe Button */}
            <Button
              endIcon={<ArrowForwardIcon sx={{ color: '#DAB900', width: 20, height: 20 }} />}
              sx={{
                width: { xs: '100%', md: 197.65 },
                height: 59.2,
                bgcolor: '#FFFFFF',
                borderRadius: '10px',
                color: '#DAB900',
                textTransform: 'none',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: 400,
                // Box shadows from specs
                boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
                '&:hover': { 
                  bgcolor: 'rgba(255, 255, 255, 0.9)' 
                }
              }}
            >
              Subscribe Now
            </Button>
          </Stack>

          {/* --- Footer Text --- */}
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: 16,
            color: '#FFFFFF',
            opacity: 0.9,
            pt: 1
          }}>
            Join 5,000+ sports professionals staying informed
          </Typography>

        </Stack>
      </Container>
    </Box>
  )
}