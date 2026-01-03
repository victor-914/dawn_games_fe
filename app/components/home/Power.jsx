'use client'
import { Box, Container, Typography, Stack, Avatar } from '@mui/material'

const testimonials = [
  {
    quote: "Dawn Games transformed our academy from a manual operation to a modern sports institution. We've doubled our capacity while cutting administrative time by 70%.",
    name: 'Coach Name',
    title: 'Academy Director',
    avatar: '/avatar1.png'
  },
  {
    quote: "Finally, an e-sports platform built for Africa. Tournament organization that used to take weeks now takes hours.",
    name: 'Organizer Name',
    title: 'E-sports Organization',
    avatar: '/avatar2.png'
  }
]

export default function Power() {
  return (
    <Box sx={{
      py: 10,
      width: '100%',
      minHeight: 601.35,
      backgroundImage: 'url(/power-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{
          fontFamily: 'Inter',
          fontWeight: 'bold',
          fontSize: { xs: 32, md: 48 },
          color: '#FFFFFF',
          textAlign: 'center',
          mb: 8
        }}>
          Powering Excellence Across Africa
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {testimonials.map((item, index) => (
            <Box key={index} sx={{
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px',
              border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: 5,
              maxWidth: 551.2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <Typography sx={{
                position: 'absolute',
                top: 20,
                right: 30,
                fontSize: 60,
                color: 'rgba(255, 107, 53, 0.2)',
                fontFamily: 'serif'
              }}>
                "
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 18,
                color: '#D1D5DC',
                lineHeight: 1.6,
                mb: 4,
                maxWidth: 485.6
              }}>
                {item.quote}
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={item.avatar} sx={{ width: 48, height: 48 }} />
                <Box>
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    color: '#FFFFFF',
                    fontWeight: 600
                  }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 14,
                    color: '#99A1AF'
                  }}>
                    {item.title}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}