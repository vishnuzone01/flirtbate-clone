"use client"
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Primary = '#ec4899';
const Secondary = '#rgb(255, 104, 192)';
const BodyBG = '#1B1D20';

export const theme = () => {
  return createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: '64px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            background: BodyBG,
            border: `1px solid ${Secondary}`,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            border: "1px solid gray", // Default border color
            "&.Mui-focused": {
              borderColor: "#f95cbb", // Border color on focus
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Default outline color
            },
           
            "& .MuiSvgIcon-root": { color: "#f95cbb" },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: BodyBG,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            '&:hover': {
              border: '2px solid #FDC90B',
            },
          },
        },
      },
      
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: 'white',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Prevents uppercase text
            borderRadius: "8px", // Custom border radius
            padding: "8px 16px", // Custom padding
            "&:hover": {
              backgroundColor: "#FF5733", // Custom hover background color
            },
          },
          text: {
            color: 'white',
          },
          contained: {
            backgroundColor: "rgb(255, 104, 192)",
            boxShadow: "rgba(255, 104, 192, 0.48) 0px 0px 32px 8px",
            color: "#000",
            "&:hover": {
              backgroundColor: "rgb(209, 34, 136)",
              boxShadow: "rgba(255, 104, 192, 0.48) 0px 0px 32px 8px",
            },
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            backgroundColor: Primary,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: BodyBG,
            '&.Mui-selected': {
              backgroundColor: "#290f1e",
            },
          },
        },
      },
      
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        main: Primary,
        contrastText: '#fff',
      },
      secondary: {
        main: Secondary,
        contrastText: '#000',
      },
      background: {
        default: BodyBG,
      },
      
      text: {
        primary: '#FFFFFF',
        secondary: '#000000',
        placeholder: '#b3b3b3',
      },
    },
  });
};

const MuiTheme = props => {
  return (
    <ThemeProvider theme={theme()}>
        {props.children}
    </ThemeProvider>
  );
};

export default MuiTheme;
