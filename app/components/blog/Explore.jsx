'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

const topics = [
  {
    title: 'Industry Insights',
    icon: <TrendingUpIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #00B8DB 100%)',
  },
  {
    title: 'Sports Management',
    icon: <TrackChangesIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
  },
  {
    title: 'E-Sports Trends',
    icon: <GroupsIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #D021FF 0%, #E05CFF 100%)',
  },
  {
    title: 'Case Studies',
    icon: <LocalOfferIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #00C853 0%, #69F0AE 100%)',
  },
  {
    title: 'Technology',
    icon: <TrendingUpIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #7C4DFF 0%, #B388FF 100%)',
  },
  {
    title: 'Financial Mgmt',
    icon: <TrackChangesIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #FFAB00 0%, #FFD740 100%)',
  },
  {
    title: 'Game Development',
    icon: <GroupsIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #F50057 0%, #FF4081 100%)',
  },
  {
    title: 'Growth Strategies',
    icon: <LocalOfferIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />,
    iconBg: 'linear-gradient(180deg, #2979FF 0%, #448AFF 100%)',
  }
]

const filters = [
  'All Articles',
  'Industry Insights',
  'Sports Management',
  'E-Sports Trends',
  'Case Studies',
  'Technology',
  'Financial Management'
]

export default function Explore() {
  return (
    <Box sx={{
      bgcolor: '#050B14',
      py: 10
    }}>
      <Container maxWidth="xl"> {/* Increased maxWidth to accommodate 4 cards comfortably */}
        
        {/* --- Header --- */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Explore by Topic
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 20 },
            color: '#D1D5DC'
          }}>
            Find content that matters to you
          </Typography>
        </Box>

        {/* --- Topic Cards Grid (4 per row) --- */}
        <Box sx={{ 
          display: 'grid',
          // Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 10
        }}>
          {topics.map((topic, index) => (
            <Box key={index} sx={{
              width: '100%', // Fills grid cell
              height: 133.6,
              background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
              borderRadius: '16.4px',
              border: '0.8px solid rgba(255, 53, 218, 0.2)', // FF35DA 20%
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              transition: 'transform 0.2s, border-color 0.2s',
              cursor: 'pointer',
              '&:hover': { 
                transform: 'translateY(-5px)', 
                borderColor: 'rgba(255, 53, 218, 0.5)' 
              }
            }}>
              
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '10px',
                background: topic.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}>
                {topic.icon}
              </Box>

              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: '#FFFFFF',
                fontWeight: 400
              }}>
                {topic.title}
              </Typography>

            </Box>
          ))}
        </Box>

        {/* --- Filter Buttons (Single Line Scrollable) --- */}
        <Box sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'center' }, // Center on large screens if they fit, scroll on small
          overflowX: 'auto',
          pb: 2, // Space for scrollbar
          // Hide Scrollbar styles
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ whiteSpace: 'nowrap' }} // Prevents wrapping
          >
            {filters.map((filter, index) => {
              const isActive = index === 0;
              return (
                <Button
                  key={index}
                  sx={{
                    height: 48,
                    px: 2.4,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    flexShrink: 0, // Prevents buttons from squishing
                    ...(isActive ? {
                      background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
                      color: '#FFFFFF',
                      '&:hover': { opacity: 0.9 }
                    } : {
                      bgcolor: '#1A2744',
                      color: '#99A1AF',
                      '&:hover': { bgcolor: '#233253', color: '#FFFFFF' }
                    })
                  }}
                >
                  {filter}
                </Button>
              )
            })}
          </Stack>
        </Box>

      </Container>
    </Box>
  )
}