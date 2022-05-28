import React from "react";
import "./Tos.css";
import { Container, Grid, Box } from "@mui/material";

// import React from "react";
// import "./PrivacyPolicy.css";
// import { Container, Grid, Box } from "@mui/material";

// const PrivacyPolicy = () => {

const Tos = () => {
  return (
    <div className="tos">
      <Container>
        <Container>
          <Box>
            <Grid container spacing={4}>
              {/* <Grid xs={12} sm={12} md={12} lg={2} xl={12}> */}
              <div>
                <h1 className="terms-heading">Terms and Conditions</h1> <br />
                <h2>Last updated May 27, 2022</h2>
              </div>
              <br />
              <div>
                {" "}
                <p>
                  Please read these terms and conditions carefully before using
                  Our Service. Aldeck.io shall have the right at any time to
                  impose, change, or modify the Terms and Conditions of Use of
                  this web site, or any part thereof, at its sole discretion. Such
                  changes, modifications, additions, or deletions shall be
                  effective immediately upon posting on the web site. User agrees
                  to review the terms and conditions periodically and be aware or
                  such revisions. Your continued use of this site shall
                  conclusively be deemed to constitute your acceptance of the
                  modified Terms of Use. By using altdeck.io you agree to be
                  bound by the terms and conditions of this Agreement and
                  Altdeck's Privacy and Security Policy, as they may be amended
                  from time to time in the future. You represent that you are over
                  the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
                <br />
                <ol>
                  <li>Terms</li>
                  <li>Use License</li>
                  <li>Disclaimer</li>
                  <li>Limitations</li>
                  <li>Token Applications</li>
                  <li>Links</li>
                  <li>Site Terms of Use Modifications</li>
                  <li>Not a financial advisor</li>
                  <li>Paid Promotions</li>
                  <li>Governing Law</li>
                </ol>
                <br />
                <h2>Terms</h2>
                <p>
                  By accessing this AltDeck, accessible from altdeck.io, you are
                  agreeing to be bound by these Website Terms and Conditions of Use
                  and agree that you are responsible for the agreement with any
                  applicable local laws. If you disagree with any of these terms,
                  you are prohibited from accessing this site. The materials contained
                  in this Website are protected by copyright and trade mark law.
                </p>
                <h2>Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials
                  on AltDeck for personal, non-commercial transitory viewing only. This
                  is the grant of a license, not a transfer of title, and under this license
                  you may not:
                  Modify or copy the materials;
                  Use the materials for any commercial purpose or for any public display;
                  Attempt to reverse engineer any software contained on AltDeck;
                  Remove any copyright or other proprietary notations from the materials;
                  or This will let AltDeck to terminate upon violations of any of these restrictions.
                  Upon termination, your viewing right will also be terminated and you should
                  destroy any downloaded materials in your possession whether it is printed or
                  electronic format.
                </p>
                <h2>Disclaimer</h2>
                <p>
                  All the materials on AltDeck are provided “as is”. AltDeck makes no warranties,
                  may it be expressed or implied, therefore negates all other warranties. Furthermore,
                  AltDeck does not make any representations concerning the accuracy or reliability
                  of the use of the materials on its Website or otherwise relating to such materials
                  or any sites linked to this Website. AltDeck makes no warranty that our website will
                  be online uninterrupted. Furthermore AltDeck is not responsible for the following,
                  this also implies creators:
                  <ul>
                    <li>server failure or data loss</li>
                    <li>corrupted files</li>
                    <li>
                      user errors such as forgotten passwords, mis typed passwords, mis typed addresses,
                      failed transactions
                    </li>
                    <li>unauthorized access to applications</li>
                    <li>botting of any tokens</li>
                  </ul>
                </p>
                <h2>Limitations</h2>
                <p>
                  AltDeck or its suppliers will not be hold accountable for any damages that will arise
                  with the use or inability to use the materials on AltDeck’s , even if AltDeck or an
                  authorize representative of this Website has been notified, orally or written, of the
                  possibility of such damage. Some jurisdiction does not allow limitations on implied
                  warranties or limitations of liability for incidental damages, these limitations may
                  not apply to you
                </p>
                <h2>Token Applications</h2>
                <p>
                  In order to list a token you agree to the following terms:
                  <ul>
                    <li>provide accurate information about the token</li>
                    <li>maintain and update information up to date</li>
                    <li>immediately notify us when there’s a security breaches</li>
                  </ul>
                </p>
                <h2>Links</h2>
                <p>
                  AltDeck has not reviewed all of the sites linked to its Website and is not responsible
                  for the contents of any such linked site. The presence of any link does not imply
                  endorsement by AltDeck of the site. The use of any linked website is at the user's own risk.
                </p>
                <h2>Site Terms of Use Modifications</h2>
                <p>
                  AltDeck may revise these Terms of Use for its Website at any time without prior notice.
                  By using this Website, you are agreeing to be bound by the current version of these Terms and
                  Conditions of Use.
                </p>
                <h2>Not a financial advisor</h2>
                <p>
                  <strong>NEITHER ALTDECK NOR THE SERVICE INTENDED TO PROVIDE LEGAL, TAX OR FINANCIAL ADVICE.</strong>
                  Always do your own research, we cannot be held for any kind of loss. Before making any final
                  decisions or implementing any financial strategy, you should consider obtaining additional
                  information and advice from your accountant or other financial advisers who are fully aware
                  of your individual circumstances.
                </p>
                <h2>Paid Promotions</h2>
                <p>
                  Any coin can be listed in the promoted section, these are paid advertisements. These are not
                  verified coins, if we have reports of rugpulling or scamming we reserve the right to delist
                  these coins as some as we can from this sections.
                </p>
                <h2>Governing Law</h2>
                <p>
                  Any claim related to AltDeck Website shall be governed by the laws of the United States
                  without regards to its conflict of law provisions.
                </p>
              </div>{" "}
            </Grid>
          </Box>
        </Container></Container>
    </div>
  );
};

export default Tos;
