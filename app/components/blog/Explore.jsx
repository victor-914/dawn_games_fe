'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { TrendingUp, TrackChanges, Groups, LocalOffer } from '@mui/icons-material'

const topics = [
  { title: 'Industry Insights', icon: <TrendingUp sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #00B8DB 100%)' },
  { title: 'Sports Management', icon: <TrackChanges sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)' },
  { title: 'E-Sports Trends', icon: <Groups sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #D021FF 0%, #E05CFF 100%)' },
  { title: 'Case Studies', icon: <LocalOffer sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #00C853 0%, #69F0AE 100%)' },
  { title: 'Technology', icon: <TrendingUp sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #7C4DFF 0%, #B388FF 100%)' },
  { title: 'Financial Mgmt', icon: <TrackChanges sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #FFAB00 0%, #FFD740 100%)' },
  { title: 'Game Development', icon: <Groups sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #F50057 0%, #FF4081 100%)' },
  { title: 'Growth Strategies', icon: <LocalOffer sx={{ color: '#FFFFFF', fontSize: 24 }} />, iconBg: 'linear-gradient(180deg, #2979FF 0%, #448AFF 100%)' }
]

const filters = ['All Articles', 'Industry Insights', 'Sports Management', 'E-Sports Trends', 'Case Studies', 'Technology', 'Financial Management']

export default function Explore() {
  return (
    <Box sx={{ bgcolor: '#050B14', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', mb: 2 }}>
            Explore by Topic
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC' }}>
            Find content that matters to you
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3, mb: 10 }}>
          {topics.map((topic, i) => (
            <Box key={i} sx={{
              width: '100%', height: 133.6, background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
              borderRadius: '16.4px', border: '0.8px solid rgba(255, 53, 218, 0.2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
              transition: 'transform 0.2s, border-color 0.2s', cursor: 'pointer',
              '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 53, 218, 0.5)' }
            }}>
              <Box sx={{ width: 48, height: 48, borderRadius: '10px', background: topic.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                {topic.icon}
              </Box>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FFFFFF', fontWeight: 400 }}>
                {topic.title}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Stack direction="row" spacing={2} sx={{ whiteSpace: 'nowrap' }}>
            {filters.map((filter, index) => (
              <Button key={index} sx={{
                height: 48, px: 2.4, borderRadius: '10px', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, flexShrink: 0,
                ...(index === 0 ? { background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', color: '#FFFFFF', '&:hover': { opacity: 0.9 } }
                  : { bgcolor: '#1A2744', color: '#99A1AF', '&:hover': { bgcolor: '#233253', color: '#FFFFFF' } })
              }}>
                {filter}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}