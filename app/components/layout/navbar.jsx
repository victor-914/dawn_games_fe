'use client'
import { AppBar, Toolbar, Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <AppBar position="sticky" elevation={0} sx={{
      background: 'linear-gradient(90deg, #0A1628 0%, #050B14 50%, #0A1628 100%)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      width: '100%'
    }}>
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        minHeight: 80, 
        width: '100%',     // Changed from 90% to 100% to give flex items room
        maxWidth: 1400,
        margin: '0 auto',
        px: { xs: 2, md: 4, lg: 0 } // Use padding instead of width % for responsiveness
      }}>
        
        <Box sx={{ width: { xs: 140, md: 180, lg: 260 }, height: 'auto', flexShrink: 0 }}>
          <Image src="/logo.png" width={260} height={62} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </Box>

        <Stack direction="row" spacing={{ md: 0, lg: 0.5 }} sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                <Box sx={{
                  minWidth: isActive ? 75.59 : 'auto',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  bgcolor: isActive ? 'rgba(255, 107, 53, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 107, 53, 0.3)' : 'none',
                  color: isActive ? '#FF6B35' : '#D1D5DC',
                  fontSize: { md: 14, lg: 16 }, // Slightly smaller font on tight screens
                  fontWeight: 400,
                  px: { md: 1.5, lg: 2 },
                  whiteSpace: 'nowrap'
                }}>
                  {link.name}
                </Box>
              </Link>
            )
          })}
        </Stack>

        <Button sx={{
          background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
          width: { xs: 110, md: 130, lg: 151.65 }, // Responsive width
          height: 48,
          borderRadius: '10px',
          color: '#FFFFFF',
          fontSize: { md: 14, lg: 16 },
          fontWeight: 400,
          flexShrink: 0,
          '&:hover': { opacity: 0.9 }
        }}>
          Request Demo
        </Button>
      </Toolbar>
    </AppBar>
  )
}