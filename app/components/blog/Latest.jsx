'use client'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { ArrowForward, AccessTime } from '@mui/icons-material'

const articles = [
  { category: 'Case Studies', readTime: '5 min', title: 'From Spreadsheets to Success: How Dawn FC Doubled Their Capacity', excerpt: 'When we first met Coach Emeka, his football academy was managing 45 young athletes across three age groups using WhatsApp, printed forms, and five different Excel spreadsheets...', image: 'https://ik.imagekit.io/4bvbtnlkl/blog-latest-1.png', tagColor: '#FF6B35', tagBg: 'rgba(255, 107, 53, 0.1)', tagBorder: 'rgba(255, 107, 53, 0.3)' },
  { category: 'E-Sports', readTime: '8 min', title: 'The E-Sports Boom in Africa: A ₦250M Opportunity', excerpt: 'While traditional sports have dominated African athletics for decades, a quiet revolution is happening in gaming cafes and living rooms across the continent...', image: 'https://ik.imagekit.io/4bvbtnlkl/blog-latest-2.png', tagColor: '#FF6B35', tagBg: 'rgba(255, 107, 53, 0.1)', tagBorder: 'rgba(255, 107, 53, 0.3)' },
  { category: 'Sports Management', readTime: '6 min', title: '10 Features Every Modern Sports Academy Needs in 2025', excerpt: 'The world has changed. Parents expect real-time updates. Athletes want data-driven training. Sponsors need visibility. Here are the tools you cannot ignore...', image: 'https://ik.imagekit.io/4bvbtnlkl/blog-latest-3.png', tagColor: '#FF6B35', tagBg: 'rgba(255, 107, 53, 0.1)', tagBorder: 'rgba(255, 107, 53, 0.3)' },
  { category: 'Financial Management', readTime: '4 min', title: 'Mobile Money Integration: Why It Matters for Sports Clubs', excerpt: 'In a continent where 60% of adults use mobile money but only 34% have traditional bank accounts, how you collect fees matters. A lot.', image: 'https://ik.imagekit.io/4bvbtnlkl/blog-latest-4.png', tagColor: '#FF6B35', tagBg: 'rgba(255, 107, 53, 0.1)', tagBorder: 'rgba(255, 107, 53, 0.3)' },
  { category: 'Community Building', readTime: '9 min', title: 'Building Gaming Communities: Lessons from Successful E-Sports Organizations', excerpt: "The best e-sports organizations aren't just tournament hosts—they're community builders. They create engaging ecosystems that keep players returning...", image: 'https://ik.imagekit.io/4bvbtnlkl/blog-latest-5.png', tagColor: '#FF6B35', tagBg: 'rgba(255, 107, 53, 0.1)', tagBorder: 'rgba(255, 107, 53, 0.3)' }
]

export default function Latest() {
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
          {articles.map((article, index) => (
            <Box key={index} sx={{
              width: { xs: '100%', md: 356.8 }, minHeight: { xs: 'auto', md: 532.96 },
              background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '24px', border: '0.8px solid rgba(255, 53, 218, 0.2)',
              p: 3, display: 'flex', flexDirection: 'column', transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(255, 53, 218, 0.5)' }
            }}>
              <Box sx={{
                width: '100%', height: 163.8, borderRadius: '16.4px', border: '0.8px solid rgba(255, 53, 218, 0.2)',
                backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center', mb: 3
              }} />

              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{
                  px: 1.5, height: 29.6, bgcolor: article.tagBg, border: `0.8px solid ${article.tagBorder}`,
                  borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 12, color: article.tagColor, fontWeight: 400, whiteSpace: 'nowrap' }}>
                    {article.category}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <AccessTime sx={{ color: '#99A1AF', fontSize: 16 }} />
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#99A1AF' }}>{article.readTime}</Typography>
                </Stack>
              </Stack>

              <Typography variant="h3" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 24, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
                {article.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF', mb: 3, lineHeight: 1.5, flex: 1 }}>
                {article.excerpt}
              </Typography>

              <Button endIcon={<ArrowForward sx={{ width: 18, height: 18 }} />} sx={{
                p: 0, justifyContent: 'flex-start', color: '#FF6B35', textTransform: 'none',
                fontSize: 16, fontFamily: 'Inter', fontWeight: 400, '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
              }} disableRipple>
                Read More
              </Button>
            </Box>
          ))}
          <Box sx={{ width: { xs: '100%', md: 356.8 }, height: 0, visibility: 'hidden', display: { xs: 'none', md: 'block' } }} />
        </Box>
      </Container>
    </Box>
  )
}