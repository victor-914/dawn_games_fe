'use client'
import { Box, Container, Typography, InputBase, Button, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

// Reusable Label
const FormLabel = ({ children }) => (
  <Typography sx={{
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 400,
    mb: 1
  }}>
    {children}
  </Typography>
)

// Reusable Input
const CustomInput = ({ placeholder, multiline = false, rows = 1, ...props }) => (
  <InputBase
    placeholder={placeholder}
    multiline={multiline}
    minRows={rows}
    sx={{
      width: '100%',
      height: multiline ? 'auto' : 49.6,
      minHeight: multiline ? 169.6 : undefined,
      bgcolor: '#0A1628',
      border: '0.8px solid #364153',
      borderRadius: '10px',
      color: '#FFFFFF',
      fontFamily: 'Inter',
      fontSize: 16,
      p: multiline ? 2 : '0 16px',
      alignItems: multiline ? 'flex-start' : 'center',
      '& ::placeholder': {
        color: '#6A7282',
        opacity: 1
      },
      ...props.sx
    }}
    {...props}
  />
)

export default function Form() {
  return (
    <Box sx={{
      width: '100%',
      background: 'linear-gradient(180deg, #0A1628 0%, #050B14 50%, #0A1628 100%)',
      py: 10,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* --- Header --- */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 28, md: 36 },
            color: '#FFFFFF',
            mb: 2
          }}>
            Send Us a Message
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 16, md: 20 },
            color: '#D1D5DC',
            maxWidth: 700
          }}>
            Fill out the form below and we'll get back to you within 24 hours
          </Typography>
        </Box>

        {/* --- Form Container (Flex) --- */}
        <Box sx={{
          width: '100%',
          maxWidth: 864,
          background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
          borderRadius: '24px',
          border: '0.8px solid rgba(255, 107, 53, 0.2)',
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
          
          {/* Row 1: Name & Email */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 4 
          }}>
            <Box sx={{ flex: 1 }}>
              <FormLabel>Full Name *</FormLabel>
              <CustomInput placeholder="John Doe" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FormLabel>Email Address *</FormLabel>
              <CustomInput placeholder="john@example.com" />
            </Box>
          </Box>

          {/* Row 2: Phone & Organization */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 4 
          }}>
            <Box sx={{ flex: 1 }}>
              <FormLabel>Phone Number</FormLabel>
              <CustomInput placeholder="+234 XXX XXX XXXX" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FormLabel>Organization</FormLabel>
              <CustomInput placeholder="Your Academy/Club Name" />
            </Box>
          </Box>

          {/* Row 3: Interested In */}
          <Box sx={{ width: '100%' }}>
            <FormLabel>I'm interested in *</FormLabel>
            <CustomInput placeholder="" />
          </Box>

          {/* Row 4: Message */}
          <Box sx={{ width: '100%' }}>
            <FormLabel>Message *</FormLabel>
            <CustomInput 
              multiline 
              rows={6} 
              placeholder="Tell us about your institution and how we can help..." 
            />
          </Box>

          {/* Row 5: Button (Centered Flex Container) */}
          <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center',
            mt: 2 
          }}>
            <Button
              endIcon={<SendIcon sx={{ width: 20, height: 20 }} />}
              sx={{
                width: '100%', // Full width inside the container as per image
                height: 48,
                background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
                borderRadius: '10px',
                textTransform: 'none',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: 400,
                color: '#FFFFFF',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                '&:hover': { opacity: 0.9 }
              }}
            >
              Send Message
            </Button>
          </Box>

        </Box>

      </Container>
    </Box>
  )
}