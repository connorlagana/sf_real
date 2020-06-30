import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const FrontFooter = () => {
  return (
    <div className="FrontFooter">
      <div className="leftFF">
        {/* <div className="lffCol">
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
        </div> */}
      </div>
      <div className="rightFF">
        <SocialMediaIconsReact
          // borderWidth="3"
          // borderStyle="solid"
          icon="twitter"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(50,50,50,1)"
          iconSize="1"
          roundness="100%"
          url="https://twitter.com"
          size="75"
        />
        <SocialMediaIconsReact
          // borderWidth="3"
          // borderStyle="solid"
          icon="instagram"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(50,50,50,1)"
          iconSize="1"
          roundness="100%"
          url="https://instagram.com"
          size="75"
        />
        <SocialMediaIconsReact
          // borderWidth="3"
          // borderStyle="solid"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(50,50,50,1)"
          iconSize="1"
          roundness="100%"
          url="https://facebook.com"
          size="75"
        />
      </div>
    </div>
  );
};

export default FrontFooter;
