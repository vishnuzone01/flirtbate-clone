import React from "react";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";

const BackgroundWrapper = styled(Box)(() => ({
  backgroundColor: "#000",
  color: "#fff",
  position: "relative",
}));

const DottedLine = styled("div")(() => ({
  position: "absolute",
  top: "70px",
  left: 0,
  right: 0,
  zIndex: 0,
  display: "flex",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StepIconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "#ec4899",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  marginBottom: theme.spacing(2),
  zIndex: 1,
}));

const StepSection = () => {
  const theme = useTheme();
  const t = useTranslations();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BackgroundWrapper>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {t("step.title")}
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#ccc", mb: 6 }}
        >
          {t("step.desc")}
        </Typography>
        {!isMobile && (
          <DottedLine>
            <svg
              width="70%"
              height="200px"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              style={{ position: "absolute" }}
            >
              <path
                d="M 0 100 C 400 0, 800 200, 1200 100"
                stroke="rgba(236,72,153,0.4)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
              />
            </svg>
          </DottedLine>
        )}

        <Grid container spacing={4} justifyContent="center">
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <StepIconWrapper>
              <SearchIcon fontSize="large" />
            </StepIconWrapper>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {t('step.first.title')}
            </Typography>
            <Typography fontSize="16px" fontWeight="400" sx={{ color: "#ccc" }}>
            {t('step.first.desc')}
            </Typography>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <StepIconWrapper>
              <EmojiPeopleIcon fontSize="large" />
            </StepIconWrapper>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {t('step.second.title')}
            </Typography>
            <Typography fontSize="16px" fontWeight="400" sx={{ color: "#ccc" }}>
            {t('step.second.desc')}
            </Typography>
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <StepIconWrapper>
              <VideocamRoundedIcon fontSize="large" />
            </StepIconWrapper>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {t('step.third.title')}
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight="400"
              sx={{ color: "#ccc", mb: 2 }}
            >
              {t('step.third.desc')}
            </Typography>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center" justifyContent="center" mt={6}>
          <Button color="secondary" variant="contained">Sign Up Now</Button>
        </Box>
      </Container>
    </BackgroundWrapper>
  );
};

export default StepSection;
