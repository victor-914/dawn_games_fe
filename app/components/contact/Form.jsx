'use client'
import { Box, Container, Typography, InputBase, Button } from '@mui/material'
import { Send } from '@mui/icons-material'

const Label = ({ children }) => <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FFFFFF', mb: 1 }}>{children}</Typography>
const Input = (props) => (
  <InputBase {...props} sx={{
    width: '100%', height: props.multiline ? 'auto' : 49.6, minHeight: props.multiline ? 169.6 : undefined,
    bgcolor: '#0A1628', border: '0.8px solid #364153', borderRadius: '10px', color: '#FFFFFF',
    fontFamily: 'Inter', fontSize: 16, p: props.multiline ? 2 : '0 16px',
    alignItems: props.multiline ? 'flex-start' : 'center', '& ::placeholder': { color: '#6A7282', opacity: 1 }, ...props.sx
  }} />
)

export default function Form() {
  return (
    <Box sx={{ width: '100%', background: 'linear-gradient(180deg, #0A1628 0%, #050B14 50%, #0A1628 100%)', py: { xs: 8, md: 10 }, display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, color: '#FFFFFF', mb: 2 }}>
            Send Us a Message
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 20 }, color: '#D1D5DC', maxWidth: 700 }}>
            Fill out the form below and we'll get back to you within 24 hours
          </Typography>
        </Box>

        <Box sx={{
          width: '100%', maxWidth: 864, background: 'linear-gradient(180deg, #1A2744 0%, #050B14 100%)',
          borderRadius: '24px', border: '0.8px solid rgba(255, 107, 53, 0.2)', p: { xs: 3, md: 6 },
          display: 'flex', flexDirection: 'column', gap: 4
        }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}><Label>Full Name *</Label><Input placeholder="John Doe" /></Box>
            <Box sx={{ flex: 1 }}><Label>Email Address *</Label><Input placeholder="john@example.com" /></Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}><Label>Phone Number</Label><Input placeholder="+234 XXX XXX XXXX" /></Box>
            <Box sx={{ flex: 1 }}><Label>Organization</Label><Input placeholder="Your Academy/Club Name" /></Box>
          </Box>
          <Box><Label>I'm interested in *</Label><Input placeholder="" /></Box>
          <Box><Label>Message *</Label><Input multiline minRows={6} placeholder="Tell us about your institution and how we can help..." /></Box>

          <Button endIcon={<Send sx={{ width: 20, height: 20 }} />} sx={{
            width: '100%', height: 48, background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
            borderRadius: '10px', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400,
            color: '#FFFFFF', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', '&:hover': { opacity: 0.9 }, mt: 2
          }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  )
}