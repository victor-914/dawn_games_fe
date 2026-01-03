'use client'
import { Box, Typography, Button, Stack } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export default function Herosection() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <Box sx={{
      width: '100%',
      height: 689,
      backgroundImage: 'url(/hero-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Stack direction="row" alignItems="center" spacing={1} sx={{
          bgcolor: 'rgba(255, 107, 53, 0.1)',
          borderRadius: '50px',
          px: 3, py: 1, mb: 3,
          border: '1px solid rgba(255, 107, 53, 0.1)'
        }}>
          <StarBorderIcon sx={{ color: '#FF6B35', width: 20, height: 20 }} />
          <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FF6B35' }}>
            Trusted by forward-thinking institutions across Africa
          </Typography>
        </Stack>

        <Typography variant="h1" sx={{
          fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 36, md: 48 }, color: '#FFFFFF', mb: 2
        }}>
          One System, Every Goal
        </Typography>

        <Typography sx={{
          fontFamily: 'Inter', fontSize: { xs: 18, md: 20 }, color: '#D1D5DC', maxWidth: 729, mb: 5
        }}>
          The complete sports and entertainment management platform built specifically for African institutions. From athlete development to tournament hosting, we power excellence in sports.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={8}>
          <Button endIcon={<ArrowForwardIcon />} sx={{
            background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
            width: 208, height: 56, borderRadius: '10px', color: '#fff', textTransform: 'none'
          }}>
            Request a Demo
          </Button>

          <Button startIcon={<PlayArrowIcon />} sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
            width: 238, height: 57, borderRadius: '10px', color: '#fff', textTransform: 'none'
          }}>
            Watch Platform Tour
          </Button>
        </Stack>
      </Box>

      <Box onClick={scrollToNext} sx={{
        width: 24, height: 40, border: '1px solid rgba(255, 107, 53, 0.5)',
        borderRadius: '20px', display: 'flex', justifyContent: 'center',
        cursor: 'pointer', position: 'absolute', bottom: 40
      }}>
        <Box sx={{
          width: 5, height: 6, bgcolor: '#FF6B35', borderRadius: '50%', mt: 1,
          animation: 'bounce 1.5s infinite'
        }} />
      </Box>
      <style jsx global>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
    </Box>
  )
}