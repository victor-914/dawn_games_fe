'use client'
import { Box, Container, Typography, Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

export default function JoinUs() {
  return (
    <Box sx={{
      bgcolor: '#FF6B35', py: { xs: 8, md: 10 }, width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 3 }}>
          Ready to Join Us?
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: 'rgba(255, 255, 255, 0.9)', maxWidth: 700, mx: 'auto', lineHeight: 1.6, mb: 5 }}>
          Let's transform African sports together. Schedule a demo and see how we can help your institution.
        </Typography>
        <Button endIcon={<ArrowForward sx={{ color: '#FF6B35', width: 20, height: 20 }} />} sx={{
          bgcolor: '#FFFFFF', width: { xs: '100%', sm: 171.48 }, height: 56, borderRadius: '10px',
          color: '#FF6B35', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, textTransform: 'none',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          Get Started
        </Button>
      </Container>
    </Box>
  )
}