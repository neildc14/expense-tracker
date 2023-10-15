import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import CardIconButton from "../../components/buttons/Card-IconButton";

const DashBoard = () => {
  return (
    <Box>
      <Box>
        <Typography variant="subtitle1">Good Morning!</Typography>
        <Typography variant="h4" color={"#CD5C08"}>
          Neil
        </Typography>
        <Typography variant="subtitle2">
          Here&apos;s the breakdown of your expenses.
        </Typography>
      </Box>
      <Box mt={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            gap: 2,
          }}
        >
          <Card className="primary-dashboard-card">
            <CardActionArea>
              <CardHeader title="Total Expenses " subheader="October-2023" />
              <CardContent>
                <Typography variant="h4">₱2,000.00</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIconButton color="white" />
            </CardActions>
          </Card>
          <Card className="dashboard-card" elevation={16}>
            <CardActionArea>
              <CardHeader title="Budget Goals Progress " />
              <Divider />
              <CardContent>
                <Typography variant="h4">Alotted Budget: ₱5,000.00</Typography>
                <Stack
                  mt={2}
                  direction="column"
                  alignItems="start"
                  justifyContent="center"
                  spacing={1}
                >
                  <Typography variant="h5" color={"#CD5C08"}>
                    ₱3,000.00 (60%)
                  </Typography>
                  <Typography variant="subtitle2">Remaining </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIconButton />
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
