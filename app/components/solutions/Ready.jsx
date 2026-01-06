'use client'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { ArrowForward, EmojiEvents, SportsEsports, Code } from '@mui/icons-material'

export default function Ready() {
  return (
    <Box>
      <Box sx={{
        height: { xs: 'auto', md: 459.7 }, width: '100%', py: { xs: 8, md: 5 },
        background: 'linear-gradient(180deg, #048E09 0%, #138703 50%, #034308 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 1 }}>
              Ready to See It in Action?
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF', maxWidth: 800, lineHeight: 1.5, mb: 3 }}>
              Schedule a personalized demo and discover how Dawn Games can transform your operations.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
              <Button endIcon={<ArrowForward sx={{ color: '#0B6405', width: 20, height: 20 }} />} sx={{
                bgcolor: '#FFFFFF', width: { xs: '100%', sm: 203.16 }, height: 56, borderRadius: '10px',
                color: '#0B6405', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, textTransform: 'none',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
              }}>
                Schedule Demo
              </Button>
              <Button sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)', border: '1.6px solid #FFFFFF',
                width: { xs: '100%', sm: 153.48 }, height: 56, borderRadius: '10px',
                color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, textTransform: 'none',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
              }}>
                View Pricing
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#050B14', py: 3 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center" spacing={2} alignItems="center">
            <Button startIcon={<EmojiEvents sx={{ color: '#FFFFFF', width: 24, height: 24 }} />} sx={{
              background: 'linear-gradient(180deg, #0B6405 0%, #0B6506 100%)', borderRadius: '10px',
              width: { xs: '100%', md: 270.5 }, height: 48, color: '#FFFFFF', fontSize: 16,
              fontFamily: 'Inter', textTransform: 'none', boxShadow: '0px 4px 20px rgba(11, 100, 5, 0.5)',
              '&:hover': { background: 'linear-gradient(180deg, #0C7506 0%, #0C7607 100%)' }
            }}>
              Sports Clubs & Academies
            </Button>
            <Button startIcon={<SportsEsports sx={{ color: '#99A1AF', width: 24, height: 24 }} />} sx={{
              bgcolor: '#1A2744', borderRadius: '10px', px: 3, height: 48, width: { xs: '100%', md: 'auto' },
              color: '#99A1AF', fontSize: 16, fontFamily: 'Inter', textTransform: 'none',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }
            }}>
              E-Sports Organizations
            </Button>
            <Button startIcon={<Code sx={{ color: '#99A1AF', width: 24, height: 24 }} />} sx={{
              bgcolor: '#1A2744', borderRadius: '10px', px: 3, height: 48, width: { xs: '100%', md: 'auto' },
              color: '#99A1AF', fontSize: 16, fontFamily: 'Inter', textTransform: 'none',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }
            }}>
              Game Developers
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}