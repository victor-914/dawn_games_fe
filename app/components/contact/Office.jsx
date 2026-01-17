'use client'
import { Box, Container, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

const offices = [
  { title: 'Nigeria Headquarters', location: 'Enugu, Enugu State', status: 'Open Now', statusColor: '#00C950' },
  { title: 'Kenya Office', location: 'Nairobi', status: 'Opening Soon', statusColor: '#FF6B35' },
  { title: 'Ghana Office', location: 'Accra', status: 'Opening Soon', statusColor: '#FF6B35' }
]

export default function Office() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#050B14', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 2 }}>
            Our Offices
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC' }}>
            Growing across Africa to serve you better
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {offices.map((office, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 356.8 }, height: 379.6, background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
              borderRadius: '16px', border: '0.8px solid rgba(255, 107, 53, 0.2)', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', p: 3, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' }
            }}>
              <Box sx={{
                width: 64, height: 64, background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
                borderRadius: '16.4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0px 10px 25px rgba(255, 107, 53, 0.5)', mb: 3
              }}>
                <LocationOn sx={{ color: '#FFFFFF', width: 32, height: 32 }} />
              </Box>
              <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 30, color: '#FFFFFF', textAlign: 'center', mb: 1 }}>
                {office.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', textAlign: 'center', mb: 4 }}>
                {office.location}
              </Typography>
              <Box sx={{ bgcolor: '#050B14', borderRadius: '100px', px: 3, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: office.statusColor, fontWeight: 400 }}>
                  {office.status}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}