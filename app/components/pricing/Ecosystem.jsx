'use client'
import { useState } from 'react'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { Check, Star, Bolt, StarBorder, DiamondOutlined, EmojiEvents, SportsEsports, Code } from '@mui/icons-material'

const standardPlans = [
  {
    title: 'STARTER',
    price: '$200',
    frequency: '/mo',
    description: 'Up to 50 athletes',
    icon: <Bolt sx={{ fontSize: 28, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #00B8DB 0%, #00D3F2 100%)',
    borderColor: 'rgba(0, 184, 219, 0.3)',
    buttonText: 'START 30-DAY FREE TRIAL',
    buttonBg: '#00B8DB',
    checkColor: '#00D3F2',
    popular: false,
    subtitle: 'Best for youth academies & school programs',
    features: [
      'Athlete profile management (50 max)',
      'Training session scheduling',
      'Parent/athlete communication portal',
      'Automated invoicing & billing',
      'Basic performance reports',
      'Attendance tracking',
      'Email support (48h response)'
    ]
  },
  {
    title: 'PROFESSIONAL',
    price: '$600',
    frequency: '/mo',
    description: 'Up to 150 athletes',
    subtitle: 'Best for professional clubs & academies',
    saveText: 'Save $1,200 on annual plan',
    expandText: 'Everything in Starter, plus:',
    icon: <StarBorder sx={{ fontSize: 28, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)',
    borderColor: '#00B8DB',
    buttonText: 'START 30-DAY FREE TRIAL',
    buttonBg: '#00B8DB',
    checkColor: '#00D3F2',
    popular: true,
    features: [
      'Multi-team management',
      'AI video analysis (50 hrs/mo)',
      'Heat maps & movement patterns',
      'Physical performance metrics',
      'Opponent scouting reports',
      'Cognitive training (6 athletes)',
      'Custom branded mobile app',
      'Priority support (24h response)'
    ]
  },
  {
    title: 'ENTERPRISE',
    price: 'Custom',
    frequency: '',
    description: 'Starting at $2,000/mo',
    subtitle: 'Best for premier clubs & federations',
    expandText: 'Everything in Professional, plus:',
    icon: <DiamondOutlined sx={{ fontSize: 28, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #AD46FF 0%, #C27AFF 100%)',
    borderColor: 'rgba(0, 184, 219, 0.3)',
    buttonText: 'CONTACT SALES',
    buttonBg: '#00B8DB',
    buttonBorder: '1.6px solid rgba(0, 184, 219, 0.5)',
    checkColor: '#00D3F2',
    popular: false,
    features: [
      'Unlimited athletes & teams',
      'Unlimited video analysis',
      'Real-time match analytics',
      'Injury prevention AI alerts',
      'Custom ML models',
      'White-label mobile app',
      'Dedicated account manager',
      '24/7 phone + email support'
    ]
  }
]

const tabData = {
  esports: {
    chip: '🎮 ESPORTS PRICING',
    title: 'ESPORTS TOURNAMENT PLATFORM',
    subtitle: 'Host tournaments and manage talent with professional tools',
    plans: [
      { title: 'COMMUNITY', price: '$150', freq: '/month', save: 'Best for gaming cafes and small organizers', color: '#00D9FF', border: 'rgba(0, 217, 255, 0.5)', bg: 'linear-gradient(180deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 217, 255, 0.05) 100%)', btn: 'linear-gradient(180deg, #00D9FF 0%, #00B8DB 100%)', feats: ['Host up to 10 tournaments/month', 'Up to 80 participants/tournament', 'Basic bracket management', 'Automated registration', 'Prize pool tracking', 'Player profiles & stats', 'Basic ranking system', 'Team/clan creation (5 teams)', 'Twitch & YouTube integration', 'Email support (48-hour)'], btnTxt: 'Start 30-Day Free Trial' },
      { title: 'COMPETITOR', price: '$400', freq: '/month', save: 'For serious organizers & talent agencies', color: '#A78BFA', border: 'rgba(167, 139, 250, 0.5)', bg: 'linear-gradient(180deg, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0.05) 100%)', btn: 'linear-gradient(180deg, #A78BFA 0%, #8B5CF6 100%)', feats: ['Everything in Community, plus:', 'Unlimited tournaments/month', 'Up to 500 participants', 'Advanced bracket formats', '10+ games support', 'Manage up to 100 players', 'Advanced ELO ranking', 'Performance analytics', 'Contract management', 'Sponsorship deal tracking', 'Multi-platform streaming', 'Cognitive training (10 athletes)'], btnTxt: 'Start 14-Day Free Trial', bestValue: true },
      { title: 'PRO LEAGUE', price: 'Custom', freq: '', sub: 'starting at $1,000/month', save: 'For national leagues & major organizers', color: '#FF6B9D', border: 'rgba(255, 107, 157, 0.5)', bg: 'linear-gradient(180deg, rgba(255, 107, 157, 0.2) 0%, rgba(255, 107, 157, 0.05) 100%)', btn: 'linear-gradient(180deg, #FF6B9D 0%, #F43F75 100%)', feats: ['Everything in Competitor, plus:', 'Unlimited participants (5,000+)', 'League season management', 'Franchise/org management', 'White-label platform', 'Anti-cheat integration', 'AI-powered player scouting', 'Professional broadcast suite', 'Advanced analytics overlays', 'Sponsor ROI reporting', 'API access', '24/7 support + account manager'], btnTxt: 'Schedule Consultation' }
    ]
  },
  gamedev: {
    chip: '⚡ GAME DEV PRICING',
    title: 'GAME DEVELOPMENT & PUBLISHING',
    subtitle: 'Build and launch games with African-focused tools and support',
    plans: [
      { title: 'INDIE', price: '$300', freq: '/month', save: 'For solo developers and small teams (1-3 people)', color: '#00D3F2', border: 'rgba(0, 184, 219, 0.5)', bg: 'linear-gradient(180deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 184, 219, 0.05) 100%)', btn: 'linear-gradient(180deg, #00B8DB 0%, #0092B8 100%)', feats: ['Game development templates', 'African-focused asset library', 'Backend infrastructure', '1 active game project', 'Cross-platform build support', '100GB storage', 'Up to 10,000 MAU', 'In-app purchase integration', 'Player analytics', 'App store listing assistance'], btnTxt: 'Contact Sales' },
      { title: 'STUDIO', price: '$800', freq: '/month', save: 'For professional studios (4-10 people)', color: '#C27AFF', border: 'rgba(173, 70, 255, 0.5)', bg: 'linear-gradient(180deg, rgba(173, 70, 255, 0.2) 0%, rgba(173, 70, 255, 0.05) 100%)', btn: 'linear-gradient(180deg, #AD46FF 0%, #9810FA 100%)', feats: ['Everything in Indie, plus:', 'Up to 3 active game projects', '500GB storage', 'Up to 100,000 MAU per game', 'Multiplayer networking', 'Console deployment support', 'CI/CD pipeline', 'Optimized payment processing', 'Churn prediction AI', 'ASO service', 'Influencer campaign management', 'Publisher introduction program'], btnTxt: 'Contact Sales', bestValue: true, bestValueText: 'MOST POPULAR' },
      { title: 'PUBLISHER', price: 'Custom', freq: '', sub: 'starting at $2,000/month', save: 'For established studios & publishers', color: '#FB64B6', border: 'rgba(246, 51, 154, 0.5)', bg: 'linear-gradient(180deg, rgba(246, 51, 154, 0.2) 0%, rgba(230, 0, 118, 0.05) 100%)', btn: 'linear-gradient(180deg, #FF6B9D 0%, #F43F75 100%)', feats: ['Everything in Studio, plus:', 'Unlimited active game projects', 'Unlimited MAU across all games', '2TB+ storage (expandable)', 'Dedicated server infrastructure', 'Full console support', 'Global distribution strategy', 'PR and media outreach', 'Localization to 20+ languages', 'Direct partnerships (major studios)', 'Investment facilitation', '24/7 priority support + producer'], btnTxt: 'Schedule Consultation' }
    ]
  },
  bundle: {
    chip: '🚀 BUNDLE & SAVE 20%',
    title: 'THE COMPLETE ECOSYSTEM',
    subtitle: 'Get all three pillars and build integrated sports and gaming operations',
    plans: [
      { title: 'ECOSYSTEM STARTER', price: '$520', freq: '/month', save: 'Save $130/month (normally $650)', color: '#00D3F2', border: 'rgba(0, 184, 219, 0.5)', bg: 'linear-gradient(180deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 184, 219, 0.05) 100%)', btn: 'linear-gradient(180deg, #00B8DB 0%, #0092B8 100%)', feats: ['Sports Club: Starter Plan', 'Esports: Community Plan', 'Game Dev: Indie Plan', 'Perfect for organizations starting their sports + gaming journey'], btnTxt: 'Contact Sales' },
      { title: 'ECOSYSTEM PROFESSIONAL', price: '$1,360', freq: '/month', save: 'Save $340/month (normally $1,700)', color: '#C27AFF', border: 'rgba(194, 122, 255, 0.5)', bg: 'linear-gradient(180deg, rgba(194, 122, 255, 0.2) 0%, rgba(194, 122, 255, 0.05) 100%)', btn: 'linear-gradient(180deg, #C27AFF 0%, #9D40E6 100%)', feats: ['Sports Club: Professional Plan', 'Esports: Competitor Plan', 'Game Dev: Studio Plan', 'Best for serious sports + gaming organizations', 'Ideal for football academy + esports division + game studio'], btnTxt: 'Contact Sales', bestValue: true },
      { title: 'ECOSYSTEM ENTERPRISE', price: 'Custom', freq: '', sub: 'starting at $3,500/month', save: 'Save 20-30% on individual plans', color: '#FB64B6', border: 'rgba(251, 100, 182, 0.5)', bg: 'linear-gradient(180deg, rgba(251, 100, 182, 0.2) 0%, rgba(251, 100, 182, 0.05) 100%)', btn: 'linear-gradient(180deg, #FB64B6 0%, #D93693 100%)', feats: ['All Enterprise/Pro/Publisher Plans', 'Custom integrations between platforms', 'White-label options across ecosystem', 'Dedicated account management team', 'Perfect for national federations, large gaming companies'], btnTxt: 'Schedule Consultation' }
    ]
  }
}

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState('bundle')
  const currentData = tabData[activeTab]

  return (
    <Box sx={{ bgcolor: '#050B14', minHeight: '100vh', pb: 10 }}>
      <Box sx={{ bgcolor: '#050B14', py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'linear-gradient(135deg, #00B8DB 0%, #0092B8 100%)', borderRadius: '10px', px: 3, py: 1.5, color: '#FFFFFF', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, boxShadow: '0 4px 20px rgba(0, 184, 219, 0.4)' }}>
              🏆
              SPORTS MANAGEMENT
            </Box>
            <Box onClick={() => setActiveTab('esports')} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: activeTab === 'esports' ? 'linear-gradient(135deg, #AD46FF 0%, #8B2FD9 100%)' : 'rgba(173, 70, 255, 0.1)', border: activeTab === 'esports' ? 'none' : '1px solid rgba(173, 70, 255, 0.1)', borderRadius: '10px', px: 3, py: 1.5, color: activeTab === 'esports' ? '#FFFFFF' : '#C27AFF', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, cursor: 'pointer', boxShadow: activeTab === 'esports' ? '0 4px 20px rgba(173, 70, 255, 0.4)' : 'none' }}>
              🎮
              ESPORTS PLATFORM
            </Box>
            <Box onClick={() => setActiveTab('gamedev')} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: activeTab === 'gamedev' ? 'linear-gradient(135deg, #F6339A 0%, #D92679 100%)' : 'rgba(246, 51, 154, 0.1)', border: activeTab === 'gamedev' ? 'none' : '1px solid rgba(246, 51, 154, 0.1)', borderRadius: '10px', px: 3, py: 1.5, color: activeTab === 'gamedev' ? '#FFFFFF' : '#FB64B6', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, cursor: 'pointer', boxShadow: activeTab === 'gamedev' ? '0 4px 20px rgba(246, 51, 154, 0.4)' : 'none' }}>
              ⚡
              GAME DEVELOPMENT
            </Box>
          </Stack>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Chip onClick={() => setActiveTab('bundle')} label="🚀 BUNDLES (SAVE 20%)" sx={{ background: activeTab === 'bundle' ? 'linear-gradient(135deg, #F0B100 0%, #D9A000 100%)' : 'rgba(240, 177, 0, 0.1)', color: activeTab === 'bundle' ? '#000' : '#FDC700', border: activeTab === 'bundle' ? 'none' : '1px solid rgba(240, 177, 0, 0.1)', borderRadius: '10px', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, px: 2, py: 3, cursor: 'pointer', boxShadow: activeTab === 'bundle' ? '0 4px 20px rgba(240, 177, 0, 0.4)' : 'none' }} />
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#050B14', py: 8 }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} justifyContent="center" alignItems="center">
            {standardPlans.map((plan, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: 400, md: 362.13 }, maxWidth: 400, position: 'relative', background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)', borderRadius: '24px', border: `1.6px solid ${plan.borderColor}`, py: plan.popular ? 10 : 4, px: 4, display: 'flex', flexDirection: 'column', transform: plan.popular ? { lg: 'scale(1.05)', xs: 'none' } : 'none', zIndex: plan.popular ? 2 : 1, boxShadow: plan.popular ? '0px 0px 40px rgba(0, 184, 219, 0.15)' : 'none' }}>
                {plan.popular && (
                  <Box sx={{ position: 'absolute', top: -12, right: 20, bgcolor: '#FF6B35', color: '#FFFFFF', py: 0.5, px: 2, borderRadius: '20px', fontSize: 12, fontWeight: 700, fontFamily: 'Inter' }}>
                    🔥 MOST POPULAR
                  </Box>
                )}
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 18, color: '#00D3F2', mb: 1 }}>{plan.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 0.5 }}>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 36, color: '#FFFFFF', fontWeight: 600 }}>{plan.price}</Typography>
                  <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#99A1AF', ml: 0.5 }}>{plan.frequency}</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#99A1AF', mb: 2 }}>{plan.description}</Typography>
                {plan.saveText && <Typography sx={{ fontFamily: 'Inter', fontSize: 13, color: '#10B981', mb: 2 }}>{plan.saveText}</Typography>}
                {plan.expandText && (
                  <Box sx={{ bgcolor: 'rgba(0, 184, 219, 0.2)', border: '1px solid rgba(0, 184, 219, 0.3)', borderRadius: '10px', px: 2, py: 1, mb: 3 }}>
                    <Typography sx={{ fontFamily: 'Inter', fontSize: 12, color: '#53EAFD', fontWeight: 700 }}>{plan.expandText}</Typography>
                  </Box>
                )}
                <Stack spacing={plan.popular ? 2 : 1.5} sx={{ mb: 4, flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                      <Check sx={{ color: plan.checkColor, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: 'Inter', fontSize: 14, color: '#D1D5DC', lineHeight: 1.5 }}>{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button href='/contact' sx={{ width: '100%', height: 48, borderRadius: '10px', textTransform: 'none', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, ...(plan.buttonBg ? { background: plan.buttonBg, color: '#FFFFFF', '&:hover': { background: 'linear-gradient(135deg, #00A5C7 0%, #00BFE0 100%)' } } : { bgcolor: 'transparent', border: plan.buttonBorder, color: '#00D3F2', '&:hover': { bgcolor: 'rgba(0, 184, 219, 0.1)' } }) }}>
                  {plan.buttonText}
                </Button>
                {plan.subtitle && <Typography sx={{ fontFamily: 'Inter', fontSize: 12, color: '#6B7280', textAlign: 'center', mt: 2 }}>{plan.subtitle}</Typography>}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8, pt: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Chip label={currentData.chip} sx={{ bgcolor: 'rgba(0, 211, 242, 0.1)', color: '#00D3F2', border: '1px solid rgba(0, 211, 242, 0.3)', borderRadius: '50px', fontFamily: 'Inter', fontWeight: 700, mb: 3, px: 1 }} />
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 36, background: 'linear-gradient(90deg, #00D3F2 0%, #FB64B6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, letterSpacing: '-0.02em' }}>
            {currentData.title}
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 18, color: '#99A1AF' }}>
            {currentData.subtitle}
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          {currentData.plans.map((p, i) => (
            <Box key={i} sx={{ width: '356.8px', height: '800px', borderRadius: '16px', background: p.bg, border: `1.6px solid ${p.border}`, p: 4, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: p.bestValue ? `0 0 40px ${p.color}20` : 'none' }}>
              {p.bestValue && (
                <Box sx={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', bgcolor: '#000', border: `1px solid ${p.color}`, borderRadius: '20px', px: 2, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, boxShadow: `0 0 15px ${p.color}60` }}>
                  <Star sx={{ fontSize: 14, color: '#FFD700' }} />
                  <Typography sx={{ color: '#FFF', fontSize: 11, fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.05em' }}>{p.bestValueText || 'BEST VALUE'}</Typography>
                </Box>
              )}
              <Typography sx={{ color: p.color, fontFamily: 'Inter', fontWeight: 700, fontSize: 24, textTransform: 'uppercase', mb: 1 }}>{p.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontWeight: 700, fontSize: 36, lineHeight: 1 }}>{p.price}</Typography>
                <Typography sx={{ color: '#99A1AF', ml: 0.5, fontFamily: 'Inter', fontWeight: 400, fontSize: 16 }}>{p.freq}</Typography>
              </Box>
              {p.sub && <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: 14, mt: 0.5 }}>{p.sub}</Typography>}
              <Typography sx={{ color: '#99A1AF', fontFamily: 'Inter', fontWeight: 400, fontSize: 14, mt: 1, mb: 4 }}>{p.save}</Typography>
              <Stack spacing={2} sx={{ flex: 1, mb: 4 }}>
                {p.feats.map((f, k) => (
                  <Stack key={k} direction="row" spacing={1.5} alignItems="flex-start">
                    <Check sx={{ color: p.color, fontSize: 20, mt: 0.3 }} />
                    <Typography sx={{ color: '#D1D5DC', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: 1.5 }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button href='/contact' sx={{ width: '100%', background: p.btn, borderRadius: '10px', color: '#FFFFFF', height: 48, fontWeight: 700, fontFamily: 'Inter', fontSize: 16, textTransform: 'none', '&:hover': { opacity: 0.9, boxShadow: `0 0 20px ${p.color}40` } }}>
                {p.btnTxt}
              </Button>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}