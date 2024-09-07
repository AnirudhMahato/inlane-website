import React from "react";
import PageTemplate from "./PageTemplate";
import { Typography } from "@mui/material";

const Disclaimer = () => {
  return (
    <PageTemplate title="Disclaimer">
      <Typography
        variant="body1"
        paragraph
        fontFamily="Bricolage Grotesque"
        fontSize={16}
      >
        The Learner (“Customer”, “You”, “Your” and “User”) agrees and
        acknowledges that the use of the Platform (“Mobile Application”,
        “Website” and “Web Application”) is at the sole risk of the Customer and
        that Company (“InLane”, “Lane”, “Us”, “Our” and ”We”) disclaims all
        representations and warranties of any kind, whether express or implied
        as to condition, suitability, quality and fitness for any purposes are
        excluded to the fullest extent permitted by law.
        <br></br>
        <br></br>
        The information contained on this Platform is for general information
        purposes only. The information is provided by InLane and while we
        endeavour to keep the information up to date and correct, We make no
        representations or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, suitability or availability with
        respect to the website or the information, products, services, or
        related graphics contained on the Platform for any purpose. Any reliance
        you place on such information is therefore strictly at your own risk.
        <br></br>
        <br></br>
        In no event will We be liable for any loss or damage including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of our Platform.
        <br></br>
        <br></br>
        Through our Platform you are able to link to other websites which are
        not under the control of InLane. We have no control over the nature,
        content and availability of those sites. The inclusion of any links does
        not necessarily imply a recommendation or endorse the views expressed
        within them.
        <br></br>
        <br></br>
        Every effort is made to keep our Platform up and running smoothly.
        However, InLane takes no responsibility for, and will not be liable for,
        the Platform being temporarily unavailable due to technical issues
        beyond our control.
      </Typography>
    </PageTemplate>
  );
};

export default Disclaimer;
