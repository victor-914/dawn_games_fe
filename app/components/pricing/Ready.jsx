'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'

export default function Ready() {
  return (
    <Box sx={{ bgcolor: '#050B14', py: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 800, fontSize: { xs: 36, md: 56 }, color: '#FFFFFF', lineHeight: 1.1, mb: 3 }}>
          READY TO{' '}
          <Box component="span" sx={{ background: 'linear-gradient(90deg, #00D3F2 0%, #AD46FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            TRANSFORM
          </Box>
          <br />
          YOUR ORGANIZATION?
        </Typography>
        
        <Typography sx={{ fontFamily: 'Inter', fontSize: 18, color: '#99A1AF', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Join the future of sports and gaming technology. Schedule a personalized demo today.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
          <Button href='https://www.calendly.com/cognix' target="_blank" sx={{ 
            background: 'linear-gradient(90deg, #00B8DB 0%, #AD46FF 100%)', 
            borderRadius: '8px', color: '#FFF', px: 4, py: 1.5, 
            fontFamily: 'Inter', fontWeight: 700, fontSize: 14, 
            boxShadow: '0 0 30px rgba(0, 184, 219, 0.4)',
            '&:hover': { opacity: 0.9, boxShadow: '0 0 40px rgba(173, 70, 255, 0.5)' } 
          }}>
            SCHEDULE DEMO
          </Button>
          
          <Button href='/contact' variant="outlined" sx={{ 
            borderColor: '#00B8DB', color: '#00B8DB', borderRadius: '8px', px: 4, py: 1.5, 
            fontFamily: 'Inter', fontWeight: 700, fontSize: 14, borderWidth: '1.5px',
            '&:hover': { borderColor: '#00D3F2', bgcolor: 'rgba(0, 184, 219, 0.1)', borderWidth: '1.5px' } 
          }}>
            TALK TO SALES
          </Button>

          <Button href='/faq' variant="outlined" sx={{ 
            borderColor: '#AD46FF', color: '#AD46FF', borderRadius: '8px', px: 4, py: 1.5, 
            fontFamily: 'Inter', fontWeight: 700, fontSize: 14, borderWidth: '1.5px',
            '&:hover': { borderColor: '#C27AFF', bgcolor: 'rgba(173, 70, 255, 0.1)', borderWidth: '1.5px' } 
          }}>
            VIEW FAQ
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}