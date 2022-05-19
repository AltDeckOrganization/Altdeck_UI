import React from "react";
import "./AddNewToken.css";
import { Container, Box, Grid } from "@mui/material";

const AddNewToken = () => {
  return (
    <div>
      <div className="addtoken">
        <center>
          <h1 className="coin-info-heading">Add Your Coin</h1>
        </center>

        <Container>
          <Box>
            <Grid container spacing={4} className="input-section">
              {/* <Grid item xs={12} sm={12} md={0} lg={2}></Grid> */}
              <Grid item  xs={12} sm={6} md={4} lg={4}>                    <Box>
                  <h2>Coin Info</h2>
                  <form action="/action_page.php">
                    <label for="fname">
                      Name: <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. bitcoin"
                    />
                    <br />
                    <br />
                    <label for="lname">
                      Symbol: <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="symbol"
                      placeholder="e.g. BTC"
                    />
                    <br /> <br />
                    <label for="lname">
                      Description <span className="required">required</span>
                    </label>
                    <br />
                    <textarea
                      id="txtid"
                      name="txtname"
                      rows="8"
                      cols="39"
                      maxlength="200"
                      placeholder="e.g. Bitcoin is a decentralized digital currency"
                    ></textarea>
                    <br /> <br />
                    <label for="fname">Price in USD </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. 0.006"
                    />
                    <br />
                    <br />{" "}
                    <label for="lname">
                      Launch date (YYYY-MM-DD){" "}
                      <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                      value="Doe"
                    />
                    <br /> <h2>Coin Address</h2>
                    <br />{" "}
                    <label>
                      Chain <span className="required">required</span>
                    </label>{" "}
                    <br />
                    <select className="dropdown">
                      <option value="audi" selected>
                        -
                      </option>{" "}
                      <option value="volvo">ADA</option>
                      <option value="saab">Algorand</option>
                      <option value="vw">Avalanche</option>
                      <option value="volvo">Binance Smart Chain</option>
                      <option value="saab">Bitcoin Clone</option>
                      <option value="vw">Cronos</option>{" "}
                      <option value="volvo">DeepOnion</option>
                      <option value="saab">Elastos</option>
                      <option value="vw">Enecuum</option>{" "}
                      <option value="volvo">Erond chain</option>
                      <option value="saab">Ethereum</option>
                      <option value="vw">Fantom</option>{" "}
                      <option value="volvo">Gnosis</option>
                      <option value="saab">HTMLCOIN HRC20</option>
                      <option value="vw">Harmony</option>{" "}
                      <option value="volvo">KardiaChain Ecosystem</option>
                      <option value="saab">KuCoin Community Chain</option>
                      <option value="vw">Mikomeda</option>{" "}
                      <option value="saab">Moonriver</option>
                      <option value="vw">MultiVAC</option>{" "}
                      <option value="volvo">OASIS</option>
                      <option value="saab">Polkadot</option>
                      <option value="vw">Polygon</option>{" "}
                      <option value="volvo">RADIX DLT</option>
                      <option value="saab">SDEX</option>
                      <option value="vw">SiriCoin</option>{" "}
                      <option value="volvo">Solana</option>
                      <option value="saab">TRON</option>
                      <option value="vw">Telos</option>{" "}
                      <option value="vw">Tera</option>{" "}
                      <option value="volvo">WAX</option>
                      <option value="saab">Waves</option>
                      <option value="vw">XRPL</option>{" "}
                    </select>
                    <br />
                    <br />
                    <label for="lname">
                      Address <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder=""
                    />
                    <br />{" "}
                  </form>
                </Box>
              </Grid>
              <Grid item  xs={12} sm={6} md={4} lg={4}>                    <Box>
                  <h2>Links</h2>
                  <form action="/action_page.php">
                    <label for="fname">Website</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="www.example.com"
                    />
                    <br />
                    <br /> <label for="lname">Audit</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="e.g. https://github.com/bitcoin"
                    />
                    <br />
                    <br />{" "}
                    <label for="fname">
                      Telegram <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. https://t.me/bitcoin"
                    />
                    <br />
                    <br /> <label for="lname">Twitter</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="e.g. https://twitter.com/bitcoin"
                    />
                    <br /> <label for="fname">Discord</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. https://discord.gg/46URkm"
                    />
                    <br />
                    <br /> <label for="lname">Reddit</label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="e.g. https://reddit.com/r/bitcoin"
                    />
                    <br />
                    <br />{" "}
                    <label for="fname">
                      Logo <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g. https://i.ibb.co/logo.png"
                    />
                    <br /> <br />
                    <label for="lname">
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
                      maxlength="200"
                      placeholder=""
                    ></textarea>
                    <br />
                    <br /> <h2>Contact Info</h2>
                    <h3>
                      For later changes to coin info, please provide the
                      following:
                    </h3>
                    <label for="lname">
                      Contact Email <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                    />{" "}
                    <br /> <br />
                    <label for="lname">
                      Contact Telegram{" "}
                      <span className="required">required</span>
                    </label>
                    <br />
                    <input
                      className="input-section"
                      type="text"
                      id="lname"
                      name="lname"
                    />{" "}
                  </form>
                  <div>
                    {" "}
                    <br />
                    <button className="add-coin-btn">Add Coin</button>
                  </div>{" "}
                </Box>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={0} lg={2}></Grid> */}
            </Grid>
            <br></br>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AddNewToken;
