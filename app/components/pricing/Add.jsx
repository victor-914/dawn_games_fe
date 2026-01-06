'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import { Circle, Check } from '@mui/icons-material'

const addOns = ['Custom feature development', 'Additional user licenses', 'Enhanced data storage', 'Premium support packages', 'Training and onboarding', 'White-label branding']
const included = ['Mobile money payment integration', 'Offline-first functionality', 'Regular updates and improvements', 'Data backup and security', 'Migration assistance', '99.9% uptime guarantee']

export default function Add() {
  return (
    <Box sx={{
      width: '100%', minHeight: { xs: 'auto', md: 613.6 },
      background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 10 }
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          Add-Ons & Included Features
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
          <Box sx={{
            width: { xs: '100%', md: 551.2 }, minHeight: 349.6,
            background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)', borderRadius: '24px',
            border: '0.8px solid rgba(255, 107, 53, 0.2)', p: { xs: 4, md: 5 },
            display: 'flex', flexDirection: 'column', justifyContent: 'center'
          }}>
            <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 30 }, color: '#FF6B35', mb: 4 }}>
              Available Add-Ons
            </Typography>
            <Stack spacing={2}>
              {addOns.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <Circle sx={{ color: '#FF6B35', fontSize: 8 }} />
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC' }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{
            width: { xs: '100%', md: 551.2 }, minHeight: 349.6,
            background: 'linear-gradient(180deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%)',
            borderRadius: '24px', border: '0.8px solid rgba(255, 107, 53, 0.2)', p: { xs: 4, md: 5 },
            display: 'flex', flexDirection: 'column', justifyContent: 'center'
          }}>
            <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 30 }, color: '#FF6B35', mb: 4 }}>
              Included in All Plans
            </Typography>
            <Stack spacing={2}>
              {included.map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <Check sx={{ color: '#FF6B35', fontSize: 20 }} />
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC' }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}