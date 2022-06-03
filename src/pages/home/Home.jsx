import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container } from "@mui/material";
import "./Home.css";
import Soku from "../../images/Soku.gif";
import TodaysHot from "./coins/TodaysHot";
import SearchToken from "./coins/SearchToken";
import News from "./coins/News";
import AllTimeBest from "./coins/AllTimeBest";
import PreSale from "./coins/PreSale";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Modal from "@mui/material/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "name", label: "COINS", minWidth: 170 },
  { id: "code", label: "SYMBOL", minWidth: 170 },
  {
    id: "votes",
    label: "VOTES",
    minWidth: 170,
    align: "right",
  },
];

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

function createData(name, code, votes, vote, id) {
  //   const density = population / size;
  return { name, code, votes, vote, id };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [todaysHotRows, setTodaysHotRows] = React.useState([]);
  const [newRows, setNewRows] = React.useState([]);
  const [tokens, setTokens] = React.useState([]);
  const [tokenRows, setTokenRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = React.useState(false);
  const captchaResult = React.useRef(false);
  const tempIndex = React.useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const url = `${serverUrl}/api/v1/tokens`;
  const navigate = useNavigate();

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function onChange(value, index) {
    // console.log('Captcha value:', value);
    axios
      .post(`${serverUrl}/api/v1/recaptcha`, { captcha_value: value })
      .then((data) => {
        const results = JSON.parse(data.data[0]);
        captchaResult.current = results.success;
        // console.log(results.success);
        voteRequest(tempIndex.current);
      });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleVote = (index) => {
    if (captchaResult.current) {
      voteRequest(index);
    } else {
      // recaptcha
      handleOpen();
      tempIndex.current = index;
    }
  };

  const voteRequest = (index) => {
    axios
      .put(`${serverUrl}/api/v1/vote`, { id: index })
      .then((res) => {
        notifySuccess("Vote was successful");
        fetchTokenData();
        handleClose();
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
        const today_row_data = data
          .filter((row) => row.status === "todayshot")
          .map((row) => {
            return createData(
              row.name,
              JSON.parse(row.token_detail).coinSymbol,
              row.votes,
              <button onClick={() => handleVote(row.id)}>Vote</button>,
              row.id
            );
          });

        const new_row_data = data
          .filter((row) => row.status === "recent")
          .map((row) => {
            return createData(
              row.name,
              JSON.parse(row.token_detail).coinSymbol,
              row.votes,
              <button onClick={() => handleVote(row.id)}>Vote</button>,
              row.id
            );
          });

        const token_row_data = data.map((row) => {
          return createData(
            row.name,
            JSON.parse(row.token_detail).coinSymbol,
            row.votes,
            "",
            row.id
          );
        });

        setTodaysHotRows(today_row_data);
        setNewRows(new_row_data);
        setTokenRows(token_row_data);
        setTokens(data);
      })
      .catch((err) => {
        notifyError("Something went wrong when fetching token data");
        console.log(err);
      });
  };

  const update = (rowId) => {
    navigate(`/tokens/${rowId}`);
  };

  const findToken = (tokenName) => {
    const toks = tokens.filter((token) => {
      return token.name.toLowerCase().includes(tokenName);
    });

    const token_row_data = toks.map((row) => {
      return createData(
        row.name,
        JSON.parse(row.token_detail).coinSymbol,
        row.votes,
        "",
        row.id
      );
    });

    setTokenRows(token_row_data);
  };

  React.useEffect(() => {
    fetchTokenData();
  }, []);

  return (
    <React.Fragment>
      <Header tokens={tokens} findToken={findToken} />
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
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tokenRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          onClick={() => update(row.id)}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                style={{ color: "white" }}
                                key={column.id}
                                align={column.align}
                              >
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={{ color: "White" }}
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={tokenRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
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
                {/* <Tab
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
              <TodaysHot
                handleVote={handleVote}
                rows={todaysHotRows}
                redirectTo={update}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <News
                handleVote={handleVote}
                rows={newRows}
                redirectTo={update}
              />
            </TabPanel>
            {/*<TabPanel value={value} index={2}>
            <AllTimeBest handleVote={handleVote} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PreSale handleVote={handleVote} />
          </TabPanel>{" "} */}
          </Box>
        </Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h4>Please prove you are human</h4>
            <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
          </Box>
        </Modal>
      </div>
      <Footer />
    </React.Fragment>
  );
}
