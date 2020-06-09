import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = (props) => {
  return (
    <div className="mainPageWindow">

      <div className="welcomeSection">
        <div className="welcomeSep">
          <div className="welcomeBox">
            <h1>Welcome</h1>
            <p className="siteDesc">This site is a time capsule that seeks to record aspects of quantified tracking during daily life in COVID-19</p>
            <p className="caption">Site by Jennifer Qian for WGSS 57 Data and Bodies</p>
          </div>
          {/* src={require(’./images/abstract-access.jpg’)} */}
          <img src="https://i.imgur.com/gryOQhR.png" style={{ width: '20px', height: '20px' }} alt="scroll down" />
        </div>
      </div>

      <div className="introSection">
        <h1>Introduction</h1>
        <div className="introBox">
          <div className="introText">
            <p style={{ lineHeight: 2 }}> In the Spring of 2020, the COVID-19 pandemic began, and its large-scale impact immediately affected myriad aspects of daily life.
              This site’s goal is to provide a time capsule of life during COVID-19 through the lens of self-quantification. The various aspects of quantified
              life are broken down into two main categories: the micro (individual) and macro (aggregate) scale. The pandemic has affected individual lives in
              immense ways consistent across the board, and the micro section includes various common views and habits that track changes in lifestyle. The macro
              section records the various numbers, projections, and data that someone living during this time would come into contact with on a daily basis: these are
              the numbers that are used in this time to quantify the rapidly developing situation and impact social-distancing. The images and data in both categories work
              together to give a full-faceted overview of life during the 2020 pandemic through the perspective of a US college student.
            </p>
            {/* <button type="button" link="https://doist.com/blog/quantified-self-apps/" className="squareButton">Quantified self magnified with COVID-19: </button>
            <button type="button" link="https://qz.com/quartzy/1644006/the-psychology-of-self-tracking/" className="squareButton">More </button> */}
          </div>
          <div className="videoBox">
            <video controls width="450" height="700" autoPlay loop muted id="introVideo">
              <source src="https://filebin.net/zqex6afsye6n6k3m/introVidCrop.mp4?t=tkhfnhqh" style={{ width: 300 }} type="video/mp4" />
            </video>
            <a href="https://filebin.net/zqex6afsye6n6k3m/introVidCrop.mp4?t=tkhfnhqh">Source</a>
          </div>
          {/* <div className="introPics">
            <h1>pic 1</h1>
            <h1>pic 2</h1>
            <h1>pic 3</h1>
          </div> */}
        </div>
      </div>

      <div className="micro">
        <div className="microHeader">
          <h1 className="bruh">Micro-level</h1>
          <Link to="/micro" className="btn">Explore All</Link>
        </div>
        <p>Daily life changes and insights for the individual</p>

        <div className="qs">

          <div className="Health">
            <img src="https://i.imgur.com/I1dzZxn.jpg" style={{ width: '400px', height: '400px' }} alt="Health" />
            <p> sleep | exercise | diet</p>
            {/* <div className="sleep"> Sleep</div>
            <div className="exercise"> Exercise</div>
            <div className="diet"> Diet</div> */}
            {/* <button type="button" className="squareButton">Health(phys and emotional): mood, food, exercise</button> */}
          </div>

          <div className="popAct">
            <img src="https://i.imgur.com/hBoh3lO.jpg" style={{ width: '400px', height: '400px' }} alt="future" />
            <p>future | finances | productivity</p>
            {/* <div className="finances"> Finances</div> */}
            {/* <button type="button" link=" https://www.washingtonpost.com/business/2020/04/17/your-money-pandemic/?arc404=true" className="squareButton">Money and Finance </button> */}
            {/* <div className="productivity"> Productivity</div> */}
            {/* <button type="button" link="https://www.visualcapitalist.com/covid-19-impact-on-app-popularity/" className="squareButton">Productivity magnified with COVID-19: </button> */}
            {/* <button type="button" link=" https://www.socialmediatoday.com/news/people-are-spending-20-more-time-in-apps-during-the-covid-19-lockdowns-re/575403/"
            className="squareButton"></button> */}
          </div>

          <div className="screenNsocial">
            <img src="https://i.imgur.com/Cm0zM0Q.jpg" style={{ width: '400px', height: '400px' }} alt="Social" />
            <p>social | screentime</p>
            {/* <div className="social"> Social</div> */}
            {/* <div className="screenTime"> Screentime</div> */}
            {/* Screen Time/Social life  */}
            {/* <button type="button" link=" https://www.washingtonpost.com/technology/2020/03/24/screen-time-iphone-coronavirus-quarantine-covid/"
            className="squareButton">Screen N Social</button> */}
          </div>


        </div>

      </div>


      <div className="macro">

        <div className="macroText">
          <h1 className="bruh"> Macro-level</h1>
          <p> Macro scale tracking seen through the lens of daily life</p>
          <button type="button" className="squareButton"><Link to="/macro" className="btn"><text style={{ color: 'white' }}>Explore All</text></Link> </button>
        </div>
        {/* link=" https://www.washingtonpost.com/business/2020/04/17/your-money-pandemic/?arc404=true" */}
        {/* <video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}
        <div className="macroDisplay">
          <img src="https://i.imgur.com/uhsS51A.png" style={{ height: '400px' }} alt="us at home" />
        </div>

      </div>


      <div className="footer">
        <h1>Thank you for Viewing!</h1>
        <p className="footerCap">2020 Jennifer Qian for WGSS 57 @ Dartmouth College</p>
      </div>
    </div>


  );
};


export default Welcome;
