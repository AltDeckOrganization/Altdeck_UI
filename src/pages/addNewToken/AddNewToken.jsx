import React, { useState } from "react";
import axios from "axios";
import "./AddNewToken.css";
import { Container, Box, Grid } from "@mui/material";

const AddNewToken = () => {

  // All coins
  const coins = ["----", "ADA", "Algorand", "Avalanche", "Binance Smart Chain", "Bitcoin Clone",
    "Cronos", "DeepOnion", "Elastos", "Enecuum", "Eround chain", "Ethereum", "Fantom",
    "Gnosis", "HTMLCOIN HR20", "Harmony", "KardiaChain Ecosystem", "KuCoin Community Chain",
    "Mikomenda", "Moonriver", "MultiVAC", "OASIS", "Polkadot", "Polygon", "RADIX", "SDEX",
    "SiriCoin", "Solana", "TRON", "Telos", "Tera", "WAX", "Waves", "XRPL"]

  // coins array for select option <dropdown>
  const coinsList = Array.from(coins)

  // Coin info
  const [coinName, setCoinName] = useState();
  const [coinSymbol, setCoinSymbol] = useState();
  const [coinDescription, setCoinDescription] = useState();
  const [coinPrice, setCoinPrice] = useState();
  const [coinLaunchDate, setCoinLaunchDate] = useState();

  // Coin address
  const [coinChain, setCoinChain] = useState();
  const [coinAddress, setCoinAddress] = useState();

  // Links
  const [website, setWebsite] = useState();
  const [audit, setAudit] = useState();
  const [twitter, setTwitter] = useState()
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();
  const [reddit, setReddit] = useState();
  const [logo, setLogo] = useState();
  const [addInfo, setAddInfo] = useState();

  // Contact info
  const [emailContact, setEmailContact] = useState();
  const [telegramContact, setTelegramContact] = useState();

  // Add new coin
  const handleAddCoin = (e) => {
    e.preventDefault();

    const formData = {
      coinSymbol,
      coinDescription,
      coinPrice,
      coinLaunchDate,
      coinAddress,
      website,
      audit,
      telegram,
      twitter,
      discord,
      reddit,
      logo,
      addInfo,
      emailContact,
      telegramContact
    };

    const formDataToString = JSON.stringify(formData);
    const serverUrl = process.env.REACT_APP_BACKEND_URL;
    const url = `${serverUrl}/api/v1/tokens`;
    const data = {
      name: coinName,
      blockchain: coinChain,
      token_detail: formDataToString,
      date_deleted: new Date()
    };
    axios
      .post(url, data)
      .then((data) => {
        console.log(data)
      })
      .catch((e) => console.log(e));

    setCoinName("");
    setCoinSymbol("");
    setCoinDescription("");
    setCoinPrice("");
    setCoinLaunchDate("");
    setCoinChain("");
    setCoinAddress("");
    setWebsite("");
    setAudit("");
    setTelegram("");
    setTwitter("");
    setDiscord("");
    setReddit("");
    setLogo("");
    setAddInfo("");
    setEmailContact("");
    setTelegramContact("");
  };

  return (
    <div>
      <div className="addtoken">
        <center>
          <h1 className="coin-info-heading">Add Your Coin</h1>
        </center>

        <form onSubmit={handleAddCoin}>
          <Container>
            <Box>
              <Grid container spacing={4} className="input-section">
                {/* <Grid item xs={12} sm={12} md={0} lg={2}></Grid> */}
                <Grid item xs={12} sm={6} md={4} lg={4}>                    <Box>
                  <h2>Coin Info</h2>
                  <label htmlFor="fname">
                    Name: <span className="required">required</span>
                  </label>
                  <br />
                  <input
                    className="input-section"
                    type="text"
                    id="fname"
                    name="coinName"
                    value={coinName}
                    onChange={e => setCoinName(e.target.value)}
                    placeholder="e.g. bitcoin"
                  />
                  <br />
                  <br />
                  <label htmlFor="lname">
                    Symbol: <span className="required">required</span>
                  </label>
                  <br />
                  <input
                    className="input-section"
                    type="text"
                    id="lname"
                    name="coinSymbol"
                    value={coinSymbol}
                    onChange={e => setCoinSymbol(e.target.value)}
                    placeholder="e.g. BTC"
                  />
                  <br /> <br />
                  <label htmlFor="lname">
                    Description <span className="required">required</span>
                  </label>
                  <br />
                  <textarea
                    id="txtid"
                    name="coinDescription"
                    rows="8"
                    cols="39"
                    maxLength="200"
                    value={coinDescription}
                    onChange={e => setCoinDescription(e.target.value)}
                    placeholder="e.g. Bitcoin is a decentralized digital currency"
                  ></textarea>
                  <br /> <br />
                  <label htmlFor="fname">Price in USD </label>
                  <br />
                  <input
                    className="input-section"
                    type="text"
                    id="fname"
                    name="coinPrice"
                    value={coinPrice}
                    onChange={e => setCoinPrice(e.target.value)}
                    placeholder="e.g. 0.006"
                  />
                  <br />
                  <br />{" "}
                  <label htmlFor="lname">
                    Launch date (YYYY-MM-DD){" "}
                    <span className="required">required</span>
                  </label>
                  <br />
                  <input
                    className="input-section"
                    type="text"
                    id="lname"
                    name="lname"
                    value={coinLaunchDate}
                    onChange={e => setCoinLaunchDate(e.target.value)}
                  />
                  <br /> <h2>Coin Address</h2>
                  <label>
                    Chain <span className="required">required</span>
                  </label>{" "}
                  <select className="dropdown"
                    onChange={e => setCoinChain(e.target.value)}
                  >
                    {
                      coinsList.map((coin) =>
                        <option key={coin} value={coin}>
                          {coin}
                        </option>)
                    }
                  </select>
                  <br />

                  <br />
                  <label htmlFor="lname">
                    Address <span className="required">required</span>
                  </label>
                  <br />
                  <input
                    className="input-section"
                    type="text"
                    id="lname"
                    name="coinAddress"
                    placeholder=""
                    value={coinAddress}
                    onChange={e => setCoinAddress(e.target.value)}
                  />
                  <br />{" "}
                </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Box>
                    <h2>Links</h2>
                    <label htmlFor="fname">Website</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="website"
                      placeholder="www.example.com"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                    />
                    <br />
                    <br /> <label htmlFor="lname">Audit</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="audit"
                      value={audit}
                      onChange={e => setAudit(e.target.value)}
                      placeholder="e.g. https://github.com/bitcoin"
                    />
                    <br />
                    <br />{" "}
                    <label htmlFor="fname">
                      Telegram <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="telegram"
                      value={telegram}
                      onChange={e => setTelegram(e.target.value)}
                      placeholder="e.g. https://t.me/bitcoin"
                    />
                    <br />
                    <br /> <label htmlFor="lname">Twitter</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="twitter"
                      value={twitter}
                      onChange={e => setTwitter(e.target.value)}
                      placeholder="e.g. https://twitter.com/bitcoin"
                    />
                    <br /> <label htmlFor="fname">Discord</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="discord"
                      value={discord}
                      onChange={e => setDiscord(e.target.value)}
                      placeholder="e.g. https://discord.gg/46URkm"
                    />
                    <br />
                    <br /> <label htmlFor="lname">Reddit</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="reddit"
                      value={reddit}
                      onChange={e => setReddit(e.target.value)}
                      placeholder="e.g. https://reddit.com/r/bitcoin"
                    />
                    <br />
                    <br />{" "}
                    <label htmlFor="fname">
                      Logo <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="logo"
                      value={logo}
                      onChange={e => setLogo(e.target.value)}
                      placeholder="e.g. https://i.ibb.co/logo.png"
                    />
                    <br /> <br />
                    <label htmlFor="lname">
                      Additional information, other links
                      <br /> and addresses{" "}
                      <span className="required">required</span>
                    </label>
                    <br />
                    <textarea
                      id="txtid"
                      name="txtname"
                      rows="8"
                      cols="39"
                      maxLength="200"
                      placeholder=""
                      value={addInfo}
                      onChange={e => setAddInfo(e.target.value)}
                    ></textarea>
                    <br />
                    <br /> <h2>Contact Info</h2>
                    <h3>
                      For later changes to coin info, please provide the
                      following:
                    </h3>
                    <label htmlFor="lname">
                      Contact Email <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="emailContact"
                      value={emailContact}
                      onChange={e => setEmailContact(e.target.value)}
                    />{" "}
                    <br /> <br />
                    <label htmlFor="lname">
                      Contact Telegram{" "}
                      <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="telegramContact"
                      value={telegramContact}
                      onChange={e => setTelegramContact(e.target.value)}
                    />{" "}
                    <div>
                      {" "}
                      <br />
                      <button
                        className="add-coin-btn"
                        type="submit"
                      >
                        Add Coin
                      </button>
                    </div>{" "}
                  </Box>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={0} lg={2}></Grid> */}
              </Grid>
              <br></br>
            </Box>
          </Container>
        </form>
      </div>
    </div>
  );
};

export default AddNewToken;
