'use client'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { Check, Star } from '@mui/icons-material'

const plans = [
  {
    title: 'ECOSYSTEM STARTER',
    price: '$520',
    freq: '/month',
    save: 'Save $130/month (normally $650)',
    color: '#00D3F2',
    border: 'rgba(0, 184, 219, 0.5)',
    bg: 'linear-gradient(180deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 184, 219, 0.05) 100%)',
    btn: 'linear-gradient(180deg, #00B8DB 0%, #0092B8 100%)',
    feats: ['Sports Club: Starter Plan', 'Esports: Community Plan', 'Game Dev: Indie Plan', 'Perfect for organizations starting their sports + gaming journey'],
    btnTxt: 'Contact Sales'
  },
  {
    title: 'ECOSYSTEM PROFESSIONAL',
    price: '$1,360',
    freq: '/month',
    save: 'Save $340/month (normally $1,700)',
    color: '#C27AFF',
    border: 'rgba(194, 122, 255, 0.5)',
    bg: 'linear-gradient(180deg, rgba(194, 122, 255, 0.2) 0%, rgba(194, 122, 255, 0.05) 100%)',
    btn: 'linear-gradient(180deg, #C27AFF 0%, #9D40E6 100%)',
    feats: ['Sports Club: Professional Plan', 'Esports: Competitor Plan', 'Game Dev: Studio Plan', 'Best for serious sports + gaming organizations', 'Ideal for football academy + esports division + game studio'],
    btnTxt: 'Contact Sales',
    bestValue: true
  },
  {
    title: 'ECOSYSTEM ENTERPRISE',
    price: 'Custom',
    freq: '',
    sub: 'starting at $3,500/month',
    save: 'Save 20-30% on individual plans',
    color: '#FB64B6',
    border: 'rgba(251, 100, 182, 0.5)',
    bg: 'linear-gradient(180deg, rgba(251, 100, 182, 0.2) 0%, rgba(251, 100, 182, 0.05) 100%)',
    btn: 'linear-gradient(180deg, #FB64B6 0%, #D93693 100%)',
    feats: ['All Enterprise/Pro/Publisher Plans', 'Custom integrations between platforms', 'White-label options across ecosystem', 'Dedicated account management team', 'Perfect for national federations, large gaming companies'],
    btnTxt: 'Schedule Consultation'
  }
]

export default function EcosystemPage() {
  return (
    <Box sx={{ bgcolor: '#050B14', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="🚀 BUNDLE & SAVE 20%"
            sx={{ bgcolor: 'rgba(0, 211, 242, 0.1)', color: '#00D3F2', border: '1px solid rgba(0, 211, 242, 0.3)', borderRadius: '50px', fontFamily: 'Inter', fontWeight: 700, mb: 3, px: 1 }}
          />
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 36, background: 'linear-gradient(90deg, #00D3F2 0%, #FB64B6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, letterSpacing: '-0.02em' }}>
            THE COMPLETE ECOSYSTEM
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 18, color: '#99A1AF' }}>
            Get all three pillars and build integrated sports and gaming operations
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          {plans.map((p, i) => (
            <Box key={i} sx={{ width: '356.8px', height: '570px', borderRadius: '16px', background: p.bg, border: `1.6px solid ${p.border}`, p: 4, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: p.bestValue ? `0 0 40px ${p.color}20` : 'none' }}>
              {p.bestValue && (
                <Box sx={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', bgcolor: '#000', border: `1px solid ${p.color}`, borderRadius: '20px', px: 2, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, boxShadow: `0 0 15px ${p.color}60` }}>
                  <Star sx={{ fontSize: 14, color: '#FFD700' }} />
                  <Typography sx={{ color: '#FFF', fontSize: 11, fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.05em' }}>BEST VALUE</Typography>
                </Box>
              )}
              <Typography sx={{ color: p.color, fontFamily: 'Inter', fontWeight: 700, fontSize: 24, textTransform: 'uppercase', mb: 1 }}>{p.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontWeight: 700, fontSize: 36, lineHeight: 1 }}>{p.price}</Typography>
                <Typography sx={{ color: '#99A1AF', ml: 0.5, fontFamily: 'Inter', fontWeight: 400, fontSize: 16 }}>{p.freq}</Typography>
              </Box>
              {p.sub && <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: 14, mt: 0.5 }}>{p.sub}</Typography>}
              <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: 14, mt: 1, mb: 4 }}>{p.save}</Typography>
              <Stack spacing={2} sx={{ flex: 1, mb: 4 }}>
                {p.feats.map((f, k) => (
                  <Stack key={k} direction="row" spacing={1.5} alignItems="flex-start">
                    <Check sx={{ color: p.color, fontSize: 20, mt: 0.3 }} />
                    <Typography sx={{ color: '#D1D5DC', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: 1.5 }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button href='/contact' sx={{ width: '100%', background: p.btn, borderRadius: '10px', color: '#FFFFFF', height: 48, fontWeight: 700, fontFamily: 'Inter', fontSize: 16, textTransform: 'none', '&:hover': { opacity: 0.9, boxShadow: `0 0 20px ${p.color}40` } }}>
                {p.btnTxt}
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}