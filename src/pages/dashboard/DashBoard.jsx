import { styled } from "@mui/material/styles";
import DrawerHeader from "../../components/drawer-header/DrawerHeader";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
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

const DashBoard = ({ drawerWidth }) => {
  return (
    <Main drawerwidth={drawerWidth}>
      <DrawerHeader />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, non!
      </p>
    </Main>
  );
};

export default DashBoard;
