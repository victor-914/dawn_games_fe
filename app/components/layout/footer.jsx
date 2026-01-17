'use client'
import Link from 'next/link'
import { Box, Container, Typography, Stack, InputBase, Button } from '@mui/material'
import Image from 'next/image'
import { EmailOutlined, PhoneOutlined, LocationOnOutlined, Twitter, LinkedIn, Facebook, Instagram, YouTube } from '@mui/icons-material'

const footerSections = [
  { title: 'Product', links: ['Sports Club Management', 'E-Sports Platform', 'Game Development', 'Pricing'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Contact', 'FAQ'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] }
]
const socialIcons = [Twitter, LinkedIn, Facebook, Instagram, YouTube]

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#050B14', borderTop: '1px solid #1A2744', pt: 10, pb: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: { xs: 6, md: 2, lg: 8 }, mb: 8 }}>
          <Box sx={{ maxWidth: { xs: '100%', md: 280, lg: 357 }, flexShrink: 0 }}>
            <Box sx={{ width: { md: 160, lg: 201 }, height: { md: 40, lg: 48 }, mb: 3, position: 'relative' }}>
              <Image src="/logo.png" fill style={{ objectFit: 'contain' }} alt="Dawn Games" />
            </Box>
            <Stack spacing={2} sx={{ color: '#99A1AF' }}>
              <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 13, lg: 16 }, lineHeight: 1.6 }}>Powering excellence in African sports through world-class technology. Part of Cognix Group.</Typography>
              <Stack direction="row" spacing={1.5} alignItems="center"><EmailOutlined sx={{ fontSize: { md: 18, lg: 20 } }} /><Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 13, lg: 16 } }}>info@cognixtech.org</Typography></Stack>
              <Stack direction="row" spacing={1.5} alignItems="center"><PhoneOutlined sx={{ fontSize: { md: 18, lg: 20 } }} /><Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 13, lg: 16 } }}>+234 708 311 4936</Typography></Stack>
              <Stack direction="row" spacing={1.5} alignItems="start"><LocationOnOutlined sx={{ fontSize: { md: 18, lg: 20 }, mt: 0.5 }} /><Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 13, lg: 16 } }}>Enugu, Enugu State, Nigeria</Typography></Stack>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1, gap: 4 }}>
            {footerSections.map(({ title, links }) => (
              <Box key={title} sx={{ minWidth: { xs: '45%', md: 'auto' } }}>
                <Typography variant="h5" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 18, md: 16, lg: 20 }, color: '#FFFFFF', mb: 3 }}>{title}</Typography>
                <Stack spacing={1.5}>
                  {links.map(link => {
                    const href = title === 'Product' ? (link === 'Pricing' ? '/pricing' : '/solutions') : 
                                 title === 'Company' ? (link === 'About Us' ? '/about' : link === 'Blog' ? '/blog' : link === 'Contact' ? '/contact' : '/faq') :
                                 title === 'Legal' ? (link === 'Privacy Policy' ? '/legal/dawngames-privacy' : '/legal/dawngames-terms') : '#'
                    return (
                      <Typography key={link} component={Link} href={href} sx={{ fontFamily: 'Inter', fontSize: { xs: 15, md: 13, lg: 16 }, color: '#99A1AF', cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', '&:hover': { color: '#FF6B35' } }}>
                        {link}
                      </Typography>
                    )
                  })}
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ borderTop: '1px solid #1A2744', borderBottom: '1px solid #1A2744', py: 6, mb: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
            <Box>
              <Typography variant="h5" sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 24, md: 20, lg: 24 }, color: '#FFFFFF', mb: 1 }}>Stay Ahead of the Game</Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 16, md: 14, lg: 16 }, color: '#99A1AF' }}>Get weekly insights on sports management and e-sports trends.</Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={{ width: { xs: '100%', md: 'auto' }, alignItems: 'center' }}>
              <InputBase placeholder="Enter your email" sx={{ width: { xs: '100%', md: 240, lg: 300 }, bgcolor: '#1A2744', border: '0.8px solid #364153', borderRadius: '10px 0 0 10px', color: '#FFFFFF', px: 2, py: 1.5, height: 52, fontFamily: 'Inter', fontSize: { xs: 16, md: 14, lg: 16 }, '& input::placeholder': { color: '#6A7282', opacity: 1 } }} />
              <Button sx={{ background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', borderRadius: '0 10px 10px 0', color: '#FFFFFF', px: { md: 3, lg: 4 }, py: 1.5, textTransform: 'none', fontSize: { xs: 16, md: 14, lg: 16 }, fontFamily: 'Inter', height: 52, flexShrink: 0, '&:hover': { opacity: 0.9 } }}>Subscribe</Button>
            </Stack>
          </Box>
        </Box>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={3}>
          <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 14, md: 13, lg: 16 }, color: '#99A1AF' }}>© 2025 Dawn Games. A Cognix Group Company. All rights reserved.</Typography>
          <Stack direction="row" spacing={2}>
            {socialIcons.map((Icon, i) => (
              <Box key={i} sx={{ width: { md: 32, lg: 40 }, height: { md: 32, lg: 40 }, bgcolor: '#1A2744', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.2s', '&:hover': { bgcolor: '#2A3754' } }}><Icon sx={{ color: '#99A1AF', fontSize: { md: 16, lg: 20 } }} /></Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}