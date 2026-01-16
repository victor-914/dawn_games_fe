'use client'
import { Box, Container, Typography, Stack, Button, Chip } from '@mui/material'
import { EmojiEvents, SportsEsports, Code, Person, Videocam, Psychology, BarChart, Diversity3, AttachMoney, Workspaces, Language } from '@mui/icons-material'

const sections = [
  {
    title: 'SPORTS CLUB',
    subtitle: 'MANAGEMENT',
    desc: 'AI-powered sports management platform with performance analytics, video analysis, and cognitive training for athletes.',
    color: '#00D3F2',
    icon: <EmojiEvents sx={{ fontSize: 28, color: '#00D3F2' }} />,
    btn: 'Explore Sports Solutions',
    features: [
      { icon: <Person sx={{ fontSize: 18, color: '#00D3F2' }} />, label: 'Complete Athlete Management', desc: 'Manage profiles, schedules, billing, and communication in one platform' },
      { icon: <Videocam sx={{ fontSize: 18, color: '#00D3F2' }} />, label: 'AI Video Analysis', desc: 'Computer vision for automatic player tracking, heat maps, and performance metrics' },
      { icon: <Psychology sx={{ fontSize: 18, color: '#00D3F2' }} />, label: 'Cognitive Enhancement', desc: 'AI-powered cognitive training for reaction time, decision-making, and pattern recognition' },
      { icon: <BarChart sx={{ fontSize: 18, color: '#00D3F2' }} />, label: 'Performance Analytics', desc: 'Track physical metrics, predict player development, optimize training loads' }
    ],
    img: 'https://ik.imagekit.io/4bvbtnlkl/Container.png'
  },
  {
    title: 'ESPORTS',
    subtitle: 'TOURNAMENT PLATFORM',
    desc: 'Complete tournament hosting and talent management platform with streaming integration, player analytics, and sponsorship tracking.',
    color: '#C27AFF',
    icon: <SportsEsports sx={{ fontSize: 28, color: '#C27AFF' }} />,
    btn: 'Explore Esports Solutions',
    features: [
      { icon: <EmojiEvents sx={{ fontSize: 18, color: '#C27AFF' }} />, label: 'Tournament Management', desc: 'Host unlimited tournaments with advanced bracket formats and automated prize distribution' },
      { icon: <Diversity3 sx={{ fontSize: 18, color: '#C27AFF' }} />, label: 'Talent Management', desc: 'Manage players, contracts, sponsorships, and streaming revenue in one place' },
      { icon: <BarChart sx={{ fontSize: 18, color: '#C27AFF' }} />, label: 'Performance Analytics', desc: 'Track win rates, ELO rankings, KDA stats, and AI-powered player scouting' },
      { icon: <Videocam sx={{ fontSize: 18, color: '#C27AFF' }} />, label: 'Professional Broadcasting', desc: 'Multi-platform streaming with custom overlays, replay generation, and sponsor integration' }
    ],
    img: 'https://ik.imagekit.io/4bvbtnlkl/Container%20(5).png'
  },
  {
    title: 'GAME DEVELOPMENT',
    subtitle: '& PUBLISHING',
    desc: 'End-to-end game development infrastructure with African-focused assets, monetization tools, and publishing support.',
    color: '#FB64B6',
    icon: <Code sx={{ fontSize: 28, color: '#FB64B6' }} />,
    btn: 'Explore Game Dev Solutions',
    features: [
      { icon: <Code sx={{ fontSize: 18, color: '#FB64B6' }} />, label: 'Development Tools', desc: 'Unity/Unreal templates, African asset library, backend infrastructure, and Git CD pipeline' },
      { icon: <AttachMoney sx={{ fontSize: 18, color: '#FB64B6' }} />, label: 'Monetization & Analytics', desc: 'Mobile money integration, AI pricing optimization, churn prediction, and LTV calculation' },
      { icon: <Workspaces sx={{ fontSize: 18, color: '#FB64B6' }} />, label: 'Publishing Support', desc: 'ASO services, localization, influencer campaigns, and publisher introductions' },
      { icon: <Language sx={{ fontSize: 18, color: '#FB64B6' }} />, label: 'Strategic Partnerships', desc: 'Direct partnerships with major studios, investment facilitation, and IP licensing' }
    ],
    img: 'https://ik.imagekit.io/4bvbtnlkl/Container%20(6).png'
  }
]

export default function HeroSection() {
  return (
    <Box sx={{ bgcolor: '#050B14', color: 'white' }}>
      <Box sx={{width: '100%', position: 'relative', py: { xs: 8, md: 18 }, textAlign: 'center', backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/29953750_sl_033021_41820_13.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(5, 11, 20, 0.9)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 3 } }}>
          <Chip label="🚀 NEXT-GEN TECHNOLOGY" sx={{ mb: 4, bgcolor: 'rgba(0, 229, 255, 0.15)', color: '#00D3F2', border: '1px solid rgba(0, 184, 219, 0.3)', fontWeight: 600, fontSize: { xs: 12, md: 14 }, fontFamily: "Inter", px: 2, py: 2.5 }} />
          <Typography variant="h1" sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, fontSize: { xs: 32, sm: 40, md: 48 }, mb: 3, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.1 }}>
            SOLUTIONS BUILT FOR AFRICA
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 20 }, fontFamily: "Inter", color: '#99A1AF', maxWidth: 694, mx: 'auto', lineHeight: 1.6 }}>
            Transform your sports organization, esports operation, or game studio with AI-powered technology designed for the African market.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ bgcolor: "#0a1628", py: { xs: 6, md: 12 }, px: { xs: 2, md: 6 } }}>
        {sections.map((s, i) => (
          <Box key={i} sx={{ display: 'flex', flexDirection: { xs: 'column', md: i % 2 === 1 ? 'row-reverse' : 'row' }, gap: { xs: 6, md: 8 }, justifyContent: 'space-between', alignItems: 'center', mb: { xs: 10, md: 20 } }}>
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '48%' }, maxWidth: { md: 600 } }}>
              <Stack spacing={4}>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2}>
                  <Box sx={{ p: 1.5, borderRadius: 2.5, bgcolor: `${s.color}20`, border: `1px solid ${s.color}40` }}>{s.icon}</Box>
                  <Box>
                    <Typography sx={{ color: s.color, fontWeight: 700, letterSpacing: 1.5, fontSize: { xs: 24, md: 36 }, fontFamily: "Inter" }}>{s.title}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: 24, md: 30 }, fontFamily: "Inter", letterSpacing: '-0.01em' }}>{s.subtitle}</Typography>
                  </Box>
                </Stack>
                <Typography sx={{ color: '#D1D5DC', fontSize: { xs: 16, md: 20 }, fontFamily: "Inter", lineHeight: 1.7 }}>{s.desc}</Typography>
                <Stack spacing={2.5}>
                  {s.features.map((f, idx) => (
                    <Stack key={idx} direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{ mt: 0.5, width: 24, height: 24, flexShrink: 0 }}>{f.icon}</Box>
                      <Box>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: 16, fontFamily: "Inter", mb: 0.5 }}>{f.label}</Typography>
                        <Typography sx={{ color: '#99A1AF', fontSize: 14, fontFamily: "Inter", lineHeight: 1.6 }}>{f.desc}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Button variant="contained" sx={{ bgcolor: s.color, color: '#ffffff', width: { xs: '100%', sm: 'fit-content' }, py: 1.75, px: 4.5, fontWeight: 700, fontSize: 16, fontFamily: "Inter", borderRadius: 2, textTransform: 'none', boxShadow: `0 4px 20px ${s.color}40`, '&:hover': { bgcolor: s.color, opacity: 0.9, boxShadow: `0 6px 25px ${s.color}60` } }}>
                  {s.btn}
                </Button>
              </Stack>
            </Box>
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '48%' }, maxWidth: { md: 600 } }}>
              <img src={s.img} alt={s.subtitle} style={{ width: '100%', height: 'auto', borderRadius: 16 }} />
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  )
}