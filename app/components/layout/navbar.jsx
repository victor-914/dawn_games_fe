'use client'
import { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Stack, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Solutions', path: '/solutions' }, { name: 'Pricing', path: '/pricing' }, { name: 'Blog', path: '/blog' }, { name: 'FAQ', path: '/faq' }, { name: 'Contact', path: '/contact' }]

export default function Navbar() {
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClose = () => setAnchorEl(null)

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: 'linear-gradient(90deg, #0A1628 0%, #050B14 50%, #0A1628 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)', width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80, width: '100%', maxWidth: 1400, margin: '0 auto', px: { xs: 2, md: 4, lg: 0 } }}>
        
        <Box sx={{ width: { xs: 140, md: 180, lg: 260 }, flexShrink: 0 }}>
          <Image src="/logo.png" width={260} height={62} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </Box>

        <Stack direction="row" spacing={{ md: 0, lg: 0.5 }} sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
          {navLinks.map(({ name, path }) => {
            const active = pathname === path
            return (
              <Link key={name} href={path} style={{ textDecoration: 'none' }}>
                <Box sx={{ minWidth: active ? 75.59 : 'auto', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', bgcolor: active ? 'rgba(255, 107, 53, 0.1)' : 'transparent', border: active ? '1px solid rgba(255, 107, 53, 0.3)' : 'none', color: active ? '#FF6B35' : '#D1D5DC', fontSize: { md: 14, lg: 16 }, fontWeight: 400, px: { md: 1.5, lg: 2 }, whiteSpace: 'nowrap' }}>
                  {name}
                </Box>
              </Link>
            )
          })}
        </Stack>

        <Button sx={{ display: { xs: 'none', md: 'flex' }, background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', width: { md: 130, lg: 151.65 }, height: 48, borderRadius: '10px', color: '#FFFFFF', fontSize: { md: 14, lg: 16 }, fontWeight: 400, flexShrink: 0, '&:hover': { opacity: 0.9 } }}>
          Request Demo
        </Button>

        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ display: { xs: 'flex', md: 'none' }, color: '#FFFFFF' }}>
          <MenuIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ sx: { bgcolor: '#0A1628', color: '#FFF', width: 200 } }}>
          {navLinks.map(({ name, path }) => (
            <MenuItem key={name} onClick={handleClose} component={Link} href={path} sx={{ color: pathname === path ? '#FF6B35' : '#D1D5DC' }}>{name}</MenuItem>
          ))}
          <MenuItem sx={{ mt: 1 }}>
            <Button fullWidth sx={{ background: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', color: '#FFF' }}>Request Demo</Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}