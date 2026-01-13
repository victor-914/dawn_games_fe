'use client'
import { Box, Container, Typography } from '@mui/material'
import { Psychology, Language, Bolt, Shield, Rocket, People } from '@mui/icons-material'

const reasons = [
  { t: 'AI-Powered', d: 'Advanced machine learning for video analysis, performance prediction, and player development', i: <Psychology sx={{ fontSize: 32 }} />, c: '#00D3F2' },
  { t: 'Africa-Focused', d: 'Designed for local payment methods, languages, and market conditions', i: <Language sx={{ fontSize: 32 }} />, c: '#C27AFF' },
  { t: 'All-in-One Platform', d: 'Sports, esports, and game development in a single integrated ecosystem', i: <Bolt sx={{ fontSize: 32 }} />, c: '#FB64B6' },
  { t: 'Enterprise-Grade', d: '99.9% uptime SLA, advanced security, and 24/7 support for premium plans', i: <Shield sx={{ fontSize: 32 }} />, c: '#00D3F2' },
  { t: 'Rapid Deployment', d: 'Fully operational in 7-14 days with complete data migration and training', i: <Rocket sx={{ fontSize: 32 }} />, c: '#C27AFF' },
  { t: 'Dedicated Support', d: 'Local team in Nigeria with in-person training and on-site event support', i: <People sx={{ fontSize: 32 }} />, c: '#FB64B6' }
]

export default function WhyDawnGames() {
  return (
    <Box sx={{width: '100%', bgcolor: '#0a1628', py: { xs: 8} }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 28, md: 36 }, background: 'linear-gradient(90deg, #00D3F2 0%, #FB64B6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
            WHY DAWN GAMES?
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 18 }, color: '#99A1AF', maxWidth: 700, mx: 'auto' }}>
            Built specifically for African markets with world-class technology
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {reasons.map((r, i) => (
            <Box key={i} sx={{ border: `0.8px solid ${r.c}4D`, borderRadius: '14px', p: 3, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 8px 24px ${r.c}4D` } }}>
              <Box sx={{ width: 56, height: 56, borderRadius: '14px', bgcolor: `${r.c}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, color: r.c }}>
                {r.i}
              </Box>
              <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 20, color: '#fff', mb: 1.5 }}>{r.t}</Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#99A1AF', lineHeight: 1.5 }}>{r.d}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}