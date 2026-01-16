'use client'
import { Box, Container, Typography, Chip } from '@mui/material'
import { Whatshot } from '@mui/icons-material'

export default function PricingPage() {
  return (
    <Box>
      <Box sx={{
        height: { xs: 'auto', md: 492 }, width: '100%', py: { xs: 8, md: 0 },
        backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/pricing-hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <Container maxWidth="lg">
          <Chip
            label="💎 TRANSPARENT PRICING"
            sx={{
              bgcolor: 'rgba(0, 211, 242, 0.1)',
              color: '#00D3F2',
              border: '1px solid rgba(0, 211, 242, 0.3)',
              borderRadius: '50px',
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 600,
              height: 36,
              mb: 3,
              '& .MuiChip-label': { px: 2 }
            }}
          />
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: { xs: 36, md: 48 },
              color: '#FFFFFF',
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            CHOOSE YOUR POWER-UP
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: 16, md: 18 },
              color: '#99A1AF',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Flexible pricing for every stage of your journey. Start small, scale unlimited.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}