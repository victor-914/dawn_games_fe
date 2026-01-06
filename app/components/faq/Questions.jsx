'use client'
import { useState } from 'react'
import { Box, Container, Typography, InputBase, Button, Stack, Collapse, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PublicIcon from '@mui/icons-material/Public'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const filters = [
  { label: 'All Questions', icon: null },
  { label: 'General Questions', icon: <LightbulbIcon sx={{ width: 20, height: 20 }} /> },
  { label: 'Financial Questions', icon: <AttachMoneyIcon sx={{ width: 20, height: 20 }} /> },
  { label: 'Feature-Specific', icon: <PublicIcon sx={{ width: 20, height: 20 }} /> },
  { label: 'E-Sports', icon: <SportsEsportsIcon sx={{ width: 20, height: 20 }} /> },
  { label: 'Game Development', icon: <RocketLaunchIcon sx={{ width: 20, height: 20 }} /> },
]

const questions = [
  "How is Dawn Games different from other sports management software?",
  "Is Dawn Games part of Cognix Group?",
  "Are there setup fees?",
  "Can I cancel anytime?",
  "Do you offer discounts?",
  "What happens if I exceed my athlete limit?",
  "Can I customize the platform to match my brand?",
  "Can parents and athletes access the system?",
  "How does tournament management work?",
  "Can I sell merchandise or tickets through the platform?",
  "Do you support multi-location organizations?",
  "What games does your e-sports platform support?",
  "Can we stream tournaments through your platform?",
  "How does player ranking work?",
  "Can we host online and offline tournaments?",
  "Do I need to be a developer to publish games?",
  "What's the revenue split for published games?",
  "How do you help with game marketing?",
  "What platforms can I publish to?"
]

export default function Questions() {
  const [activeFilter, setActiveFilter] = useState('All Questions')
  const [expanded, setExpanded] = useState(null)

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <Box sx={{ bgcolor: '#050B14' }}>
      
      {/* --- Top Section: Search & Filters --- */}
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
        
        {/* Search Bar */}
        <Box sx={{
          width: { xs: '100%', md: 832 },
          height: 61.6,
          bgcolor: '#0A1628',
          border: '0.8px solid #364153',
          borderRadius: '16.4px',
          display: 'flex',
          alignItems: 'center',
          px: 3,
          mt: 5,
          mb: 5
        }}>
          <SearchIcon sx={{ color: '#99A1AF', width: 24, height: 24, mr: 2 }} />
          <InputBase
            placeholder="Search for answers..."
            sx={{
              flex: 1,
              fontFamily: 'Inter',
              fontSize: 18,
              color: '#FFFFFF',
              '& ::placeholder': {
                color: '#6A7282',
                opacity: 1
              }
            }}
          />
        </Box>

        {/* Filters */}
        <Box sx={{ 
          width: '100%', 
          overflowX: 'auto', 
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none'
        }}>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ minWidth: 'max-content', px: 2 }}>
            {filters.map((filter, index) => {
              const isActive = activeFilter === filter.label
              return (
                <Button
                  key={index}
                  onClick={() => setActiveFilter(filter.label)}
                  startIcon={filter.icon}
                  sx={{
                    height: 48,
                    px: 2,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                    ...(isActive ? {
                      background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
                      color: '#FFFFFF',
                      boxShadow: '0px 4px 20px rgba(255, 107, 53, 0.3)',
                      '&:hover': { opacity: 0.9 }
                    } : {
                      bgcolor: '#1A2744',
                      color: '#99A1AF',
                      '&:hover': { bgcolor: '#233253', color: '#FFFFFF' },
                      '& .MuiButton-startIcon': { color: '#99A1AF' }
                    })
                  }}
                >
                  {filter.label}
                </Button>
              )
            })}
          </Stack>
        </Box>
      </Container>

      {/* --- Bottom Section: Questions List with BG Image --- */}
      <Box sx={{
        width: '100%',
        minHeight: 1923, // Specified height
        backgroundImage: 'url(/faq-questions-bg.png)', // The background image
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        pt: 5,
        pb: 10
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {questions.map((question, index) => (
            <Box 
              key={index}
              onClick={() => handleToggle(index)}
              sx={{
                width: { xs: '100%', md: 832 },
                minHeight: 77.6,
                background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
                borderRadius: '16px',
                border: '0.8px solid rgba(255, 107, 53, 0.2)', // FF6B35 20%
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'rgba(255, 107, 53, 0.5)'
                }
              }}
            >
              {/* Question Header */}
              <Box sx={{
                minHeight: 77.6,
                px: 4,
                py: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontSize: 18,
                  color: '#FFFFFF',
                  fontWeight: 400
                }}>
                  {question}
                </Typography>
                
                <IconButton sx={{ color: '#FF6B35' }}>
                  {expanded === index ? 
                    <KeyboardArrowUpIcon sx={{ width: 24, height: 24 }} /> : 
                    <KeyboardArrowDownIcon sx={{ width: 24, height: 24 }} />
                  }
                </IconButton>
              </Box>

              {/* Answer Content */}
              <Collapse in={expanded === index}>
                <Box sx={{ px: 4, pb: 4 }}>
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    color: '#D1D5DC',
                    lineHeight: 1.6
                  }}>
                    Dawn Games offers an all-in-one solution that integrates player development, facility management, and fan engagement tools specifically tailored for the African market, unlike generic software.
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