"use client";
import React, { useState } from "react";
import { useRouter, } from "next/navigation";
import { useLocale } from "next-intl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Logo from "../../../../public/assets/valentine-logo.svg";
import GradientButton from "../GradientButton";
import FilterDrawer from "./FilterDrawer";

export default function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const language = useLocale();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  const changeLanguage = async (newLocale: string) => {
    await router.replace(`/?lang=${newLocale}`, { scroll: false });
    setTimeout(() => router.refresh(), 300)

  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "rgb(30, 8, 21)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Image
            fetchPriority="high"
            width="182"
            height="40"
            alt="ass"
            src={Logo}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                fieldset: { borderColor: "#555" },
              }}
              onClick={toggleDrawer(true)}
            />

            <Select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                color: "#fff",
                ".MuiSvgIcon-root": { color: "#fff",bgcolor: "transparent", },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
            </Select>

            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              Login
            </Button>

            <GradientButton>🎁 Get 1 minute of Free Call</GradientButton>
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { bgcolor: "black", width: 250 } }}
      >
        <List sx={{ color: "#fff" }}>
          <ListItem sx={{ justifyContent: "center" }}>
            <Typography variant="h6" sx={{ color: "#ec4899" }}>
              Flirtbate
            </Typography>
          </ListItem>

          <ListItem>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              fullWidth
              sx={{
                bgcolor: "#333",
                input: { color: "#fff" },
                fieldset: { borderColor: "#555" },
              }}
            />
          </ListItem>

          <ListItem>
            <Select
              fullWidth
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              variant="outlined"
              size="small"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
            </Select>
          </ListItem>

          <ListItem>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              Login
            </Button>
          </ListItem>

          <ListItem>
            <GradientButton fullWidth>
              🎁 Get 1 minute of Free Call
            </GradientButton>
          </ListItem>
        </List>
      </Drawer>
      {openDrawer && (
        <FilterDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
      )}
    </Box>
  );
}
