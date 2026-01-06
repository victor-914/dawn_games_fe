'use client'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { Check, ArrowForward } from '@mui/icons-material'

const esportsPlans = [
  {
    title: 'Tournament Hosting', price: 'Pay Per Event', description: 'Complete tournament infrastructure with no monthly commitment',
    features: ['Automated bracket generation', 'Registration management', 'Real-time scoring', 'Streaming integration', 'Results and statistics', 'Prize pool tracking']
  },
  {
    title: 'Team Subscriptions', price: '₦300,000/year', description: 'Perfect for professional e-sports teams',
    features: ['Team roster management', 'Player stats tracking', 'Scrim scheduling', 'Communication tools', 'Performance analytics', 'Tournament history']
  }
]

export default function Platform() {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 2 }}>
            E-Sports Platform
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC' }}>
            Flexible pricing for tournament organizers and teams
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
          {esportsPlans.map((plan, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 496 }, minHeight: { xs: 'auto', md: 551.2 },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '24px', border: '1.6px solid rgba(255, 107, 53, 0.2)',
              p: { xs: 4, md: 5 }, display: 'flex', flexDirection: 'column'
            }}>
              <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 30, color: '#FFFFFF', mb: 1 }}>
                {plan.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 30, color: '#FF6B35', mb: 2 }}>
                {plan.price}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF', mb: 4, lineHeight: 1.5, minHeight: { md: 48 } }}>
                {plan.description}
              </Typography>

              <Stack spacing={2} sx={{ mb: 5, flex: 1 }}>
                {plan.features.map((feature, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                    <Check sx={{ color: '#FF6B35', fontSize: 20, mt: 0.5 }} />
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', lineHeight: 1.5 }}>
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button endIcon={<ArrowForward sx={{ width: 18, height: 18 }} />} sx={{
                width: '100%', height: 48, bgcolor: '#FF6B35', borderRadius: '10px',
                color: '#FFFFFF', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400,
                '&:hover': { bgcolor: '#FF8C5A' }
              }}>
                Learn More
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}