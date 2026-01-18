"use client";
import { useState } from "react";
import { submitContactForm } from "@/app/utils/api";
import { Box, Container, Typography, InputBase, Button, Select, MenuItem } from '@mui/material';
import { Send } from '@mui/icons-material';

const Label = ({ children }) => <Typography sx={{ fontFamily: 'Inter', fontSize: 16, color: '#FFFFFF', mb: 1 }}>{children}</Typography>;

const Input = (props) => (
  <InputBase {...props} sx={{
    width: '100%', height: props.multiline ? 'auto' : 49.6, minHeight: props.multiline ? 169.6 : undefined,
    bgcolor: '#0A1628', border: '0.8px solid #364153', borderRadius: '10px', color: '#FFFFFF',
    fontFamily: 'Inter', fontSize: 16, p: props.multiline ? 2 : '0 16px',
    alignItems: props.multiline ? 'flex-start' : 'center', '& ::placeholder': { color: '#6A7282', opacity: 1 }, ...props.sx
  }} />
);

export default function Form() {
  const [formData, setFormData] = useState({
    institutionName: "",
    name: "",
    email: "",
    phoneNumber: "",
    solution: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.institutionName.trim() !== "" &&
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.solution.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    
    setStatus("loading");
    try {
      await submitContactForm(formData);
      
      setStatus("success");
      setFormData({ institutionName: "", name: "", email: "", phoneNumber: "", solution: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
            <Box sx={{ flex: 1 }}>
              <Label>Full Name *</Label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Label>Email Address *</Label>
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Label>Phone Number *</Label>
              <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+234 708 311 4936" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Label>Organization *</Label>
              <Input name="institutionName" value={formData.institutionName} onChange={handleChange} placeholder="Your Academy/Club Name" />
            </Box>
          </Box>
          <Box>
            <Label>I'm interested in *</Label>
            <Select 
              name="solution"
              value={formData.solution} 
              onChange={handleChange}
              displayEmpty 
              sx={{
                width: '100%', height: 49.6, bgcolor: '#0A1628', border: '0.8px solid #364153', borderRadius: '10px',
                color: formData.solution ? '#FFFFFF' : '#6A7282', fontFamily: 'Inter', fontSize: 16,
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '& .MuiSelect-icon': { color: '#6A7282' }
              }}
            >
              <MenuItem value="" disabled sx={{ color: '#6A7282' }}>Select an option</MenuItem>
              <MenuItem value="sports">Sports Club Management</MenuItem>
              <MenuItem value="esports">E-Sports Platform</MenuItem>
              <MenuItem value="gamedev">Game Development/Publishing</MenuItem>
            </Select>
          </Box>
          <Box>
            <Label>Message *</Label>
            <Input name="message" value={formData.message} onChange={handleChange} multiline minRows={6} placeholder="Tell us about your institution and how we can help..." />
          </Box>

          <Button 
            onClick={handleSubmit}
            disabled={!isFormValid() || status === "loading"}
            endIcon={<Send sx={{ width: 20, height: 20 }} />} 
            sx={{
              width: '100%', height: 48, 
              background: status === "success" ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' : 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
              borderRadius: '10px', textTransform: 'none', fontSize: 16, fontFamily: 'Inter', fontWeight: 400,
              color: '#FFFFFF', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', 
              opacity: (!isFormValid() || status === "loading") ? 0.5 : 1,
              cursor: (!isFormValid() || status === "loading") ? 'not-allowed' : 'pointer',
              '&:hover': { opacity: 0.9 }, 
              mt: 2
            }}
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </Button>

          {status === "error" && (
            <Typography sx={{ color: '#EF4444', fontSize: 14, mt: 2, textAlign: 'center', fontFamily: 'Inter' }}>
              Something went wrong. Please try again or email us directly.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}