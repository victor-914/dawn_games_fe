'use client'
import { Box, Container, Typography } from '@mui/material'
import { EmojiEvents, Groups, TrackChanges, SportsEsports, WorkspacePremium, FlashOn } from '@mui/icons-material'

const institutions = [
  { title: 'Football Academies', description: 'Manage player development, scouting, and training', icon: <EmojiEvents sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #3557FF 0%, #5A94FF 100%)' },
  { title: 'Professional Clubs', description: 'Handle team operations and sponsorship at scale', icon: <Groups sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #FF35C2 0%, #FF5AEE 100%)' },
  { title: 'School Programs', description: 'Coordinate multi-sport programs seamlessly', icon: <TrackChanges sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #FFE735 0%, #FFAC5A 100%)' },
  { title: 'E-Sports Organizations', description: 'Run professional tournaments and rankings', icon: <SportsEsports sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #82FF35 0%, #428408 100%)' },
  { title: 'Sports Federations', description: 'Oversee league operations and national rankings', icon: <WorkspacePremium sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)' },
  { title: 'Gaming Cafes', description: 'Schedule stations and host local tournaments', icon: <FlashOn sx={{ color: 'white', fontSize: 32 }} />, iconBg: 'linear-gradient(180deg, #35F2FF 0%, #5ABAFF 100%)' },
]

export default function Institution() {
  return (
    <Box sx={{
      py: { xs: 6, md: 10 }, width: '100%', minHeight: { xs: 'auto', md: 992 },
      backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/institution-bg.png)',
      backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 48 }, color: '#FFFFFF', mb: 2 }}>
            Built for Every Type of Sports Institution
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC', maxWidth: 800, mx: 'auto' }}>
            Whether you're running an academy, professional club, or e-sports organization, we have the tools you need to succeed.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
          {institutions.map((item, index) => (
            <Box key={index} sx={{
              background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
              borderRadius: '16px', border: '0.8px solid rgba(53, 70, 255, 0.2)',
              p: 4, width: { xs: '100%', sm: '48%', md: '30%' }, height: 250,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(53, 70, 255, 0.5)' }
            }}>
              <Box sx={{
                width: 60, height: 60, borderRadius: '16.4px', background: item.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.2)'
              }}>
                {item.icon}
              </Box>
              <Typography variant="h5" sx={{
                fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 20, md: 20, lg: 24 },
                color: '#FFFFFF', mb: 1.5, whiteSpace: { xs: 'normal', md: 'nowrap' }, overflow: 'hidden', textOverflow: 'ellipsis'
              }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF', lineHeight: 1.5 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}