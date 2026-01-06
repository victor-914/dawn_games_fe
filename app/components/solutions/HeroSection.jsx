'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import { CheckCircleOutline, Groups, CalendarMonth, MonetizationOn, Chat, BarChart } from '@mui/icons-material'

const solutions = [
  { title: 'Athlete Management', icon: <Groups sx={{ fontSize: 28, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #5A8EFF 100%)', checkColor: '#2B7FFF', features: ['Complete registration and onboarding', 'Digital player profiles with photos and documents', 'Training attendance tracking', 'Medical records and injury management', 'Performance metrics and progress tracking', 'Contract and scholarship management', 'Alumni network features'] },
  { title: 'Operations Management', icon: <CalendarMonth sx={{ fontSize: 28, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', checkColor: '#FF6B35', features: ['Facility booking and calendar management', 'Equipment inventory tracking', 'Staff scheduling and role management', 'Multi-location support', 'Automated workflows and approvals'] },
  { title: 'Financial Management', icon: <MonetizationOn sx={{ fontSize: 28, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #D021FF 0%, #E05CFF 100%)', checkColor: '#D021FF', features: ['Membership dues and payment tracking', 'Automated billing and reminders', 'Multiple payment method support', 'Sponsorship deal tracking', 'Revenue analytics and reporting', 'Expense management'] },
  { title: 'Communication Hub', icon: <Chat sx={{ fontSize: 28, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #00C853 0%, #69F0AE 100%)', checkColor: '#00C853', features: ['Announcements and notifications', 'Parent-coach messaging', 'Team group chats', 'SMS and email integration', 'Mobile apps for parents and athletes'] },
  { title: 'Performance Analytics', icon: <BarChart sx={{ fontSize: 28, color: '#FFFFFF' }} />, iconBg: 'linear-gradient(180deg, #FFB300 0%, #FFCA28 100%)', checkColor: '#FFB300', features: ['Real-time performance dashboards', 'Custom KPI tracking', 'Athlete development insights', 'Attendance and engagement metrics', 'Exportable reports'] }
]

export default function HeroSection() {
  return (
    <Box>
      <Box sx={{
        width: '100%', height: { xs: 'auto', md: 492 }, minHeight: { xs: '60vh', md: 492 },
        backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/29953750_sl_033021_41820_13.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: { xs: 10, md: 0 }
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.56)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 3 }}>
            Comprehensive Solutions for Every Need
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 24 }, color: '#D1D5DC', maxWidth: 800, mx: 'auto', lineHeight: 1.5 }}>
            Purpose-built tools for sports clubs, e-sports organizations, and game developers. Everything you need to succeed in one powerful platform.
          </Typography>
        </Container>
      </Box>

      <Box sx={{
        width: '100%', minHeight: { xs: 'auto', md: 1112.8 },
        backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/solution-hero-2.png)',
        backgroundSize: 'cover', backgroundPosition: 'top center', position: 'relative', py: { xs: 8, md: 10 }
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5, 11, 20, 0.30)' }} />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            Run Your Club Like a Professional Organization
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {solutions.map((card, index) => (
              <Box key={index} sx={{
                width: { xs: '100%', md: 'calc(50% - 16px)' }, background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
                borderRadius: '16px', border: `0.8px solid rgba(53, 134, 255, 0.2)`, p: { xs: 4, md: 5 },
                transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)', borderColor: card.checkColor }
              }}>
                <Stack direction="row" alignItems="center" spacing={3} mb={4}>
                  <Box sx={{ width: 56, height: 56, background: card.iconBg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 20px ${card.checkColor}40` }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 30 }, color: '#FFFFFF' }}>
                    {card.title}
                  </Typography>
                </Stack>
                <Stack spacing={2.5}>
                  {card.features.map((feature, i) => (
                    <Stack key={i} direction="row" alignItems="flex-start" spacing={2}>
                      <CheckCircleOutline sx={{ color: card.checkColor, fontSize: 18, mt: 0.5 }} />
                      <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', lineHeight: 1.5 }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
            <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' }, height: 0, visibility: 'hidden', display: { xs: 'none', md: 'block' } }} />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}