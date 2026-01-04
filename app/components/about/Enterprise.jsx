'use client'
import { Box, Container, Typography, Stack } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined'

const workList = [
  'Professional sports clubs across Nigeria, Kenya, and Ghana',
  'E-sports organizations and tournament platforms',
  'Game development studios',
  'Enterprise software companies',
  'Educational athletic programs'
]

const cognixFeatures = [
  {
    title: 'Proven Track Record',
    desc: 'Cognix Group powers thousands of institutions across Africa',
    icon: <WorkspacePremiumIcon sx={{ color: '#FF6B35', fontSize: 20 }} />
  },
  {
    title: 'Shared Innovation',
    desc: 'Enterprise-grade infrastructure and security systems',
    icon: <LightbulbIcon sx={{ color: '#FF6B35', fontSize: 20 }} />
  },
  {
    title: 'Long-Term Stability',
    desc: 'Backed by a company committed to building for decades',
    icon: <VerifiedUserIcon sx={{ color: '#FF6B35', fontSize: 20 }} />
  }
]

export default function Enterprise() {
  return (
    <Box sx={{ bgcolor: '#050B14', py: 15 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 32, md: 48 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Expertise That Understands Your World
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 20 },
            color: '#D1D5DC',
            maxWidth: 800,
            mx: 'auto'
          }}>
            Our team combines deep sports industry knowledge with world-class technology expertise. We don't just build software—we understand the sports ecosystem intimately.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4 
        }}>
          
          <Box sx={{
            flex: 1,
            background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
            borderRadius: '16px',
            border: '0.8px solid rgba(255, 107, 53, 0.2)',
            p: { xs: 4, md: 6 }
          }}>
            <Typography variant="h3" sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 30,
              color: '#FF6B35',
              mb: 4
            }}>
              We've Worked With:
            </Typography>
            <Stack spacing={3}>
              {workList.map((item, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="center">
                  <CircleIcon sx={{ fontSize: 8, color: '#FF6B35' }} />
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC' }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%)',
            borderRadius: '16px',
            border: '0.8px solid rgba(255, 107, 53, 0.3)',
            p: { xs: 4, md: 6 }
          }}>
            <Typography variant="h3" sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 30,
              color: '#FF6B35',
              mb: 2
            }}>
              Part of Cognix Group
            </Typography>
            <Typography sx={{
              fontFamily: 'Inter',
              fontSize: 16,
              color: '#D1D5DC',
              mb: 5,
              lineHeight: 1.6
            }}>
              Dawn Games is a proud member of the Cognix Group family—Africa's premier institutional technology incubator.
            </Typography>
            
            <Stack spacing={4}>
              {cognixFeatures.map((item, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ mt: 0.5 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FFFFFF', fontWeight: 500, mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#99A1AF' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}