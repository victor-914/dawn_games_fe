'use client'
import { useState } from 'react'
import { Box, Container, Typography, InputBase, Button, Stack, Collapse, IconButton } from '@mui/material'
import { Search, KeyboardArrowDown, KeyboardArrowUp, Lightbulb, AttachMoney, Public, SportsEsports, RocketLaunch } from '@mui/icons-material'
import { useFaq } from '@/app/hooks/useFaq'

const filters = [
  { label: 'All Questions', icon: null },
  { label: 'General Questions', icon: <Lightbulb sx={{ width: 20, height: 20 }} /> },
  { label: 'Financial Questions', icon: <AttachMoney sx={{ width: 20, height: 20 }} /> },
  { label: 'Feature-Specific', icon: <Public sx={{ width: 20, height: 20 }} /> },
  { label: 'E-Sports', icon: <SportsEsports sx={{ width: 20, height: 20 }} /> },
  { label: 'Game Development', icon: <RocketLaunch sx={{ width: 20, height: 20 }} /> },
]

export default function Questions() {
  const { data } = useFaq()
  const [activeFilter, setActiveFilter] = useState('All Questions')
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  const faqs = data?.data || []
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesFilter = activeFilter === 'All Questions' || faq.category === activeFilter
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Box sx={{ bgcolor: '#050B14' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
        <Box sx={{
          width: { xs: '100%', md: 832 }, height: 61.6, bgcolor: '#0A1628', border: '0.8px solid #364153',
          borderRadius: '16.4px', display: 'flex', alignItems: 'center', px: 3, mt: 5, mb: 5
        }}>
          <Search sx={{ color: '#99A1AF', width: 24, height: 24, mr: 2 }} />
          <InputBase 
            placeholder="Search for answers..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, fontFamily: 'Inter', fontSize: 18, color: '#FFFFFF', '& ::placeholder': { color: '#6A7282', opacity: 1 } }} 
          />
        </Box>

        <Box sx={{ width: '100%', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
          <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'center' }} sx={{ minWidth: 'max-content', px: 2, pb: 2 }}>
            {filters.map((filter, index) => (
              <Button key={index} onClick={() => setActiveFilter(filter.label)} startIcon={filter.icon} sx={{
                height: 48, px: 2, borderRadius: '10px', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', whiteSpace: 'nowrap',
                ...(activeFilter === filter.label
                  ? { background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)', color: '#FFFFFF', boxShadow: '0px 4px 20px rgba(255, 107, 53, 0.3)' }
                  : { bgcolor: '#1A2744', color: '#99A1AF', '&:hover': { bgcolor: '#233253', color: '#FFFFFF' } })
              }}>
                {filter.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>

      <Box sx={{
        width: '100%', minHeight: { xs: 'auto', md: 1923 }, backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/faq-questions-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'top center', pt: 5, pb: 10
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {filteredFaqs.map((faq, index) => (
            <Box key={faq.id} onClick={() => setExpanded(expanded === index ? null : index)} sx={{
              width: { xs: '100%', md: 832 }, minHeight: 77.6, background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
              borderRadius: '16px', border: '0.8px solid rgba(255, 107, 53, 0.2)', overflow: 'hidden', cursor: 'pointer',
              transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(255, 107, 53, 0.5)' }
            }}>
              <Box sx={{ minHeight: 77.6, px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 18 }, color: '#FFFFFF' }}>{faq.question}</Typography>
                <IconButton sx={{ color: '#FF6B35' }}>
                  {expanded === index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </Box>
              <Collapse in={expanded === index}>
                <Box sx={{ px: 4, pb: 4 }}>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#D1D5DC', lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  )
}