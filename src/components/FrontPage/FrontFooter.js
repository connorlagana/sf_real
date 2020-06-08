import React from "react";
import twitter from "../../socialmedia/twitter.svg";
import facebook from "../../socialmedia/facebook.svg";
import instagram from "../../socialmedia/instagram.svg";

const FrontFooter = () => {
  return (
    <div className="FrontFooter">
      <div className="leftFF">
        <div className="lffCol">
          <div id="lfTitle">SoundFlex</div>
          <div>
            <div id="lfBul">About</div>
            <div id="lfBul">Jobs</div>
          </div>
        </div>
        <div className="lffCol">
          <div id="lfTitle">Links</div>
          <div>
            <div id="lfBul">Mobile App</div>
          </div>
        </div>
      </div>
      <div className="rightFF">
        <svg src={twitter} />
        <svg src={facebook} />
        <svg src={instagram} />
      </div>
    </div>
  );
};

export default FrontFooter;
