import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const Main_ = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, drawerwidth }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerwidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Main = ({ open, children, drawerwidth }) => {
  return (
    <Main_ open={open} drawerwidth={drawerwidth}>
      {children}
    </Main_>
  );
};

Main.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  drawerwidth: PropTypes.number,
};

export default Main;
