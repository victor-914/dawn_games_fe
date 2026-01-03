'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const stats = [
  { icon: <SportsEsportsIcon />, number: '100+', label: 'Sports Institutions', subLabel: 'Projected' },
  { icon: <EmojiEventsIcon />, number: '300K+', label: 'Active Users', subLabel: 'And growing' },
  { icon: <RocketLaunchIcon />, number: '300K+', label: 'Active Users', subLabel: 'And growing' },
  { icon: <TrendingUpIcon />, number: '100+', label: 'Sports Institutions', subLabel: 'Projected' },
]

const solutions = [
  {
    title: 'Sports Club Management',
    subtitle: 'Transform how you run your institution',
    cardBg: 'linear-gradient(180deg, #411A44 0%, #050B14 100%)',
    icon: <EmojiEventsIcon sx={{ color: 'white', fontSize: 40 }} />,
    iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #00B8DB 100%)',
    buttonColor: '#2586FA',
    checkColor: '#359DFF',
    features: [
      'Complete athlete lifecycle management',
      'Tournament and league coordination',
      'Facility booking and resource management',
      'Sponsorship deal tracking',
      'Performance analytics dashboard',
      'Membership tiers and automated billing',
    ]
  },
  {
    title: 'E-Sports & Gaming Platform',
    subtitle: 'Own the future of competitive gaming',
    cardBg: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
    icon: <SportsEsportsIcon sx={{ color: 'white', fontSize: 40 }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
    buttonColor: '#FF6B35',
    checkColor: '#FF6B35',
    features: [
      'Professional tournament hosting',
      'Player ranking and matchmaking',
      'Streaming integration with monetization',
      'Gaming community features',
      'Achievement tracking and leaderboards',
      'Team management and recruitment',
    ]
  },
  {
    title: 'Game Development & Marketing',
    subtitle: 'Build and monetize games for African audiences',
    cardBg: 'linear-gradient(180deg, #1A2744 0%, #14050E 100%)',
    icon: <RocketLaunchIcon sx={{ color: 'white', fontSize: 40 }} />,
    iconBg: 'linear-gradient(180deg, #AD46FF 0%, #F6339A 100%)',
    buttonColor: '#BB43EB',
    checkColor: '#FF35D3',
    features: [
      'Mobile-first game development tools',
      'Africa-focused gaming titles',
      'In-app purchase infrastructure',
      'Cross-platform deployment',
      'Player analytics and engagement',
      'Revenue optimization systems',
    ]
  }
]

export default function Needs() {
  return (
    <Box sx={{
      py: 10,
      width: '100%',
      backgroundImage: 'url(/needs-bg.png)',
      backgroundSize: '100% 531px',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mb: 10 }}>
          {stats.map((stat, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', sm: '48%', md: '23%' },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px',
              border: '0.8px solid rgba(255, 107, 53, 0.2)',
              p: 3,
              height: 144,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'translateY(-5px)' }
            }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                <Box sx={{ color: '#FF6B35', '& svg': { fontSize: 32 } }}>{stat.icon}</Box>
                <Typography variant="h4" fontWeight="bold" color="#FF6B35">{stat.number}</Typography>
              </Stack>
              <Typography variant="body1" color="white" fontWeight="500">{stat.label}</Typography>
              <Typography variant="caption" color="#99A1AF">{stat.subLabel}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" color="white" gutterBottom sx={{ fontSize: { xs: 32, md: 48 } }}>
            Everything Your Sports Institution Needs
          </Typography>
          <Typography variant="h6" color="#D1D5DC" sx={{ maxWidth: 800, mx: 'auto', fontWeight: 'normal', fontSize: 20 }}>
            Purpose-built for the African sports ecosystem, Dawn Games brings enterprise-grade technology to clubs, academies, and organizations ready to compete at the highest level.
          </Typography>
        </Box>

        <Stack spacing={4}>
          {solutions.map((card, index) => (
            <Box key={index} sx={{
              background: card.cardBg,
              borderRadius: '24px',
              border: `1px solid ${card.buttonColor}30`,
              p: { xs: 4, md: 6 },
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 6
              }}>
                
                <Box sx={{ width: { xs: '100%', md: '45%' } }}>
                  <Box sx={{
                    background: card.iconBg,
                    borderRadius: '16px',
                    width: 72,
                    height: 72,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    boxShadow: `0 0 20px ${card.buttonColor}40`
                  }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h4" fontWeight="bold" color="white" gutterBottom sx={{ fontSize: { xs: 24, md: 30 } }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="#D1D5DC" paragraph sx={{ fontSize: 16 }}>
                    {card.subtitle}
                  </Typography>
                  <Button endIcon={<ArrowForwardIcon />} variant="contained" sx={{
                    bgcolor: card.buttonColor,
                    borderRadius: '10px',
                    width: 155,
                    height: 48,
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 400,
                    boxShadow: `0 4px 20px ${card.buttonColor}40`,
                    '&:hover': { bgcolor: card.buttonColor, filter: 'brightness(1.1)' }
                  }}>
                    Learn More
                  </Button>
                </Box>

                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                  <Stack spacing={2}>
                    {card.features.map((feature, i) => (
                      <Stack
                        key={i}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                          bgcolor: 'rgba(5, 11, 20, 0.6)',
                          borderRadius: '10px',
                          p: 2,
                          height: 48,
                          border: '1px solid rgba(255,255,255,0.05)',
                          transition: 'transform 0.2s',
                          '&:hover': { transform: 'translateX(5px)', borderColor: `${card.checkColor}40` }
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: card.checkColor, fontSize: 20 }} />
                        <Typography color="#D1D5DC" fontSize={16}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>

              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}