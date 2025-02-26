"use client";
import React from "react";
import { Box, Container, Button, Grid2 as Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FOOTER_ITEMS } from "../../constant";

const FooterWrapper = styled("footer")(() => ({
  color: "#fff",
  position: "relative",
  zIndex: 2,
  px: 6,
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Ready to explore <br />
            uncharted <span style={{ color: "#ec4899" }}>lorem</span>?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Have the best experience on the best platform out there!
          </Typography>
          <Box>
          <Button
              variant="contained"
          >
            Sign up
          </Button>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="space-between">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box mb={2}>
              <Typography
                variant="h5"
                sx={{ color: "#ec4899", fontWeight: "bold" }}
              >
                Flirtbate
              </Typography>
              <Typography variant="body2" color="#999">
                Hotstreamsmodels, satisfying desires
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2} justifyContent="space-around">
              {Object.entries(FOOTER_ITEMS).map((item) => (
                <Grid key={item[0]} size={{ xs: 6, md: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {item[0]}
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={0.5}>
                    {item[1].map((el) => (
                      <Link key={el} href="#" color="#bbb" underline="none">
                        <Typography fontWeight="400">{el}</Typography>
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="#666">
            © {new Date().getFullYear()} Flirtbate. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
}
