import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Add from "../../images/add.gif";
import "./Coin.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import M from "../../images/m.png";
import A from "../../images/a.png";
import X from "../../images/x.png";
import Hy from "../../images/hy.png";
import D from "../../images/d.png";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { toast, ToastContainer } from "react-toastify";
import Modal from "@mui/material/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import ls from 'localstorage-slim';

import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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

const Coin = () => {
  const theme = useTheme();
  let { id } = useParams();
  const [tokenDetail, setTokenDetail] = useState({});
  const [token, setToken] = useState({});
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const [open, setOpen] = React.useState(false);
  const captchaResult = React.useRef(false);
  const tempIndex = React.useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = `${serverUrl}/api/v1/tokens`;

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    fetchTokenDetails();
  }, []);

  const fetchTokenDetails = () => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        const { data } = res;
        setToken(data);
        setTokenDetail(JSON.parse(data.token_detail));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVote = () => {
    if (captchaResult.current) {
      voteRequest(id);
    } else {
      // recaptcha
      handleOpen();
    }
  };

  function onChange(value, index) {
    // console.log('Captcha value:', value);
    axios
      .post(`${serverUrl}/api/v1/recaptcha`, { captcha_value: value })
      .then((data) => {
        const results = JSON.parse(data.data[0]);
        captchaResult.current = results.success;
        // console.log(results.success);
        voteRequest(id);
      });
  }

  const voteRequest = (index) => {
    const tokenId = JSON.parse(ls.get('tokenId', { decrypt: true }));
    if (tokenId === index) {
      notifyError("You've voted already!");
    } else {
      ls.set('tokenId', JSON.stringify(index), { encrypt: true });
      axios
        .put(`${serverUrl}/api/v1/vote`, { id: index })
        .then((res) => {
          notifySuccess("Vote was successful");
          fetchTokenDetails();
          handleClose();
        })
        .catch((err) => {
          notifyError("Something went wrong when voting");
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <Header />
      {/* Toaster */}
      <ToastContainer position="top-center" />
      {/* Toaster */}
      <div className="coin">
        <center>
          <img className="add" src={Add} />
        </center>
        <Container>
          {/* <p className="alert-section">
          This project is in presale phase. Be careful when investing into
          presales - these projects have no history and no known smart contract.
          <br /> For more information how to spot scams, please read our article
          How To Spot Scams. <br />
          <br />
          Are you the coin owner and want to remove this message? Contact Us Now
        </p> */}
        </Container>
        <Container>
          {/* <Box>      {" "} */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={7} sm={7} lg={7}>
              <Card
                sx={{
                  display: "flex",
                  color: "#fff",
                  backgroundColor: "#1e2635",
                }}
              >
                {/* <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={tokenDetail.coinSymbol}
                alt="Live from space album cover"
              /> */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", color: "#fff" }}>
                    <Typography component="div" variant="h4">
                      {token.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="#fff"
                      component="div"
                    >
                      <b>{token.blockchain} contract address:</b>
                      {tokenDetail.coinAddress ? tokenDetail.coinAddress : "N/A"}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      color: "#fff",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <IconButton
                      aria-label="previous"
                      href={tokenDetail.telegram}
                    >
                      {theme.direction === "rtl" ? (
                        <TelegramIcon
                          sx={{ height: 26, width: 26, color: "#fff" }}
                        />
                      ) : (
                        <TelegramIcon
                          sx={{ height: 26, width: 26, color: "#fff" }}
                        />
                      )}
                    </IconButton>
                    <IconButton
                      aria-label="play/pause"
                      href={tokenDetail.twitter}
                    >
                      <TwitterIcon
                        sx={{ height: 26, width: 26, color: "#fff" }}
                      />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? (
                        <LanguageIcon
                          sx={{ height: 26, width: 26, color: "#fff" }}
                        />
                      ) : (
                        <LanguageIcon
                          sx={{ height: 26, width: 26, color: "#fff" }}
                        />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Card>{" "}
              <br />
              <Card
                sx={{
                  display: "block",
                  padding: 5,
                  color: "#fff",
                  backgroundColor: "#1e2635",
                }}
              >
                <h3>Description</h3>
                <p>{tokenDetail.coinDescription}</p>
                {/* <h5></h5>
              * WHITEPAPER RELEASE <br />
              * STAKING SOON
              <br />
              * AUDITED
              <br />
              * KYC PASSED
              <br />
              <p>
                🥎 Buy from IDO Presale page: https://ido.hyperearn.io <br />
                🥎 Tokens will be credited into your wallet at the same time
                after buying.
              </p> */}
              </Card>{" "}
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <Card
                sx={{
                  display: "flex",
                  backgroundColor: "#1e2635",
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <center>
                    <h2>Coin Information</h2>
                  </center>{" "}
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      KYC Verified:{" "}
                      <span className="answers">Not KYC Verified</span>
                    </Typography>
                    {/* <hr /> */}
                    {/* <Typography component="div" variant="h6">
                    Presale Status:{" "}
                    <span className="answers">
                      <button className="presale-btn">PreSale</button>
                    </span>
                  </Typography> */}

                    {/* <Typography component="div" variant="h6">
                    Listing Status: <span className="answers">500 / 500</span>
                  </Typography> */}
                    <Typography component="div" variant="h6">
                      Launch:{" "}
                      <span className="answers">
                        {tokenDetail.coinLaunchDate}
                      </span>
                    </Typography>
                    <Typography component="div" variant="h6">
                      Votes: <span className="answers">{token.votes}</span>
                    </Typography>
                    {/* <Typography component="div" variant="h6">
                    Votes Today: <span className="answers">29697</span>
                  </Typography> */}
                    <br />
                    <center>
                      <button className="vote-btn" onClick={handleVote}>
                        VOTE FOR {token.name}
                      </button>
                    </center>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <br></br>
        </Container>{" "}
        {/* <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="tab">
              <table>
                <h2>Promoted</h2>

                <tr>
                  <th>Coin</th>
                  <th>Name</th>
                  <th>Chain</th>
                  <th>Market Cup</th>
                  <th>Price</th>
                  <th>Launch</th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <img src={M} className="table-img" />
                  </td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>{" "}
                  <td>
                    <center>⭐ </center>
                  </td>{" "}
                </tr>
                <tr>
                  <td>
                    <img src={Hy} className="table-img" />
                  </td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>{" "}
                  <td>
                    <center>⭐ </center>
                  </td>{" "}
                </tr>
                <tr>
                  <td>
                    <img src={X} className="table-img" />
                  </td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>
                    <center>⭐ </center>
                  </td>{" "}
                </tr>
                <tr>
                  <td>
                    <img src={A} className="table-img" />
                  </td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>
                    <center>⭐ </center>
                  </td>{" "}
                </tr>
                <tr>
                  <td>
                    <img src={D} className="table-img" />
                  </td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>
                    <center>⭐ </center>
                  </td>
                </tr>
              </table>
            </div>
          </Grid>
        </Grid>
      </Container> */}
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
};

export default Coin;
