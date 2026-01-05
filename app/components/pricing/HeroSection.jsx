'use client'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import BoltIcon from '@mui/icons-material/Bolt'
import StarIcon from '@mui/icons-material/StarBorder'
import DiamondIcon from '@mui/icons-material/DiamondOutlined' // Using diamond/crown for enterprise
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const plans = [
  {
    title: 'Starter',
    price: '₦200,000',
    frequency: '/month',
    description: 'Perfect for small academies and school programs',
    icon: <BoltIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #2B7FFF 0%, #00B8DB 100%)', // Blue gradient
    borderColor: 'rgba(53, 87, 255, 0.2)', // Blue border
    buttonVariant: 'outlined',
    buttonColor: '#359DFF',
    checkColor: '#2B7FFF',
    popular: false,
    features: [
      'Up to 50 athletes',
      'Basic athlete management',
      'Facility booking',
      'Mobile apps',
      'Email support'
    ]
  },
  {
    title: 'Professional',
    price: '₦600,000',
    frequency: '/month',
    description: 'For established clubs and growing academies',
    icon: <StarIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #FF6B35 0%, #FF8C5A 100%)', // Orange gradient
    borderColor: '#FF6B35', // Solid orange border for active state visual
    buttonVariant: 'contained',
    buttonBg: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
    checkColor: '#FF6B35',
    popular: true,
    features: [
      'Up to 500 athletes',
      'Advanced analytics',
      'Custom branding',
      'Tournament coordination',
      'Priority support',
      'Performance dashboards',
      'Parent communication tools'
    ]
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    frequency: '/Pricing',
    description: 'For professional clubs and large organizations',
    icon: <DiamondIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    iconBg: 'linear-gradient(180deg, #D021FF 0%, #E05CFF 100%)', // Pink/Purple gradient
    borderColor: 'rgba(208, 33, 255, 0.2)',
    buttonVariant: 'outlined',
    buttonColor: '#D021FF',
    checkColor: '#D021FF',
    popular: false,
    features: [
      'Unlimited athletes',
      'Multi-location support',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'SLA guarantees',
      'Training & onboarding',
      'API access'
    ]
  }
]

export default function HeroSection() {
  return (
    <Box>
      {/* --- HERO SECTION --- */}
      <Box sx={{
        height: 492,
        width: '100%',
        backgroundImage: 'url(/pricing-hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          
          {/* Pill Tag */}
          <Chip 
            icon={<AutoAwesomeIcon sx={{ fontSize: '16px !important', color: '#FF6B35' }} />} 
            label="Transparent Pricing, Exceptional Value" 
            sx={{
              bgcolor: 'rgba(255, 107, 53, 0.1)',
              color: '#FF6B35',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              borderRadius: '50px',
              fontFamily: 'Inter',
              fontSize: 14,
              height: 32,
              mb: 4,
              '& .MuiChip-label': { px: 2 }
            }} 
          />

          <Typography variant="h1" sx={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
            color: '#FFFFFF',
            mb: 3
          }}>
            Choose the Plan That Fits Your Institution
          </Typography>
          
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: { xs: 18, md: 24 },
            color: '#D1D5DC',
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.5
          }}>
            No hidden fees. No surprises. Just powerful technology to grow your sports organization.
          </Typography>
        </Container>
      </Box>

      {/* --- PRICING CARDS SECTION --- */}
      <Box sx={{ bgcolor: '#050B14', py: 10, minHeight: 1030.1 }}>
        <Container maxWidth="xl">
          
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: { xs: 28, md: 36 },
              color: '#FFFFFF',
              mb: 1
            }}>
              Sports Club Management
            </Typography>
            <Typography sx={{
              fontFamily: 'Inter',
              fontSize: { xs: 16, md: 20 },
              color: '#D1D5DC'
            }}>
              Scalable plans for every stage of your growth
            </Typography>
          </Box>

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={4} 
            justifyContent="center" 
            alignItems={{ xs: 'center', md: 'stretch' }}
          >
            {plans.map((plan, index) => (
              <Box key={index} sx={{
                width: { xs: '100%', md: 380 },
                position: 'relative',
                background: 'linear-gradient(180deg, #1A2744 0%, #0A1628 100%)',
                borderRadius: '24px',
                border: `1.6px solid ${plan.borderColor}`,
                p: 4,
                display: 'flex',
                flexDirection: 'column'
              }}>
                
                {/* Popular Tag */}
                {plan.popular && (
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: '#FF8C5A',
                    color: '#FFFFFF',
                    py: 0.5,
                    px: 2,
                    borderTopRightRadius: '22px',
                    borderBottomLeftRadius: '16px',
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'Inter'
                  }}>
                    Popular
                  </Box>
                )}

                {/* Icon */}
                <Box sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '16.4px',
                  background: plan.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  boxShadow: `0 4px 20px ${plan.checkColor}40`
                }}>
                  {plan.icon}
                </Box>

                {/* Header Info */}
                <Typography variant="h3" sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600, // SemiBold
                  fontSize: 30,
                  color: '#FFFFFF',
                  mb: 1
                }}>
                  {plan.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 36,
                    color: '#FFFFFF',
                    fontWeight: 400
                  }}>
                    {plan.price}
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    color: '#99A1AF',
                    ml: 1
                  }}>
                    {plan.frequency}
                  </Typography>
                </Box>

                <Typography sx={{
                  fontFamily: 'Inter',
                  fontSize: 16,
                  color: '#99A1AF',
                  mb: 4,
                  minHeight: 48
                }}>
                  {plan.description}
                </Typography>

                {/* Features List */}
                <Stack spacing={2} sx={{ mb: 5, flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                      <CheckIcon sx={{ color: plan.checkColor, fontSize: 20, mt: 0.5 }} />
                      <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        color: '#D1D5DC',
                        lineHeight: 1.5
                      }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {/* Button */}
                <Button 
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    width: '100%',
                    height: 56,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    ...(plan.buttonVariant === 'contained' ? {
                      background: plan.buttonBg,
                      color: '#FFFFFF',
                      '&:hover': { opacity: 0.9 }
                    } : {
                      bgcolor: '#1A2744',
                      border: `0.8px solid ${plan.buttonColor}4D`, // 30% opacity approx
                      color: '#FFFFFF',
                      '&:hover': { 
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderColor: plan.buttonColor 
                      }
                    })
                  }}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>

              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}