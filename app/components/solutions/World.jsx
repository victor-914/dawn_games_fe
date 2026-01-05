'use client'
import { Box, Container, Typography } from '@mui/material'

const useCases = [
  {
    title: 'Football Academies',
    description: 'Manage player development, track scouting reports, coordinate training sessions, and maintain parent communication—all in one place.'
  },
  {
    title: 'Professional Clubs',
    description: 'Handle team operations, contract management, performance analytics, sponsorship tracking, and fan engagement at scale.'
  },
  {
    title: 'School Athletic Programs',
    description: 'Coordinate multi-sport programs, track student-athlete academics, manage facilities, and communicate with parents seamlessly.'
  },
  {
    title: 'E-Sports Organizations',
    description: 'Run professional tournaments, manage player rankings, stream competitions, and build engaged gaming communities.'
  },
  {
    title: 'Sports Federations',
    description: 'Oversee league operations, coordinate inter-club competitions, track national rankings, and manage member organizations.'
  },
  {
    title: 'Gaming Cafes',
    description: 'Schedule gaming stations, host local tournaments, manage memberships, and engage your gaming community.'
  }
]

export default function World() {
  return (
    <Box sx={{ bgcolor: '#050B14', py: 15, minHeight: 953.7 }}>
      <Container maxWidth="xl">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 28, md: 36 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Built for Real-World Use Cases
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#D1D5DC',
            maxWidth: 800,
            mx: 'auto'
          }}>
            See how different organizations use Dawn Games to transform their operations.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4 
        }}>
          {useCases.map((item, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 'calc(33.333% - 22px)' },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px',
              border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 107, 53, 0.5)' }
            }}>
              <Typography variant="h3" sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 30,
                color: '#FFFFFF',
                mb: 3
              }}>
                {item.title}
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: '#D1D5DC',
                lineHeight: 1.6
              }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  )
}