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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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

function createData(name, code, votes, vote) {
  //   const density = population / size;
  return { name, code, votes, vote };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const url = `${serverUrl}/api/v1/tokens`;

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleVote = (index) => {
    console.log(index);
    axios
      .put(`${serverUrl}/api/v1/vote`, { id: index })
      .then((res) => {
        notifySuccess("Vote was successful");
        fetchTokenData();
      })
      .catch((err) => {
        notifyError("Something went wrong when voting");
        console.log(err);
      });
  };

  const fetchTokenData = () => {
    axios
      .get(`${serverUrl}/api/v1/tokens`)
      .then((res) => {
        const { data } = res;
        const row_data = [];
        data.map((row) => {
          row_data.push(
            createData(
              row.name,
              JSON.parse(row.token_detail).coinSymbol,
              row.votes,
              <button onClick={() => handleVote(row.id)}>Vote</button>
            )
          );
        });
        setRows(row_data);
      })
      .catch((err) => {
        notifyError("Something went wrong when fetching token data");
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchTokenData();
  }, []);

  return (
    <div className="home-section">
      {/* Toaster */}
      <ToastContainer position="top-center" />
      {/* Toaster */}
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
              {/* <Tab
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
                }}
                label="PreSale"
                {...a11yProps(3)}
              /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TodaysHot handleVote={handleVote} rows={rows} />
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
            <News handleVote={handleVote} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AllTimeBest handleVote={handleVote} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PreSale handleVote={handleVote} />
          </TabPanel>{" "} */}
        </Box>
      </Container>{" "}
    </div>
  );
}
