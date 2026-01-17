'use client'
import { useState } from 'react'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { Check, Star, Bolt, StarBorder, DiamondOutlined, SportsEsports, Code, EmojiEvents } from '@mui/icons-material'

const themeColors = { sports: { main: '#00D3F2', dark: '#00B8DB', bg: 'rgba(0, 184, 219, 0.1)', border: 'rgba(0, 184, 219, 0.5)' }, esports: { main: '#AD46FF', dark: '#8B2FD9', bg: 'rgba(173, 70, 255, 0.1)', border: 'rgba(173, 70, 255, 0.5)' }, gamedev: { main: '#F6339A', dark: '#D92679', bg: 'rgba(246, 51, 154, 0.1)', border: 'rgba(246, 51, 154, 0.5)' } }

const categories = { sports: { title: 'SPORTS MANAGEMENT', subtitle: 'Manage athletes and teams with professional tools', plans: [ { title: 'STARTER', price: '$200', frequency: '/mo', description: 'Up to 50 athletes', icon: <Bolt sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['Athlete profile management (50 max)', 'Training session scheduling', 'Parent/athlete communication portal', 'Automated invoicing & billing', 'Basic performance reports', 'Attendance tracking', 'Email support (48h response)'], tagline: 'Best for youth academies & school programs' }, { title: 'PROFESSIONAL', price: '$600', frequency: '/mo', description: 'Up to 150 athletes', saveText: 'Save $1,200 on annual plan', icon: <StarBorder sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', popular: true, features: ['Everything in Starter, plus:', 'Multi-team management', 'AI video analysis (50 hrs/mo)', 'Heat maps & movement patterns', 'Physical performance metrics', 'Opponent scouting reports', 'Cognitive training (5 athletes)', 'Custom branded mobile app', 'Priority support (24h response)'], tagline: 'Best for professional clubs & academies' }, { title: 'ENTERPRISE', price: 'Custom', frequency: '', description: 'Starting at $2,000/mo', icon: <DiamondOutlined sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['Everything in Professional, plus:', 'Unlimited athletes & teams', 'Unlimited video analysis', 'Real-time match analytics', 'Injury prevention AI alerts', 'Custom ML models', 'White-label mobile app', 'Dedicated account manager', '24/7 phone + email support'], tagline: 'Best for premier clubs & federations' } ] }, esports: { title: 'ESPORTS PLATFORM', subtitle: 'Host tournaments and manage talent', plans: [ { title: 'COMMUNITY', price: '$150', frequency: '/mo', description: 'Host 10 tournaments/mo', icon: <SportsEsports sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['Up to 80 participants', 'Basic bracket management', 'Automated registration', 'Prize pool tracking', 'Player profiles & stats'], tagline: 'Best for community organizers' }, { title: 'COMPETITOR', price: '$400', frequency: '/mo', description: 'Unlimited tournaments', saveText: 'Most popular for agencies', icon: <EmojiEvents sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', popular: true, features: ['Up to 500 participants', 'Advanced bracket formats', '10+ games support', 'Advanced ELO ranking', 'Contract management', 'Sponsorship tracking'], tagline: 'Best for esports agencies' }, { title: 'PRO LEAGUE', price: 'Custom', frequency: '', description: 'Starting at $1,000/mo', icon: <DiamondOutlined sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['5,000+ participants', 'League season management', 'Franchise management', 'White-label platform', 'Anti-cheat integration', 'AI player scouting'], tagline: 'Best for pro leagues' } ] }, gamedev: { title: 'GAME DEVELOPMENT', subtitle: 'Build and launch games with African-focused tools', plans: [ { title: 'INDIE', price: '$300', frequency: '/mo', description: 'For solo developers and small teams (1-3 people)', icon: <Code sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['Game development templates', 'African-focused asset library', 'Backend infrastructure', '1 active game project', 'Cross-platform build support', '100GB storage', 'Up to 10,000 MAU', 'In-app purchase integration', 'Player analytics', 'App store listing assistance'], tagline: 'For solo developers' }, { title: 'STUDIO', price: '$800', frequency: '/mo', description: 'For professional studios (4-10 people)', saveText: 'Most Popular', icon: <StarBorder sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', popular: true, features: ['Everything in Indie, plus:', 'Up to 3 active game projects', '500GB storage', 'Up to 100,000 MAU per game', 'Multiplayer networking', 'Console deployment support', 'CI/CD pipeline', 'Optimized payment processing', 'Churn prediction AI', 'ASO service', 'Influencer campaign management', 'Publisher introduction program'], tagline: 'For professional studios' }, { title: 'PUBLISHER', price: 'Custom', frequency: '', description: 'starting at $2,000/month', icon: <DiamondOutlined sx={{ fontSize: 28, color: '#FFFFFF' }} />, btnTxt: 'Contact Sales', features: ['Everything in Studio, plus:', 'Unlimited active game projects', 'Unlimited MAU across all games', '2TB+ storage (expandable)', 'Dedicated server infrastructure', 'Full console support', 'Global distribution strategy', 'PR and media outreach', 'Localization to 20+ languages', 'Direct partnerships (major studios)', 'Investment facilitation', '24/7 priority support + producer'], tagline: 'For established studios & publishers' } ] } }

const bundlePlans = [ { title: 'ECOSYSTEM STARTER', price: '$520', frequency: '/month', save: 'Save $130/month (normally $650)', color: '#00D3F2', border: 'rgba(0, 184, 219, 0.5)', bg: 'linear-gradient(180deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 184, 219, 0.05) 100%)', btn: 'linear-gradient(180deg, #00B8DB 0%, #0092B8 100%)', features: ['Sports Club: Starter Plan', 'Esports: Community Plan', 'Game Dev: Indie Plan', 'Perfect for organizations starting their sports + gaming journey'], btnTxt: 'Contact Sales' }, { title: 'ECOSYSTEM PROFESSIONAL', price: '$1,360', frequency: '/month', save: 'Save $340/month (normally $1,700)', color: '#C27AFF', border: 'rgba(194, 122, 255, 0.5)', bg: 'linear-gradient(180deg, rgba(194, 122, 255, 0.2) 0%, rgba(194, 122, 255, 0.05) 100%)', btn: 'linear-gradient(180deg, #C27AFF 0%, #9D40E6 100%)', features: ['Sports Club: Professional Plan', 'Esports: Competitor Plan', 'Game Dev: Studio Plan', 'Best for serious sports + gaming organizations', 'Ideal for football academy + esports division + game studio'], btnTxt: 'Contact Sales', bestValue: true }, { title: 'ECOSYSTEM ENTERPRISE', price: 'Custom', sub: 'starting at $3,500/month', save: 'Save 20-30% on individual plans', color: '#FB64B6', border: 'rgba(251, 100, 182, 0.5)', bg: 'linear-gradient(180deg, rgba(251, 100, 182, 0.2) 0%, rgba(251, 100, 182, 0.05) 100%)', btn: 'linear-gradient(180deg, #FB64B6 0%, #D93693 100%)', features: ['All Enterprise/Pro/Publisher Plans', 'Custom integrations between platforms', 'White-label options across ecosystem', 'Dedicated account management team', 'Perfect for national federations, large gaming companies'], btnTxt: 'Contact Sales' } ]

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState('sports')
  const theme = themeColors[activeTab]

  return (
    <Box sx={{ bgcolor: '#050B14', minHeight: '100vh', pb: 10 }}>
      <Box sx={{ bgcolor: '#050B14', py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
            {Object.keys(categories).map((key) => (
              <Box key={key} onClick={() => setActiveTab(key)} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: activeTab === key ? `linear-gradient(135deg, ${themeColors[key].main} 0%, ${themeColors[key].dark} 100%)` : `${themeColors[key].bg}`, border: activeTab === key ? 'none' : `1px solid ${themeColors[key].border}`, borderRadius: '10px', px: { xs: 2, sm: 3 }, py: 1.5, color: activeTab === key ? '#FFFFFF' : themeColors[key].main, fontSize: { xs: 12, sm: 14 }, fontFamily: 'Inter', fontWeight: 600, cursor: 'pointer', boxShadow: activeTab === key ? `0 4px 20px ${themeColors[key].main}66` : 'none', transition: 'all 0.3s' }}>
                {key === 'sports' ? '🏆' : key === 'esports' ? '🎮' : '⚡'}
                {categories[key].title}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#050B14', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} justifyContent="center" alignItems="center">
            {categories[activeTab].plans.map((plan, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: '90%', md: 362.13 }, maxWidth: 400, position: 'relative', background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)', borderRadius: '24px', border: `1.6px solid ${theme.border}`, py: plan.popular ? { xs: 6, lg: 10 } : 4, px: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', transform: plan.popular ? { lg: 'scale(1.05)', xs: 'none' } : 'none', zIndex: plan.popular ? 2 : 1, boxShadow: plan.popular ? `0px 0px 40px ${theme.main}26` : 'none', transition: 'all 0.3s ease' }}>
                {plan.popular && (
                  <Box sx={{ position: 'absolute', top: -12, right: 20, bgcolor: '#FF6B35', color: '#FFFFFF', py: 0.5, px: 2, borderRadius: '20px', fontSize: { xs: 10, sm: 12 }, fontWeight: 700, fontFamily: 'Inter' }}>
                    🔥 MOST POPULAR
                  </Box>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, borderRadius: '12px', background: `linear-gradient(180deg, ${theme.main} 0%, ${theme.dark} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {plan.icon}
                  </Box>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: 16, sm: 18 }, color: theme.main }}>{plan.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 0.5 }}>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 28, sm: 36 }, color: '#FFFFFF', fontWeight: 600 }}>{plan.price}</Typography>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 14, sm: 16 }, color: '#99A1AF', ml: 0.5 }}>{plan.frequency}</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 12, sm: 14 }, color: '#99A1AF', mb: 2 }}>{plan.description}</Typography>
                {plan.saveText && <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 12, sm: 13 }, color: '#10B981', mb: 2 }}>{plan.saveText}</Typography>}
                <Stack spacing={plan.popular ? 2 : 1.5} sx={{ mb: 4, flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                      <Check sx={{ color: theme.main, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: 'Inter', fontSize: { xs: 13, sm: 14 }, color: '#D1D5DC', lineHeight: 1.5 }}>{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button href='/contact' sx={{ width: '100%', height: { xs: 44, sm: 48 }, borderRadius: '10px', textTransform: 'none', fontSize: { xs: 13, sm: 14 }, fontFamily: 'Inter', fontWeight: 700, ...(plan.popular ? { background: theme.main, color: '#FFFFFF', '&:hover': { opacity: 0.9 } } : { bgcolor: 'transparent', border: `1.6px solid ${theme.main}`, color: theme.main, '&:hover': { bgcolor: theme.bg } }) }}>
                  {plan.btnTxt}
                </Button>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, pt: { xs: 6, md: 8 }, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Chip label="🚀 BUNDLE & SAVE 20%" sx={{ bgcolor: 'rgba(0, 184, 219, 0.1)', color: '#00D3F2', border: '1px solid rgba(0, 184, 219, 0.3)', borderRadius: '50px', fontFamily: 'Inter', fontWeight: 700, mb: 3, px: 1, fontSize: { xs: 11, sm: 13 } }} />
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 36 }, background: 'linear-gradient(90deg, #00D3F2 0%, #FB64B6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, letterSpacing: '-0.02em', px: 2 }}>
            THE COMPLETE ECOSYSTEM
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: 14, sm: 16, md: 18 }, color: '#99A1AF', px: 2 }}>
            Get all three pillars and build integrated sports and gaming operations
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          {bundlePlans.map((p, i) => (
            <Box key={i} sx={{ width: { xs: '100%', sm: '90%', md: '356.8px' }, minHeight: { xs: 'auto', md: '600px' }, borderRadius: '16px', background: p.bg, border: `1.6px solid ${p.border}`, p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: p.bestValue ? `0 0 40px ${p.color}20` : 'none' }}>
              {p.bestValue && (
                <Box sx={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', bgcolor: '#000', border: `1px solid ${p.color}`, borderRadius: '20px', px: 2, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, boxShadow: `0 0 15px ${p.color}60` }}>
                  <Star sx={{ fontSize: 14, color: '#FFD700' }} />
                  <Typography sx={{ color: '#FFF', fontSize: { xs: 10, sm: 11 }, fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.05em' }}>BEST VALUE</Typography>
                </Box>
              )}
              <Typography sx={{ color: p.color, fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 20, sm: 24 }, textTransform: 'uppercase', mb: 1 }}>{p.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: 28, sm: 36 }, lineHeight: 1 }}>{p.price}</Typography>
                <Typography sx={{ color: '#99A1AF', ml: 0.5, fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: 14, sm: 16 } }}>{p.frequency}</Typography>
              </Box>
              {p.sub && <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: 12, sm: 14 }, mt: 0.5 }}>{p.sub}</Typography>}
              <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: 12, sm: 14 }, mt: 1, mb: 4 }}>{p.save}</Typography>
              <Stack spacing={2} sx={{ flex: 1, mb: 4 }}>
                {p.features.map((f, k) => (
                  <Stack key={k} direction="row" spacing={1.5} alignItems="flex-start">
                    <Check sx={{ color: p.color, fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                    <Typography sx={{ color: '#D1D5DC', fontSize: { xs: 13, sm: 14 }, fontFamily: 'Inter', fontWeight: 400, lineHeight: 1.5 }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button href='/contact' sx={{ width: '100%', background: p.btn, borderRadius: '10px', color: '#FFFFFF', height: { xs: 44, sm: 48 }, fontWeight: 700, fontFamily: 'Inter', fontSize: { xs: 14, sm: 16 }, textTransform: 'none', '&:hover': { opacity: 0.9, boxShadow: `0 0 20px ${p.color}40` } }}>
                {p.btnTxt}
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}