import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { Grid, Avatar,Stack ,Typography, Card, CardContent } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BarrChart from "./BarrChart";
import DonuttChart from "./DonuttChart";

function ProDasboard() {
  return (
    <>
      <Container spacing={1} style={{ background: "red" }} maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>
          <Grid container>
            <Grid item xl={8} lg={8} sx={{ bgcolor: "#1F2937" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }} 
                sx={{ bgcolor: "#1F2937", height: "7vh" }}
              >
                <MenuIcon style={{color:"white"}}></MenuIcon>
                <SearchIcon style={{color:"white"}}></SearchIcon>
              </Box>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                paddingRight: "1%",
              }}
              sx={{ bgcolor: "#1F2937" }}
            >
              <Avatar
                alt="India"
                src="https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Badge color="secondary" variant="dot">
                <NotificationsNoneIcon style={{color:"white"}} />
              </Badge>
              <SettingsIcon style={{color:"white"}}></SettingsIcon>
              <Avatar
                alt="Ankita Shrivastava"
                src="https://vodex.ai/assets/img/team/team/4.png"
              />
            </Grid>
          </Grid>
        </Box>
        
      </Container>
    </>
  );
}
export default ProDasboard;
