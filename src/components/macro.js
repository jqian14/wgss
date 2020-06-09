import React from 'react';

const Macro = (props) => {
  return (

    <div className="microPage">
      <div className="microTitle">
        <h1>MACRO SCALE</h1>
      </div>
      <div className="categories">
        <div className="healthNSocial">
          <h2>CASE ENUMERATION</h2>
          <div className="singleBoxCol"> <h3>Global Cases</h3>
            <img src="https://i.imgur.com/JJGRc2Z.png"
              style={{
                marginLeft: 40, marginBottom: 40, height: '100%', width: '90%',
              }}
              alt="global cases"
            />
          </div>
          <div className="categoryBoxesCol"><h3>US Cases</h3>
            <div className="row">

              <div className="videoBox">
                <video controls width="450" height="700" autoPlay loop muted id="introVideo">
                  <source src="https://filebin.net/63kkhhbootwchyac/nytscroll.mp4?t=vj2tx63v" style={{ width: 300 }} type="video/mp4" />
                </video>
                <a href="https://filebin.net/63kkhhbootwchyac/nytscroll.mp4?t=vj2tx63v">Source</a>
              </div>
              <div className="stack">
                <div className="singleBoxes">
                  <figure>
                    <img src="https://i.imgur.com/BD2oPmD.png" style={{ height: '300px' }} alt="workout" />
                    <figcaption>
                      <a href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html">
                        Source: New York Times
                      </a>
                    </figcaption>
                  </figure>

                </div>


                <div className="marginHere">
                  <figure>
                    <img src="https://i.imgur.com/uhsS51A.png" style={{ height: '300px' }} alt="Health" />
                    <figcaption>
                      <a href="https://www.washingtonpost.com/graphics/2020/national/businesses-foot-traffic-coronavirus-reopening-us/?no_nav=true&p9w22b2p=b2p22p9w00098&utm_">
                        Source: Washington Post
                      </a>
                    </figcaption>
                  </figure>
                </div>


              </div>
            </div>

          </div>

        </div>

        <div className="popAct">
          <h2>INSTITUTIONS</h2>

          <div className="singleBoxes"> <h3>Higher Education</h3>
            <div className="categoryBoxes">
              <figure>
                <img src="https://i.imgur.com/BcQY2em.jpg" style={{ height: '500px' }} alt="Dartmouth Remote Term" />
                <figcaption>
                  <a href="https://news.dartmouth.edu/news/2020/03/provost-all-spring-term-classes-be-conducted-remotely">
                    Source: Dartmouth College Website
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img src="https://i.imgur.com/69Kilvu.jpg" style={{ height: '490px' }} alt="Dartmouth Remote Term" />
                <figcaption>
                  <a href="https://www.instagram.com/dartmouthcollege/?hl=en">
                    Source: Dartmouth College Instagram
                  </a>

                </figcaption>
              </figure>

            </div>

          </div>
          <div className=""> <h3>Economy Effects</h3>
            <div className="categoryBoxes">
              <div className="singleBoxes"> Impact on Industries
                <figure>
                  <img src="https://i.imgur.com/IfQmu6W.png" style={{ height: '300px' }} alt="industry impact" />
                  <figcaption><a href="https://www.visualcapitalist.com/covid-19-impact-on-app-popularity/"> Source: Visual Capitalist</a></figcaption>
                </figure>
              </div>
              <div className="singleBoxes"> Impact on Stocks
                <figure>
                  <img src="https://i.imgur.com/2zKxDQD.png" style={{ height: '300px' }} alt="stock impact" />
                  <figcaption><a href="https://www.visualcapitalist.com/covid-19-impact-on-app-popularity/"> Source: Bloomberg</a></figcaption>
                </figure>
              </div>
              <div className="singleBoxes"> Projected Recovery Example (NYC)
                <figure>
                  <img src="https://i.imgur.com/w2E5qTp.png" style={{ height: '300px' }} alt="Bloombery recovery projections" />
                  <figcaption>
                    <a href="https://www.bloomberg.com/news/articles/2020-05-31/nyc-s-finance-jobs-won-t-recover-for-six-years-analysis-shows?sref=KkPzpZvz">
                      Source: Bloomberg
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* <div className="productivity"> Productivity</div> */}
            {/* <button type="button" link="https://www.visualcapitalist.com/covid-19-impact-on-app-popularity/" className="squareButton">Productivity magnified with COVID-19: </button> */}

          </div>
        </div>

        <div className="healthNSocial">
          <h2>ENVIRONMENT</h2>
          <div className="categoryBoxes">

            <div className="singleBoxes"> <h3>CO2 Emissions</h3>
              <div className="subPics">
                <figure>
                  <img src="https://i.imgur.com/MfWnMnC.png" style={{ height: '400px' }} alt="co2 emissions" />
                  <figcaption><a href="https://research.noaa.gov/article/ArtMID/587/ArticleID/2636/Rise-of-carbon-dioxide-unabated?utm_source=morning_brew">Source: NOAA</a></figcaption>
                </figure>
              </div>
            </div>

            <div className="singleBoxes"> <h3>Air Quality</h3>
              <figure>
                <img src="https://i.imgur.com/ebzHgaY.jpg" style={{ height: '400px' }} alt="air quality" />
                <figcaption>
                  <a href="https://theconversation.com/covid-19-shutdowns-are-clearing-the-air-but-pollution-will-return-as-economies-reopen-134610">Source: NASA Giovanni</a>
                </figcaption>
              </figure>

            </div>


          </div>

        </div>
      </div>
    </div>


  );
};

export default Macro;
