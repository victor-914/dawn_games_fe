'use client'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { Check, Bolt, StarBorder, DiamondOutlined, Whatshot, EmojiEvents, SportsEsports, Code } from '@mui/icons-material'

const plans = [
  {
    title: 'STARTER',
    price: '$200',
    frequency: '/mo',
    description: 'Up to 50 athletes',
    icon: <Bolt sx={{ fontSize: 32, color: '#FFFFFF' }} />,
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
    icon: <StarBorder sx={{ fontSize: 32, color: '#FFFFFF' }} />,
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
    icon: <DiamondOutlined sx={{ fontSize: 32, color: '#FFFFFF' }} />,
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

export default function PricingPage() {
  return (
    <Box>
      <Box sx={{
        height: { xs: 'auto', md: 492 }, width: '100%', py: { xs: 8, md: 0 },
        backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/pricing-hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <Container maxWidth="lg">
          <Chip
            icon={<Whatshot sx={{ fontSize: '16px !important', color: '#00D3F2' }} />}
            label="TRANSPARENT PRICING"
            sx={{
              bgcolor: 'rgba(0, 211, 242, 0.1)',
              color: '#00D3F2',
              border: '1px solid rgba(0, 211, 242, 0.3)',
              borderRadius: '50px',
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 600,
              height: 36,
              mb: 3,
              '& .MuiChip-label': { px: 2 }
            }}
          />
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: { xs: 36, md: 48 },
              color: '#FFFFFF',
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            CHOOSE YOUR POWER-UP
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: 16, md: 18 },
              color: '#99A1AF',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Flexible pricing for every stage of your journey. Start small, scale unlimited.
          </Typography>
        </Container>
      </Box>

      {/* Tabs Section */}
      <Box sx={{ bgcolor: '#050B14', py: 4 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                background: 'linear-gradient(135deg, #00B8DB 0%, #0092B8 100%)',
                borderRadius: '10px',
                px: 3,
                py: 1.5,
                color: '#FFFFFF',
                fontSize: 14,
                fontFamily: 'Inter',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(0, 184, 219, 0.4)',
              }}
            >
              <EmojiEvents sx={{ fontSize: 20 }} />
              SPORTS MANAGEMENT
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                background: 'rgba(173, 70, 255, 0.1)',
                border: '1px solid rgba(173, 70, 255, 0.1)',
                borderRadius: '10px',
                px: 3,
                py: 1.5,
                color: '#C27AFF',
                fontSize: 14,
                fontFamily: 'Inter',
                fontWeight: 600,
                textTransform: 'none',
              }}
            >
              <SportsEsports sx={{ fontSize: 20 }} />
              ESPORTS PLATFORM
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                background: 'rgba(246, 51, 154, 0.1)',
                border: '1px solid rgba(246, 51, 154, 0.1)',
                borderRadius: '10px',
                px: 3,
                py: 1.5,
                color: '#FB64B6',
                fontSize: 14,
                fontFamily: 'Inter',
                fontWeight: 600,
                textTransform: 'none',
              }}
            >
              <Code sx={{ fontSize: 20 }} />
              GAME DEVELOPMENT
            </Box>
          </Stack>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Chip
              label="🚀 BUNDLES (SAVE 20%)"
              sx={{
                background: 'rgba(240, 177, 0, 0.1)',
                color: '#FDC700',
                border: '1px solid rgba(240, 177, 0, 0.1)',
                borderRadius: '10px',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: 600,
                px: 2,
                py: 3,
              }}
            />
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#050B14', py: 8 }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center" // Keeps them centered relative to the tallest one
          >
            {plans.map((plan, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', sm: 400, md: 362.13 },
                  maxWidth: 400,
                  position: 'relative',
                  background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
                  borderRadius: '24px',
                  border: `1.6px solid ${plan.borderColor}`,
                  // CHANGE: Significantly increased padding for the popular plan (10 vs 4)
                  py: plan.popular ? 10 : 4,
                  px: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  // Scale effect remains
                  transform: plan.popular ? { lg: 'scale(1.05)', xs: 'none' } : 'none',
                  zIndex: plan.popular ? 2 : 1,
                  boxShadow: plan.popular ? '0px 0px 40px rgba(0, 184, 219, 0.15)' : 'none',
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 20,
                      bgcolor: '#FF6B35',
                      color: '#FFFFFF',
                      py: 0.5,
                      px: 2,
                      borderRadius: '20px',
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: 'Inter'
                    }}
                  >
                    🔥 MOST POPULAR
                  </Box>
                )}

                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#00D3F2',
                    mb: 1
                  }}
                >
                  {plan.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: 36,
                      color: '#FFFFFF',
                      fontWeight: 600
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      color: '#99A1AF',
                      ml: 0.5
                    }}
                  >
                    {plan.frequency}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: 14,
                    color: '#99A1AF',
                    mb: 2
                  }}
                >
                  {plan.description}
                </Typography>

                {plan.saveText && (
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: 13,
                      color: '#10B981',
                      mb: 2
                    }}
                  >
                    {plan.saveText}
                  </Typography>
                )}

                {plan.expandText && (
                  <Box
                    sx={{
                      bgcolor: 'rgba(0, 184, 219, 0.2)',
                      border: '1px solid rgba(0, 184, 219, 0.3)',
                      borderRadius: '10px',
                      px: 2,
                      py: 1,
                      mb: 3
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: 12,
                        color: '#53EAFD',
                        fontWeight: 700
                      }}
                    >
                      {plan.expandText}
                    </Typography>
                  </Box>
                )}

                {/* CHANGE: Increased spacing for popular plan to naturally expand height */}
                <Stack spacing={plan.popular ? 2 : 1.5} sx={{ mb: 4, flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                      <Check sx={{ color: plan.checkColor, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                      <Typography
                        sx={{
                          fontFamily: 'Inter',
                          fontSize: 14,
                          color: '#D1D5DC',
                          lineHeight: 1.5
                        }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  href='/contact'
                  sx={{
                    width: '100%',
                    height: 48,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    ...(plan.buttonBg
                      ? {
                          background: plan.buttonBg,
                          color: '#FFFFFF',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #00A5C7 0%, #00BFE0 100%)'
                          }
                        }
                      : {
                          bgcolor: 'transparent',
                          border: plan.buttonBorder,
                          color: '#00D3F2',
                          '&:hover': {
                            bgcolor: 'rgba(0, 184, 219, 0.1)'
                          }
                        })
                  }}
                >
                  {plan.buttonText}
                </Button>

                {plan.subtitle && (
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: 12,
                      color: '#6B7280',
                      textAlign: 'center',
                      mt: 2
                    }}
                  >
                    {plan.subtitle}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}