import React from "react";
// import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Link } from 'react-router-dom';
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpeg";
export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <Container>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={8} lg={6}>
                <br></br>
                <Box>
                  <Link to="/">
                    <img src={Logo} className="footer-logo" />
                  </Link>
                </Box>
                <br></br>
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={3}>
                <br></br>
                <Box>
                  <h3>Quick Links</h3>
                  <Link to="/privacyPolicy" className="footerLinks">
                    Privacy Policy
                  </Link>
                </Box>
                <Box>
                  <Link to="/tos" className="footerLinks">
                    TOS
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={3}>
                <br></br>
                <Box>
                  <h3>Follow Us</h3>
                  <a
                    className="footerLinks"
                    href="https://t.me/AltDeck"
                    color="inherit"
                  >
                    <TelegramIcon />
                  </a>
                  <a
                    className="footerLinks"
                    href="https://www.twitter.com/@AltDeck_io"
                    color="inherit"
                  >
                    <TwitterIcon />
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </footer>
    </div>
  );
}
