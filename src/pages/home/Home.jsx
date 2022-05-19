import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container } from "@mui/material";
import "./Home.css";
import Soku from "../../images/Soku.gif";
import TodaysHot from "./coins/TodaysHot";
import News from "./coins/News";
import AllTimeBest from "./coins/AllTimeBest";
import PreSale from "./coins/PreSale";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home-section">
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} lg={8}>
              <Box>
                <br></br>
                <br></br>
                <center>
                  <img src={Soku} className="add-img" />
                </center>
              </Box>
              <br></br>
              <br></br>
            </Grid>
          </Grid>
          <br></br>
        </Box>
      </Container>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              style={{ marginLeft: "23px" }}
              value={value}
              onChange={handleChange}
            >
              <Tab
              className="tabs-section"
                style={{
                  width: "15%",
                  color: "white",
                  border: "1px solid white",
                }}
                label="Todays Hot"
                {...a11yProps(0)}
              />
              <Tab
                style={{
                  width: "15%",
                  color: "white",
                  border: "1px solid white",
                }}
                label="New"
                {...a11yProps(1)}
              />
              <Tab
                style={{
                  width: "15%",
                  color: "white",
                  border: "1px solid white",
                }}
                label="All Time Best"
                {...a11yProps(2)}
              />
              <Tab 
                            style={{
                              width: "15%",
                              color: "white",
                              border: "1px solid white",
                            }} label="PreSale" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TodaysHot />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <News />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AllTimeBest />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PreSale />
          </TabPanel>{" "}
        </Box>
      </Container>{" "}
    </div>
  );
}
