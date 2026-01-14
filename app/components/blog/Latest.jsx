'use client'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { ArrowForward, AccessTime } from '@mui/icons-material'
import { useBlog } from '@/app/hooks/useBlog'
import { getStrapiImageUrl } from "@/app/utils/api"

export default function Latest() {
  const { data, isLoading, error } = useBlog()

  if (isLoading) {
    return (
      <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)', py: 10, textAlign: 'center' }}>
        <Typography sx={{ color: '#99A1AF' }}>Loading articles...</Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)', py: 10, textAlign: 'center' }}>
        <Typography sx={{ color: '#FF6B35' }}>Error loading articles. Please check backend connection.</Typography>
      </Box>
    )
  }

  const posts = data?.data || []

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 32, md: 36 }, color: '#FFFFFF', mb: 2 }}>
            Latest Articles
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC' }}>
            Stay informed with the latest trends and insights
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {posts.map((post) => {
            const imageUrl = getStrapiImageUrl(post.img)
            
            return (
              <Box key={post.id} sx={{
                width: { xs: '100%', md: 356.8 }, minHeight: { xs: 'auto', md: 532.96 },
                background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
                borderRadius: '24px', border: '0.8px solid rgba(255, 53, 218, 0.2)',
                p: 3, display: 'flex', flexDirection: 'column', transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 53, 218, 0.5)', cursor: 'pointer' }
              }}>
                <Box sx={{
                  width: '100%', height: 163.8, borderRadius: '16.4px', border: '0.8px solid rgba(255, 53, 218, 0.2)',
                  backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', 
                  bgcolor: imageUrl ? 'transparent' : '#1A2744',
                  backgroundSize: 'cover', backgroundPosition: 'center', mb: 3,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {!imageUrl && <Typography sx={{ color: '#99A1AF' }}>No Image</Typography>}
                </Box>

                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                  <Box sx={{
                    px: 1.5, height: 29.6, bgcolor: 'rgba(255, 107, 53, 0.1)', 
                    border: '0.8px solid rgba(255, 107, 53, 0.3)',
                    borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 12, color: '#FF6B35', fontWeight: 400, whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
                      {post.catergory || 'General'}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <AccessTime sx={{ color: '#99A1AF', fontSize: 16 }} />
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#99A1AF' }}>
                      {post.duration ? `${post.duration} min read` : "5 min read"}
                    </Typography>
                  </Stack>
                </Stack>

                <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 24, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
                  {post.title}
                </Typography>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF', mb: 3, lineHeight: 1.5, flex: 1 }}>
                  {post.content?.substring(0, 150)}...
                </Typography>

                <Button 
                  href={`/blog/${post.documentId || post.id}`}
                  endIcon={<ArrowForward sx={{ width: 18, height: 18 }} />} 
                  sx={{
                    p: 0, justifyContent: 'flex-start', color: '#FF6B35', textTransform: 'none',
                    fontSize: 16, fontFamily: 'Inter', fontWeight: 400, 
                    '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
                  }} 
                  disableRipple
                >
                  Read More
                </Button>
              </Box>
            )
          })}
          <Box sx={{ width: { xs: '100%', md: 356.8 }, height: 0, visibility: 'hidden', display: { xs: 'none', md: 'block' } }} />
        </Box>
      </Container>
    </Box>
  )
}