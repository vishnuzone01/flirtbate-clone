import React from "react";
import {
  Container,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { capitalizeFirstLetter } from "../../../utilis";
import { useApp } from "../../../context/AppContext";
import { FILTER_ITEMS } from "../../../constant";

const FilterSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { filters, setFilters } = useApp();

  const handleChange = (type: string) => (event: SelectChangeEvent) => {
    setFilters({
      ...filters,
      [type]: event.target.value,
    });
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align="center"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Explore your choices from the world of diverse beauty and charm
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, color: "#ccc" }}
        >
          Select the companion who aligns with your desires.
        </Typography>
      </Container>

      <Grid container spacing={2} justifyContent="space-between" width="100%">
        {FILTER_ITEMS.map((item) => {
          return (
            <Grid key={item.label} size={{ xs: 12, sm: 6, md: 2 }}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel sx={{ color: "#aaa" }}>
                  {capitalizeFirstLetter(item.label)}
                </InputLabel>
                <Select
                  label={capitalizeFirstLetter(item.label)}
                  value={filters?.[item.label] || ""}
                  onChange={handleChange(item.label)}
                >
                  {item.options.map((el: string) => (
                    <MenuItem
                      key={el}
                      value={el}
                    >{`${capitalizeFirstLetter(el)} ${item.label === "credits" ? "credits/min" : ""}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FilterSection;
