import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import FlameIcon from "@mui/icons-material/Whatshot";
import creditIcon from "../../../../../public/assets/coin-1.webp";
import { useApp } from "@/app/context/AppContext";
import Image from "next/image";
import styles from "../Homepage.module.css";
import { trimString } from "../../../utilis";

export default function CardGrid() {
  const { filteredItems, pagination } = useApp();
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  const itemsToShow = filteredItems.slice(startIndex, endIndex);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {itemsToShow.map((profile) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={profile.id}>
            <Box>
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: 2,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="432"
                    image={profile.profileImage}
                    alt={profile.firstName}
                    sx={{ objectFit: "cover" }}
                  />
                </CardActionArea>
              </Card>
            </Box>
            <Box>
              {/* Status Chip */}
              {profile.tags && (
                <Chip
                  label={profile.tags}
                  icon={<FlameIcon />}
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    bgcolor: "rgba(255, 66, 66, 0.8)",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              )}

              <Box mx={1}>
                <Box
                  display="flex"
                  mt={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "#fff" }}
                    >
                      {trimString(
                        `${profile.firstName} ${profile.lastName}`,
                        10,
                      )}
                    </Typography>
                    <Box
                      ml={0.8}
                      className={
                        profile.status === "online"
                          ? styles.online
                          : styles.offline
                      }
                    ></Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    mt={1}
                    sx={{ color: "#ccc" }}
                  >
                    <Image
                      src={creditIcon.src}
                      alt="credits"
                      width={16}
                      height={16}
                    />
                    <Typography fontSize="12px">
                      {profile.credits} Credits/min
                    </Typography>
                  </Box>
                </Box>
                <Typography fontSize="14px" color="#ccc">
                  {`${profile.age} | ${profile.region}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
