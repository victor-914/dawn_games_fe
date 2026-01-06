'use client'
import { Box, Container, Typography, Button } from '@mui/material'
import { CalendarToday, ChatBubbleOutline, Handshake, Article, EmailOutlined, PhoneOutlined } from '@mui/icons-material'

const cards = [
  {
    title: 'Schedule a Demo', description: 'See Dawn Games in action with a personalized walkthrough',
    icon: <CalendarToday sx={{ color: '#FFFFFF', width: 32, height: 32 }} />, iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #00B8DB 100%)',
    shadowColor: 'rgba(53, 194, 255, 0.5)', action: 'button', buttonText: 'Book Demo Call', buttonIcon: <CalendarToday sx={{ width: 18, height: 18 }} />
  },
  {
    title: 'Sales Inquiries', description: 'Questions about pricing, features, or implementation?',
    icon: <ChatBubbleOutline sx={{ color: '#FFFFFF', width: 32, height: 32 }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
    shadowColor: 'rgba(255, 107, 53, 0.5)', action: 'contacts', email: 'sales@dawngames.ng', phone: '+234 XXX XXX XXXX'
  },
  {
    title: 'Partnership Opportunities', description: 'Interested in collaborating or integration?',
    icon: <Handshake sx={{ color: '#FFFFFF', width: 32, height: 32 }} />, iconBg: 'linear-gradient(180deg, #D021FF 0%, #E05CFF 100%)',
    shadowColor: 'rgba(208, 33, 255, 0.5)', action: 'contacts', email: 'partnerships@dawngames.ng'
  },
  {
    title: 'Media & Press', description: 'Press inquiries and media kits',
    icon: <Article sx={{ color: '#FFFFFF', width: 32, height: 32 }} />, iconBg: 'linear-gradient(180deg, #00C853 0%, #69F0AE 100%)',
    shadowColor: 'rgba(0, 200, 83, 0.5)', action: 'contacts', email: 'press@dawngames.ng'
  }
]

export default function HeroSection() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', background: 'linear-gradient(180deg, #0A1628 0%, #050B14 50%, #0A1628 100%)', py: { xs: 10, md: 20 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 3 }}>
            Let's Transform Your Institution Together
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 24 }, color: '#D1D5DC', maxWidth: 900, mx: 'auto', lineHeight: 1.5 }}>
            Ready to elevate your sports organization? Schedule a personalized demo and see how Dawn Games can revolutionize your operations.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ width: '100%', bgcolor: '#050B14', pb: 15, pt: 5 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {cards.map((card, index) => (
              <Box key={index} sx={{
                width: '100%', minHeight: { xs: 'auto', md: 311.6 }, background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
                borderRadius: '16px', border: '0.8px solid rgba(255, 107, 53, 0.2)', p: { xs: 4, md: 5 },
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'
              }}>
                <Box sx={{
                  width: 64, height: 64, background: card.iconBg, borderRadius: '16.4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0px 10px 25px ${card.shadowColor}`, mb: 4
                }}>
                  {card.icon}
                </Box>
                <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 30, color: '#FFFFFF', mb: 2 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', mb: 4 }}>
                  {card.description}
                </Typography>

                {card.action === 'button' ? (
                  <Button endIcon={card.buttonIcon} sx={{
                    height: 48, bgcolor: '#FF6B35', borderRadius: '10px', px: 3, textTransform: 'none',
                    fontSize: 16, fontFamily: 'Inter', fontWeight: 400, color: '#FFFFFF', '&:hover': { bgcolor: '#FF8C5A' }
                  }}>
                    {card.buttonText}
                  </Button>
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {card.email && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#FF6B35' }}>
                        <EmailOutlined sx={{ fontSize: 20 }} />
                        <Typography component="a" href={`mailto:${card.email}`} sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FF6B35', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                          {card.email}
                        </Typography>
                      </Box>
                    )}
                    {card.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#FF6B35' }}>
                        <PhoneOutlined sx={{ fontSize: 20 }} />
                        <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FF6B35' }}>{card.phone}</Typography>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}