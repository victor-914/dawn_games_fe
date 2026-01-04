'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import VisibilityIcon from '@mui/icons-material/Visibility'

const cards = [
  {
    icon: <TrackChangesIcon sx={{ fontSize: 32, color: '#FF6B35' }} />, 
    title: 'Our Mission',
    text: 'To revolutionize sports and entertainment management in Africa through specialized technology, creating seamless systems for sports clubs, academies, e-sports organizations, and game studios.'
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 32, color: '#FF6B35' }} />, 
    title: 'Our Vision',
    text: 'To become the leading institutional sports and entertainment technology platform across Africa, empowering athletes, clubs, and organizations to achieve excellence.'
  }
]

export default function HeroSection() {
  return (
    <Box>
      <Box sx={{
        height: 543,
        width: '100%',
        backgroundImage: 'url(/about-hero-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF',
            mb: 3
          }}>
            We're Building the Future of Sports in Africa
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 24 },
            color: '#D1D5DC',
            maxWidth: 832,
            mx: 'auto'
          }}>
            Dawn Games is more than software—it's a movement to professionalize sports management across the continent.
          </Typography>
        </Container>
      </Box>

      <Box sx={{
        minHeight: 885,
        width: '100%',
        backgroundImage: 'url(/about-hero-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        py: 10
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.5)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          
          <Box sx={{ maxWidth: 880, mx: 'auto', mb: 10 }}>
            <Typography sx={{ fontFamily: 'Inter', fontSize: 20, color: '#FFFFFF', mb: 4, lineHeight: 1.6 }}>
              Dawn Games emerged from a simple belief: African sports institutions deserve the same world-class technology that powers elite organizations globally. Not adapted solutions. Not "good enough for Africa" compromises. Purpose-built excellence.
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: 20, color: '#FFFFFF', lineHeight: 1.6 }}>
              We're a specialized vertical within Cognix Group, Africa's leading institutional technology incubator. This means we combine startup agility with enterprise backing, sector focus with portfolio strength.
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4
          }}>
            {cards.map((card, index) => (
              <Box key={index} sx={{
                width: { xs: '100%', md: '48%', lg: 543.2 },
                minHeight: 396.1,
                background: 'linear-gradient(180deg, #2D1A44 0%, #140514 100%)',
                borderRadius: '24px',
                p: 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}>
                  {card.icon}
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontWeight: 'bold',
                  fontSize: 36,
                  color: '#FFFFFF',
                  mb: 3
                }}>
                  {card.title}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontSize: 20,
                  color: '#D1D5DC',
                  lineHeight: 1.6
                }}>
                  {card.text}
                </Typography>
              </Box>
            ))}
          </Box>

        </Container>
      </Box>
    </Box>
  )
}