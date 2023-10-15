import { IconButton } from "@mui/material";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

const CardIconButton = ({ color }) => {
  return (
    <IconButton
      className="dashboard-card-icon-btn"
      sx={{
        width: 1,
        justifyContent: "flex-end",
        borderRadius: 0,
      }}
    >
      <DoubleArrowOutlinedIcon sx={{ color: color }} />
    </IconButton>
  );
};

export default CardIconButton;
