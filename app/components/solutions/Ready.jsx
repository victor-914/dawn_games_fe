'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'

export default function Ready() {
  return (
    <Box sx={{ bgcolor: '#0a1628', py: { xs: 6}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: { xs: '90%', md: 1134.4 }, background: 'linear-gradient(135deg, rgba(0, 184, 219, 0.1) 0%, rgba(173, 70, 255, 0.1) 50%, rgba(246, 51, 154, 0.1) 100%)', border: '0.8px solid rgba(0, 184, 219, 0.3)', borderRadius: '16px', py: { xs: 6, md: 8 }, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 2 }}>
            Ready to Transform Your Organization?
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: 18, md: 20 }, color: '#D1D5DC', mb: 4, maxWidth: 642, mx: 'auto' }}>
            See Dawn Games in action with a personalized demo customized to your needs
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button href="/pricing" sx={{ border: '1.6px solid #00B8DB', borderRadius: '10px', width: { xs: '100%', sm: 'auto' }, px: 4, py: 1.5, fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#00D3F2', textTransform: 'none', bgcolor: 'transparent', '&:hover': { bgcolor: 'rgba(0, 184, 219, 0.1)', border: '1.6px solid #00B8DB' } }}>
              View Pricing Plans
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}