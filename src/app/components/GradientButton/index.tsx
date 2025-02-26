import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const GradientButton = styled(Button)(() => ({
  background: "linear-gradient(to right, #facc15, #ec4899)", // from-yellow-400 to-pink-500
  color: "#000",
  "&:hover": {
    background: "linear-gradient(to right, #facc15, #ec4899)",
    opacity: 0.9,
  },
}));

export default GradientButton