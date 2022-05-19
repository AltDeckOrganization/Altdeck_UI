import React from "react";
import "./Partners.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SecurityIcon from "@mui/icons-material/Security";
import Arken from "../../images/arken-logo.webp";
import StaySafu from "../../images/staysafu.webp";
import Pussy from "../../images/pussy.webp";
import Download from "../../images/download.svg";
import DownloadOne from "../../images/download1.svg";
import DownloadTwo from "../../images/download2.svg";
import DownloadThree from "../../images/download3.svg";
import DownloadFour from "../../images/download4.svg";
import { Container, Box, Grid } from "@mui/material";
const Partners = () => {
  return (
    <div>
      <h1 className="partners-heading">
        <PeopleAltIcon fontSize="large" /> Our Partners
      </h1>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={4} lg={4}>
              {" "}
              <img className="partner-logo-one" src={Arken} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}>
              {" "}
              <img className="partner-logo" src={StaySafu} />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              {" "}
              <img className="partner-logo" src={Pussy} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <h1 className="partners-heading">
        <SecurityIcon fontSize="large" /> Trusted By
      </h1>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <img className="partner-logo-one" src={Download} />
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4}>
              <img className="partner-logo" src={DownloadOne} />
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4}>
              <img className="partner-logo" src={DownloadThree} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <br />
      <br />
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid xs={12} sm={6} md={6} lg={7} xl={6}>
              <img className="partner-logo" src={DownloadFour} />
            </Grid>
            <Grid xs={12} sm={6} md={5} lg={3} xl={6}>
              <img className="partner-logo" src={DownloadTwo} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Partners;
