import React from "react";
import { useTranslations } from "next-intl";
import { Box, Grid2 as Grid, Typography, Button } from "@mui/material";
import BannerImage from "../../../../../public/home-banner-model1.webp";

const HeroSection: React.FC = () => {
  const t = useTranslations();

  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "yellow" }}>#1 Flirt Video</span> Chat
            Platform
          </Typography>

          <Typography sx={{ mt: 2, fontSize: "1.2rem", opacity: 0.8 }}>
            {t("hero.desc")}
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
             
              fontSize: "1rem",
            }}
          >
            Explore Options
          </Button>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
          <Box
            component="img"
            src={BannerImage.src}
            alt="Live Chat"
            sx={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(255, 78, 154, 0.5)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
