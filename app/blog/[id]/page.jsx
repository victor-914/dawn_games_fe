"use client";
import React from "react";
import { Box, Container, Typography, Stack, Chip } from "@mui/material";
import { AccessTime, Person } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { getBlogById, getStrapiMedia } from "@/app/utils/api";

export default function LatestArticlePage({ params }) {
  const resolvedParams = React.use(params);
  const articleId = resolvedParams.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getBlogById(articleId),
  });

  if (isLoading) {
    return (
      <Box sx={{ py: 15, textAlign: "center", background: "linear-gradient(180deg, #1A2744 0%, #050B14 100%)" }}>
        <Typography sx={{ color: "#99A1AF" }}>Loading article...</Typography>
      </Box>
    );
  }

  const post = data?.data;

  if (error || !post) {
    return (
      <Box sx={{ py: 15, textAlign: "center", background: "linear-gradient(180deg, #1A2744 0%, #050B14 100%)" }}>
        <Typography variant="h1" sx={{ color: "#FFFFFF" }}>Article not found</Typography>
      </Box>
    );
  }

  const imageUrl = getStrapiMedia(post.img?.url);

  return (
    <Box sx={{ background: "linear-gradient(180deg, #1A2744 0%, #050B14 100%)", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{
          width: "100%", height: { xs: 250, md: 500 }, borderRadius: "24px",
          border: "0.8px solid rgba(255, 53, 218, 0.2)", overflow: "hidden",
          mb: { xs: 3, md: 5 }, bgcolor: "#1A2744",
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
          backgroundSize: "cover", backgroundPosition: "center",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {!imageUrl && <Typography sx={{ color: "#99A1AF" }}>No Image Available</Typography>}
        </Box>

        <Typography variant="h1" sx={{
          fontFamily: "Inter", fontWeight: 700, fontSize: { xs: 32, md: 48 },
          color: "#FFFFFF", mb: 3, lineHeight: 1.2
        }}>
          {post.title}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
          <Chip
            icon={<Person sx={{ color: "#FF6B35 !important", fontSize: 16 }} />}
            label={post.catergory || "General"}
            sx={{
              bgcolor: "rgba(255, 107, 53, 0.1)", border: "0.8px solid rgba(255, 107, 53, 0.3)",
              color: "#FF6B35", fontFamily: "Inter", fontSize: 14, textTransform: "capitalize",
              "& .MuiChip-icon": { ml: 1 }
            }}
          />
          <Chip
            icon={<AccessTime sx={{ color: "#99A1AF !important", fontSize: 16 }} />}
            label={post.duration ? `${post.duration} min read` : "5 min read"}
            sx={{
              bgcolor: "rgba(153, 161, 175, 0.1)", border: "0.8px solid rgba(153, 161, 175, 0.3)",
              color: "#99A1AF", fontFamily: "Inter", fontSize: 14,
              "& .MuiChip-icon": { ml: 1 }
            }}
          />
        </Stack>

        <Typography sx={{
          fontFamily: "Inter", fontSize: 18, color: "#D1D5DC",
          lineHeight: 1.8, whiteSpace: "pre-wrap"
        }}>
          {post.content}
        </Typography>
      </Container>
    </Box>
  );
}