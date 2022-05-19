import React from "react";
import "./PromotionPage.css";
import PromotionLogo from "../../images/promotion-logo.webp";
import DaimondLogo from "../../images/diamond-logo.webp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dab from "../../images/dab.webp";
import { Container } from "@mui/material";
import Fire from "../../images/fire.webp";
import MoonerFing from "../../images/moonerfing.webp";
import Moonerocket from "../../images/moonerocket.webp";
import Starfly from "../../images/starfly.webp";
import Star from "../../images/star.webp";
import PancakeSwap from "../../images/pancakeswap.webp";

import Partners from "../../components/partners/Partners";

const PromotionPage = () => {
  return (
    <div className="promotion-page">
      <center>
        <img src={PromotionLogo} />
        <h1>Need to boost your marketing?</h1>
        <h3>
          You are in the right place and your ad will be shown to the right
          people. Driving traffic is our <br /> bread and butter and we are
          constantly growing.
        </h3>
        <h2>Promote your coin to 10k to 37k unique users daily!</h2>
        <h2>
          <img className="daimond-logo" src={DaimondLogo} /> Promote packages
          and prices
        </h2>
      </center>
      <Container>
        {/* <Box>      {" "} */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sm={4} lg={4}>
            <Box className="promotion-pakages">
              <h2>Promoted coins section</h2>
              <div className="promotion-section-text">
                <span className="circle-logo">&#9679; </span> 1 day promotion -
                0.2 BNB
                <br />
                <span className="circle-logo">&#9679; </span>3 days promotion -
                0.5 BNB <br />
                <span className="circle-logo">&#9679; </span> 5 days promotion -
                0.7 BNB <br />
                <span className="circle-logo">&#9679; </span> 1 week promotion -
                1 BNB <br />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className="promotion-pakages">
              {" "}
              <h2>Rotating banner</h2>
              <div className="promotion-section-text">
                <span className="circle-logo"> &#9679;</span> 1 day promotion -
                0.2 BNB
                <br />
                <span className="circle-logo"> &#9679;</span> 3 days promotion -
                0.5 BNB <br />
                <span className="circle-logo"> &#9679;</span> 5 days promotion -
                0.7 BNB <br />
                <span className="circle-logo"> &#9679;</span> 1 week promotion -
                1 BNB <br />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className="promotion-pakages">
              <h2>Pop-up (any size)</h2>
              <div className="promotion-section-text">
                {" "}
                <span className="circle-logo">&#9679; </span> 1 day promotion -
                0.2 BNB
                <br />
                <span className="circle-logo">&#9679; </span> 3 days promotion -
                0.5 BNB <br />
                <span className="circle-logo">&#9679; </span> 5 days promotion -
                0.7 BNB <br />
                <span className="circle-logo">&#9679; </span> 1 week promotion -
                1 BNB <br />{" "}
              </div>
            </Box>
          </Grid>
        </Grid>
        <br></br>
      </Container>{" "}
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box className="promotion-pakages">
                <h3>KYC For Projects | Doxxing</h3>
                <div className="promotion-section-text">
                  Project owners - 1 BNB
                  <br />
                  Entire team - 1.5 BNB
                  <br />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box className="promotion-pakages">
                {" "}
                <h3>Contract Audit</h3>
                <div className="promotion-section-text">
                  Get your smart contract verified <br />
                  by a team of blockchain security analysts
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box className="promotion-pakages">
                <h3>Our Email-base promotion</h3>
                <div className="promotion-section-text">
                  More than 10k real potential <br />
                  investors - 5 BNB
                </div>
              </Box>
            </Grid>
          </Grid>

          <br></br>
        </Box>
      </Container>
      <center>
        <Grid>
          <Box>
            <h1>Telegram influencer promotion</h1>
            <br />
            <h3>
              We've partnered with the biggest Telegram influencers who can help
              you boost your marketing <br /> and fill presale in seconds! These
              are influencers in big communities who have lots of followers{" "}
              <br />
              worldwide and some of them are leaders in Turkey and France. We've
              worked with all of them <br />
              and thus they helped our presale to end within 15 seconds. Please
              contact <br /> @CoinMoonerPromo for more information.
            </h3>
          </Box>
        </Grid>
        <br />
        <h1>
          {" "}
          <img src={Fire} className="fire-logo" /> Combo Packages
        </h1>
      </center>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              {" "}
              <Box className="combo-pakage-one">
                <h2>Promoted + rotating</h2>
                <div className="promotion-section-text">
                  3 days - 1.1 BNB
                  <br />
                  5 days - 1.6 BNB
                  <br />7 days - 2.2 BNB
                </div>
                <img className="mooner-logo" src={MoonerFing} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              {" "}
              <Box className="combo-pakage-two">
                {" "}
                <h2>Promoted + wide header + pop-up</h2>
                <div className="promotion-section-text">
                  3 days - 4 BNB <br />
                  5 days - 6.5 BNB <br />7 days - 8 BNB
                </div>
                <img src={Moonerocket} className="mooner-rocket" />{" "}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              {" "}
              <Box className="combo-pakage-three">
                <h3>Promoted + wide header + rotating</h3>
                <div className="promotion-section-text">
                  3 days - 2.5 BNB <br />
                  5 days - 4 BNB <br />7 days - 5 BNB
                </div>
                <img className="mooner-logo-two" src={Dab} />
              </Box>
            </Grid>
          </Grid>

          <br></br>
        </Box>
      </Container>
      <center>
        <h1>
          {" "}
          <img src={Starfly} /> Get 10% discount on any ads!
        </h1>
        <h3>
          Put a backlink to CoinMooner on your project website and receive a{" "}
          <span className="percentage-text">10% </span>
          discount for any ad <br /> package!
        </h3>
        <h1 className="discount-heading">
          <img src={Star} /> Get 25% discount on any ads!
        </h1>
        {/* <Container>
          <Box>
            <Grid container spacing={4}>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <h3 className="discount-text">
                  Get <span className="percentage-text">25% </span> off
                  instantly by paying partly in $MOONER
                </h3>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <h3 className="discount-text">
                  Holders of 100,000+ $MOONER get{" "}
                  <span className="percentage-text">10% </span> discount on all
                  ads!
                  <br />
                  <button className="pancakeSwap">
                    <img src={PancakeSwap} className="pancake-logo" />
                  </button>
                </h3>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <h3 className="discount-text">
                  Pay <span className="percentage-text">40% </span> of total
                  price in BNB, and{" "}
                  <span className="percentage-text">35% </span> in $MOONER
                  equivalent, and get <br />{" "}
                  <span className="percentage-text">25% </span> discount
                </h3>
              </Grid>
            </Grid>
          </Box>
        </Container> */}
        <Partners />
      </center>
    </div>
  );
};

export default PromotionPage;
