'use client'
import { Box, Container, Typography } from '@mui/material'
import { TrackChanges, TrendingUp, WorkspacePremium } from '@mui/icons-material'

const reasons = [
  { title: 'Purpose-Built for Africa', description: 'Every feature designed with African sports ecosystem in mind. No generic solutions.', icon: <TrackChanges sx={{ fontSize: 40, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)' },
  { title: 'Scales With You', description: 'From 50 athletes to 5,000. One facility to fifty. We grow as you grow.', icon: <TrendingUp sx={{ fontSize: 40, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)' },
  { title: 'Enterprise Grade', description: 'World-class technology backed by Cognix Group. Reliable, secure, and powerful.', icon: <WorkspacePremium sx={{ fontSize: 40, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)' }
]

export default function Choose() {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 2 }}>
            Why Choose Dawn Games?
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC', maxWidth: 800, mx: 'auto' }}>
            We're not just a software provider—we're your partner in excellence.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {reasons.map((item, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 335.6 }, height: { xs: 'auto', md: 335.6 },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px', border: '0.8px solid rgba(255, 107, 53, 0.2)', p: 4,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
              transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 107, 53, 0.5)' }
            }}>
              <Box sx={{
                width: 80, height: 80, borderRadius: '16px', background: item.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4,
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
              }}>
                {item.icon}
              </Box>
              <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 24 }, color: '#FFFFFF', mb: 2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}