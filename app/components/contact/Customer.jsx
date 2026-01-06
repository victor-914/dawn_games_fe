'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

export default function Customer() {
  return (
    <Box sx={{
      width: '100%',
      // Linear gradient: 0% 550062 -> 50% FF35F2 -> 100% 70055C
      background: 'linear-gradient(180deg, #550062 0%, #FF35F2 50%, #70055C 100%)',
      py: 12,
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
            Existing Customer?
          </Typography>
          
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#FFFFFF',
            maxWidth: 600,
            mb: 4
          }}>
            Need help with your account or have technical questions?
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {/* Primary Button: Email Support */}
            <Button
              startIcon={<EmailOutlinedIcon sx={{ width: 20, height: 20 }} />}
              sx={{
                bgcolor: '#FFFFFF',
                width: { xs: '100%', sm: 'auto' },
                height: 56,
                px: 4,
                borderRadius: '10px',
                color: '#FF35C2', // Pink text
                textTransform: 'none',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: 400,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', // Black 10%
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                '& .MuiButton-startIcon': { color: '#FF35C2' } // Pink Icon
              }}
            >
              Email Support
            </Button>

            {/* Secondary Button: Visit Help Center */}
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
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
              }}
            >
              Visit Help Center
            </Button>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}