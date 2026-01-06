'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

export default function Ask() {
  return (
    <Box sx={{
      width: '100%', background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 50%, #FF6B35 100%)',
      py: { xs: 8, md: 12 }, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
    }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF' }}>
            Still Have Questions?
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF', maxWidth: 600, mb: 4 }}>
            Can't find what you're looking for? Our team is here to help.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
            <Button endIcon={<ArrowForward sx={{ width: 20, height: 20 }} />} sx={{
              bgcolor: '#FFFFFF', width: { xs: '100%', sm: 'auto' }, height: 56, px: 4, borderRadius: '10px',
              color: '#FF6B35', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400,
              boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
            }}>
              Contact Support
            </Button>
            <Button sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)', border: '1.6px solid #FFFFFF', width: { xs: '100%', sm: 'auto' },
              height: 56, px: 4, borderRadius: '10px', color: '#FFFFFF', textTransform: 'none',
              fontSize: 16, fontFamily: 'Inter', fontWeight: 400, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
            }}>
              Schedule Call
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}