import React from "react";
import "./PrivacyPolicy.css";
import { Container, Grid, Box, Link } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="privacy">
        <Container>
          <Container>
            <Box>
              <Grid container spacing={4}>
                {/* <Grid xs={12} sm={12} md={12} lg={2} xl={12}> */}
                <div>
                  <h1 className="privacy-heading">Privacy Policy</h1> <br />
                  <h2>Last updated May 27, 2022</h2>
                </div>
                <br />
                <div>
                  {" "}
                  <p>
                    At AltDeck, accessible at Altdeck.io, one of our main
                    priorities is the privacy of our visitors. This Privacy
                    Policy document contains types of information that is
                    collected and recorded by AltDeck and how we use it. If you
                    have additional questions or require more information about
                    our Privacy Policy, do not hesitate to contact us through
                    email at contact@altdeck.io contact@altdeck.io This privacy
                    policy applies only to our online activities and is valid
                    for visitors to our website with regards to the information
                    that they shared and/or collect in AltDeck. This policy is
                    not applicable to any information collected offline or via
                    channels other than this website.
                  </p>
                  <br />
                  <ol>
                    <li>Consent</li>
                    <li>Information we collect</li>
                    <li>How we use your information</li>
                    <li>Log Files</li>
                    <li>Cookies and Web Beacons</li>
                    <li>DoubleClick DART Cookie</li>
                    <li>Advertising Partners Privacy Policies</li>
                  </ol>
                  <br />
                  <h2>Consent</h2>
                  <p>
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                  </p>
                  <h2>Information we collect</h2>
                  <p>
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information. If you contact us directly, we may
                    receive additional information about you such as your name,
                    email address, phone number, the contents of the message
                    and/or attachments you may send us, and any other
                    information you may choose to provide. When you register for
                    an Account, we may ask for your contact information,
                    including items such as name, company name, address, email
                    address, and telephone number.
                  </p>
                  <h2>How we use your information</h2>
                  <p>
                    We use the information we collect in various ways, including
                    to:
                    <ul>
                      <li>Provide, operate, and maintain our website</li>
                      <li>Improve, personalize, and expand our website</li>
                      <li>Understand and analyze how you use our website</li>
                      <li>
                        For creators on collections & launchpad, we publicly
                        display given information about the team on the
                        creator’s collection or and launchpad page
                      </li>
                      <li>
                        Develop new products, services, features, and
                        functionality
                      </li>
                      <li>
                        Communicate with you, either directly or through one of
                        our partners, including for customer service, to provide
                        you with updates and other information relating to the
                        website, and for marketing and promotional purposes
                      </li>
                      <li>Send you emails</li>
                      <li>Find and prevent fraud</li>
                    </ul>
                  </p>
                  <h2>Log Files</h2>
                  <p>
                    AltDeck follows a standard procedure of using log files.
                    These files log visitors when they visit websites. All
                    hosting companies do this and a part of hosting services'
                    analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet
                    Service Provider (ISP), date and time stamp, referring/exit
                    pages, and possibly the number of clicks. These are not
                    linked to any information that is personally identifiable.
                    The purpose of the information is for analyzing trends,
                    administering the site, tracking users' movement on the
                    website, and gathering demographic information.
                  </p>
                  <h2>Cookies and Web Beacons</h2>
                  <p>
                    Like any other website, AltDeck uses ‘cookies'. These
                    cookies are used to store information including visitors'
                    preferences, and the pages on the website that the visitor
                    accessed or visited. The information is used to optimize the
                    users' experience by customizing our web page content based
                    on visitors' browser type and/or other information.
                  </p>
                  <h2>DoubleClick DART Cookie</h2>
                  <p>
                    Google is one of a third-party vendor on our site. It also
                    uses cookies, known as DART cookies, to serve ads to our
                    site visitors based upon their visit to www.AltDeck.com and
                    other sites on the internet. However, visitors may choose to
                    decline the use of DART cookies by visiting the Google ad
                    and content network Privacy Policy at the following URL –
                    https://policies.google.com/technologies/ads. Some of
                    advertisers on our site may use cookies and web beacons. Our
                    advertising partners are listed below. Each of our
                    advertising partners has their own Privacy Policy for their
                    policies on user data. For easier access, we hyperlinked to
                    their Privacy Policies below.
                    <ul>
                      <li>
                        <Link href="https://policies.google.com/technologies/ads">
                          Google
                        </Link>
                      </li>
                    </ul>
                  </p>
                  <h2>Advertising Partners Privacy Policies</h2>
                  <p>
                    You may consult this list to find the Privacy Policy for
                    each of the advertising partners of AltDeck.
                  </p>
                </div>{" "}
              </Grid>
            </Box>
          </Container>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
