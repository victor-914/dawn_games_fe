'use client'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckIcon from '@mui/icons-material/Check'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const leftFeatures = [
  'Complete development support',
  'Marketing and distribution',
  'Post-launch support'
]

const rightFeatures = [
  'Publishing assistance',
  'Analytics and optimization',
  'Revenue optimization tools'
]

export default function Revenue() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: 843.7,
      background: 'linear-gradient(180deg, rgba(173, 70, 255, 0.1) 0%, rgba(246, 51, 154, 0.1) 100%)',
      borderTop: '1.6px solid rgba(173, 70, 255, 0.3)',
      borderBottom: '1.6px solid rgba(173, 70, 255, 0.3)',
      // No border radius as requested
      py: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          
          <Box sx={{
            width: 72,
            height: 72,
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #AD46FF 0%, #F6339A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
            boxShadow: '0 4px 20px rgba(173, 70, 255, 0.4)'
          }}>
            <AutoAwesomeIcon sx={{ color: '#FFFFFF', fontSize: 40 }} />
          </Box>

          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 28, md: 36 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Game Development - Revenue Share Model
          </Typography>
          
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#D1D5DC',
            mb: 8
          }}>
            No upfront costs. We succeed when you succeed.
          </Typography>

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={4} 
            sx={{ mb: 8, width: '100%', justifyContent: 'center' }}
          >
            <Box sx={{
              width: { xs: '100%', md: 418.4 },
              height: 144,
              bgcolor: 'rgba(5, 11, 20, 0.5)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 30,
                color: '#FF6B35',
                mb: 0.5
              }}>
                15-25%
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: '#FFFFFF',
                mb: 0.5
              }}>
                Revenue Share
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 14,
                color: '#99A1AF'
              }}>
                Based on services used
              </Typography>
            </Box>

            <Box sx={{
              width: { xs: '100%', md: 418.4 },
              height: 144,
              bgcolor: 'rgba(5, 11, 20, 0.5)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 30,
                color: '#FF6B35',
                mb: 0.5,
                textDecoration: 'line-through'
              }}>
                ₦0
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: '#FFFFFF',
                mb: 0.5
              }}>
                Upfront Cost
              </Typography>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: 14,
                color: '#99A1AF'
              }}>
                Pay only when you earn
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'center',
            gap: { xs: 2, md: 8 },
            mb: 8,
            width: '100%',
            maxWidth: 800
          }}>
            <Stack spacing={2} sx={{ flex: 1 }}>
              {leftFeatures.map((item, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="center">
                  <CheckIcon sx={{ color: '#AD46FF', fontSize: 20 }} />
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    color: '#D1D5DC',
                    textAlign: 'left'
                  }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack spacing={2} sx={{ flex: 1 }}>
              {rightFeatures.map((item, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="center">
                  <CheckIcon sx={{ color: '#AD46FF', fontSize: 20 }} />
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    color: '#D1D5DC',
                    textAlign: 'left'
                  }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Button 
            endIcon={<ArrowForwardIcon sx={{ width: 20, height: 20 }} />}
            sx={{
              width: 259.34,
              height: 56,
              background: 'linear-gradient(90deg, #AD46FF 0%, #F6339A 100%)',
              borderRadius: '10px',
              color: '#FFFFFF',
              textTransform: 'none',
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: 400,
              '&:hover': { opacity: 0.9 }
            }}
          >
            Start Your Game Project
          </Button>

        </Box>
      </Container>
    </Box>
  )
}