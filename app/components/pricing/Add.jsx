'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'

const items = [
  { t: 'Cognitive Training Expansion', p: '$50', s: '/mo', d: 'Per additional 10 athletes beyond plan limits', c: '#00D3F2' },
  { t: 'Video Analysis Hours', p: '$100', s: '/10hrs', d: 'Extra video processing for sports clubs', c: '#C27AFF' },
  { t: 'Premium Streaming Production', p: '$500', s: '/mo', d: 'Dedicated producer & custom overlays', c: '#FB64B6' },
  { t: 'Marketing Campaigns', p: '$1-5K', s: '/campaign', d: 'Full-service marketing & influencer partnerships', c: '#FDC700' },
  { t: 'On-Site Training', p: '$2,000', s: '/visit', d: 'In-person onboarding & event support', c: '#FF8904' },
  { t: 'Data Migration', p: 'Free', s: '', d: 'Pro & Enterprise plans. $500 for Starter', c: '#05DF72' }
]

export default function Add() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#050B14', py: 10, display: 'flex', justifyContent: 'center' }}>
      <Container disableGutters>
        <Box 
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 184, 219, 0.1) 0%, rgba(173, 70, 255, 0.1) 50%, rgba(246, 51, 154, 0.1) 100%)',
            maxWidth: '992px !important', p : 5, mx : 'auto', borderRadius: '24px'
          }}>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 32, md: 30 }, textAlign: 'center', mb: 8, background: 'linear-gradient(90deg, #00B8DB 0%, #AD46FF 50%, #F6339A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ENHANCE WITH ADD-ONS
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 8 }}>
          {items.map((x, i) => (
            <Box key={i} sx={{ border: `1px solid ${x.c}30`, borderRadius: '16px', p: 4, bgcolor: '#0A101D', boxShadow: `0 0 20px ${x.c}05`, transition: 'all 0.3s', '&:hover': { borderColor: x.c, boxShadow: `0 0 30px ${x.c}15` } }}>
              <Typography sx={{ color: x.c, fontFamily: 'Inter', fontWeight: 700, fontSize: 18, mb: 2 }}>{x.t}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                <Typography sx={{ color: '#FFF', fontFamily: 'Inter', fontWeight: 700, fontSize: 24 }}>{x.p}</Typography>
                <Typography sx={{ color: '#99A1AF', ml: 1, fontFamily: 'Inter', fontSize: 14 }}>{x.s}</Typography>
              </Box>
              <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontSize: 14, lineHeight: 1.5 }}>{x.d}</Typography>
            </Box>
          ))}
        </Box>
        </Box>

        <Box sx={{ borderRadius: '24px', p: { xs: 4, md: 6 }, border: '1px solid rgba(240, 177, 0, 0.5)', background: 'linear-gradient(180deg, rgb(240, 177, 0, 0.2) 0%, rgb(255, 105, 0, 0.2) 100%)', textAlign: 'center', boxShadow: '0 0 50px rgba(255, 107, 53, 0.1)', maxWidth: '992px !important', mx: 'auto'}}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
            <EmojiEvents sx={{ color: '#FDC700', fontSize: 14 }} />
            <Typography sx={{ color: '#FDC700', fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em' }}>SPECIAL OFFER</Typography>
          </Stack>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 24, md: 30 }, color: '#FFF', mb: 2 }}>FIRST 100 ANNUAL CUSTOMERS</Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', mx: 'auto', mb: 4 }}>Sign up for any annual plan and get 2 additional months free, premium onboarding worth $1,000, and priority feature requests!</Typography>
          <Button sx={{ background: 'linear-gradient(180deg, #F0B100 0%, #F54900 100%)', px: 6, py: 1.5, borderRadius: '10px', color: '#FFF', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, textTransform: 'none', boxShadow: '0 0 30px rgba(255, 107, 53, 0.4)', '&:hover': { opacity: 0.9 } }}>
            CLAIM YOUR OFFER
          </Button>
        </Box>
      </Container>
    </Box>
  )
}