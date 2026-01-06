'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import { Public, Bolt, TrackChanges, RocketLaunch, TrendingUp } from '@mui/icons-material'

const features = [
  { title: 'Deep African Context Understanding', description: 'We build specifically for the African sports ecosystem. We understand football league dynamics, CAF regulations, local payment systems, and connectivity realities.', icon: <Public sx={{ fontSize: 32, color: '#FFFFFF' }} /> },
  { title: 'Multi-Vertical Integration', description: 'Sports management + e-sports + game development in one ecosystem. Your institution gets comprehensive tools, not fragmented solutions.', icon: <Bolt sx={{ fontSize: 32, color: '#FFFFFF' }} /> },
  { title: 'Technology Specialization', description: 'Purpose-built platforms, not generic software trying to be everything. Each module designed with expert understanding of that domain.', icon: <TrackChanges sx={{ fontSize: 32, color: '#FFFFFF' }} /> },
  { title: 'Backed by Cognix Group', description: "We're part of Africa's leading institutional technology incubator, giving us shared infrastructure, resources, and expertise.", icon: <RocketLaunch sx={{ fontSize: 32, color: '#FFFFFF' }} /> },
  { title: 'Growth Partnership', description: 'We scale as you scale. Whether you manage 50 athletes or 5,000, one facility or fifty, our systems grow with your ambition.', icon: <TrendingUp sx={{ fontSize: 32, color: '#FFFFFF' }} /> }
]

export default function More() {
  return (
    <Box sx={{
      width: '100%', minHeight: { xs: 'auto', md: 1539 },
      backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/about-more-bg.png)',
      backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
      py: { xs: 8, md: 15 }, display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }}>
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5, 11, 20, 0.85)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 2 }}>
            What Makes Us Different
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC', maxWidth: 800, mx: 'auto' }}>
            We're not just another software company. We're specialists in African sports technology.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {features.map((item, index) => (
            <Box key={index} sx={{
              background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
              borderRadius: '16px', border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: { xs: 3, md: 5 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 107, 53, 0.5)' }
            }}>
              <Box sx={{
                width: 64, height: 64, borderRadius: '16.4px',
                background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
              }}>
                {item.icon}
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 22, md: 30 }, color: '#FFFFFF', mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 15, md: 16 }, color: '#D1D5DC', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}