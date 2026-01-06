'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

export default function Custom() {
  return (
    <Box sx={{
      minHeight: 456.5, width: '100%',
      background: 'linear-gradient(180deg, #860788 0%, #FF5ADB 50%, #971294 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      py: { xs: 8, md: 0 }
    }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 1 }}>
            Need a Custom Quote?
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF', maxWidth: 700, lineHeight: 1.5, mb: 4 }}>
            Every institution is unique. Let's discuss a pricing plan tailored to your specific needs.
          </Typography>
          <Button endIcon={<ArrowForward sx={{ color: '#F400F0', width: 20, height: 20 }} />} sx={{
            bgcolor: '#FFFFFF', width: { xs: '100%', sm: 186.78 }, height: 56, borderRadius: '10px',
            color: '#F400F0', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, textTransform: 'none',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)' }
          }}>
            Contact Sales
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}