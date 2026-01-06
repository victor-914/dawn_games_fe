'use client'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { ArrowForward, AutoAwesome, AccessTime } from '@mui/icons-material'

export default function Featured() {
  return (
    <Box sx={{ bgcolor: '#050B14', minHeight: 848.8, py: { xs: 8, md: 10 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 6 }}>
          <AutoAwesome sx={{ color: '#AC008C', width: 24, height: 24 }} />
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: 36, color: '#FFFFFF' }}>Featured Article</Typography>
        </Stack>

        <Box sx={{
          width: '100%', maxWidth: 1131.2, minHeight: { xs: 'auto', md: 597.6 }, background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
          borderRadius: '24px', border: '1.6px solid rgba(255, 53, 218, 0.2)', p: { xs: 3, md: 6 },
          display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: 6
        }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{
                width: 149.96, height: 41.6, bgcolor: 'rgba(255, 53, 218, 0.2)', border: '0.8px solid rgba(255, 107, 53, 0.3)',
                borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#AC008C', fontWeight: 400 }}>Industry Insights</Typography>
              </Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccessTime sx={{ color: '#99A1AF', fontSize: 18 }} />
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF' }}>7 min read</Typography>
              </Stack>
            </Stack>

            <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 28 }, color: '#FFFFFF', mb: 3, lineHeight: 1.4 }}>
              Why 80% of African Sports Clubs <br /> Fail—And How Technology Can <br /> Fix It
            </Typography>

            <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', mb: 5, lineHeight: 1.6 }}>
              The statistics are sobering: 8 out of 10 African sports clubs shut down within their first five years. But here's what the numbers don't tell you—most of these failures aren't due to lack of talent, passion, or potential. They fail because of preventable operational challenges...
            </Typography>

            <Button endIcon={<ArrowForward sx={{ width: 18, height: 18 }} />} sx={{
              width: 187.24, height: 48, background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', borderRadius: '10px',
              color: '#FFFFFF', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, '&:hover': { opacity: 0.9 }
            }}>
              Read Full Article
            </Button>
          </Box>

          <Box sx={{
            width: { xs: '100%', md: 501.6 }, height: { xs: 300, md: 501.6 }, backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/blog-featured-image.png)',
            backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', borderRadius: '20px', overflow: 'hidden', flexShrink: 0
          }}>
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(251, 44, 54, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)', mixBlendMode: 'overlay' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}