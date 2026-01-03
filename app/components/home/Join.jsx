'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Join() {
  return (
    <Box sx={{
      width: '100%',
      height: 492.2,
      background: 'linear-gradient(180deg, #356EFF 0%, #5A89FF 50%, #4235FF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={4}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF'
          }}>
            Join the Movement
          </Typography>

          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#FFFFFF',
            maxWidth: 820,
            lineHeight: 1.6
          }}>
            Forward-thinking sports institutions across Africa are already transforming their operations with Dawn Games. Your competitors are gaining an edge. Don't get left behind.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mt={2}>
            <Button endIcon={<ArrowForwardIcon sx={{ color: '#356EFF' }} />} sx={{
              bgcolor: '#FFFFFF',
              width: 215.69,
              height: 56,
              borderRadius: '10px',
              color: '#3586FF',
              fontSize: 16,
              textTransform: 'none',
              fontWeight: 400,
              fontFamily: 'Inter',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
            }}>
              Schedule a Demo
            </Button>

            <Button sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              border: '1.6px solid #FFFFFF',
              width: 161.98,
              height: 59.2, 
              borderRadius: '10px',
              color: '#FFFFFF',
              fontSize: 16,
              textTransform: 'none',
              fontWeight: 400,
              fontFamily: 'Inter',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }
            }}>
              Contact Sales
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}