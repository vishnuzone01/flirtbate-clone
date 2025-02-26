import React, { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  styled,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalizeFirstLetter } from "../../utilis";
import { useApp } from "../../context/AppContext";
import { FilterState } from "@/app/context/types";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const filtersItem = [
  {
    label: "credits",
    options: ["0-20", "20-30", "30-40", "40-100"],
  },
  {
    label: "age",
    options: ["18-24", "25-29", "30-34", "35-39", "40-45"],
  },
  {
    label: "language",
    options: ["afar", "abkhazian", "japanese", "telugu", "ethiopia"],
  },
  {
    label: "status",
    options: ["online", "offline"],
  },
  {
    label: "gender",
    options: ["male", "female"],
  },
];
const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  justifyContent: "space-between",
  borderBottom: "1px solid #333",
}));

const DrawerFooter = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #333",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const AccordionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
  overflowY: "auto",
}));

export default function FilterDrawer({ open, onClose }: FilterDrawerProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const [custFilters, setcustFilters] = useState<FilterState>({});
  const { filters, setFilters, resetFilters } = useApp();

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChange =
    (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setcustFilters({
        ...custFilters,
        [type]: event.target.value,
      });
    };

  const handleReset = () => {
    setcustFilters({});
    setFilters({});
    resetFilters()
  };

  const handleApply = () => {
    setFilters(custFilters);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 430 },
          backgroundColor: "#0f0d14",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <DrawerHeader>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Search filter
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>

      <AccordionWrapper>
        {filtersItem?.map((el) => (
          <Accordion
            key={el.label}
            expanded={expanded === el.label}
            onChange={handleChangeAccordion(el.label)}
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>{capitalizeFirstLetter(el.label)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                  value={custFilters?.[el.label] || ""}
                  onChange={handleChange(el.label)}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  {el.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio color="primary" sx={{ color: "#fff" }} />}
                      label={`${capitalizeFirstLetter(option)} ${el.label === "credits" ? "credits/min" : ""}`}
                      sx={{ color: "#fff" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionWrapper>

      <DrawerFooter>
        <Button
          variant="text"
          sx={{ color: "#fff", textTransform: "none" }}
          onClick={handleReset}
        >
          Reset filter
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ec4899",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#ec4899",
              opacity: 0.8,
            },
          }}
          onClick={handleApply}
        >
          Apply
        </Button>
      </DrawerFooter>
    </Drawer>
  );
}
