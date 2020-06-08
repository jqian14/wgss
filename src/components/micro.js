import React from 'react';

const Micro = (props) => {
  return (

    <div className="microPage">
      <div className="microTitle">
        <h1>micro scale</h1>
      </div>
      <div className="categories">
        <div className="healthNSocial">
          <h2>Health</h2>
          <div className="categoryBoxes">
            <div className="singleBoxes"> Sleep
              <img src="/src/img/sleepTracking.png" style={{ height: '400px' }} alt="sleep tracking" />
            </div>

            <div className="singleBoxes"> Exercise
              <img src="/src/img/workout.png" style={{ height: '400px' }} alt="workout" />
            </div>

            <div className="singleBoxes">  Diet
              <div className="subPics">
                <figure>
                  <img src="/src/img/groceryCrop.png" style={{ height: '300px' }} alt="grocery delivery" />
                  <figcaption><a href="https://techcrunch.com/2020/03/16/grocery-delivery-apps-see-record-downloads-amid-coronavirus-outbreak/">Source: Tech Crunch </a></figcaption>
                </figure>
                <div className="dietGraphs">
                  <figure>
                    <img src="/src/img/groceryTraffic.png" style={{ width: '400px' }} alt="grocery store traffic" />
                  </figure>
                  <figure>
                    <img src="/src/img/restTraffic.png" style={{ width: '400px' }} alt="restaurant traffic" />
                    <figcaption>
                      <a href="https://www.washingtonpost.com/graphics/2020/national/businesses-foot-traffic-coronavirus-reopening-us/?no_nav=true&p9w22b2p=b2p22p9w00098&utm_">
                        Source: Washington Post
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            {/* <button type="button" className="squareButton">Health(phys and emotional): mood, food, exercise</button> */}
          </div>
        </div>

        <div className="popAct">
          <h2>Future and Finances</h2>
          <div className="categoryBoxes">
            <div className="singleBoxes"> Finances
              <div className="subPics">
                <figure>
                  <img src="/src/img/stimForm.png" style={{ height: '200px' }} alt="stimulus form" />
                  <figcaption><a href="https://www.nerdwallet.com/l/covid19-guide"> Source: NerdWallet</a></figcaption>
                </figure>
                <figure>
                  <img src="/src/img/stimulus.jpg" style={{ height: '400px' }} alt="stimulus package breakdown" />
                  <figcaption>
                    <a href="https://www.forbes.com/sites/morgansimon/2020/04/01/what-the-stimulus-package-means-for-everyday-people-not-corporations/#10a9f04f371f"> Source: Forbes</a>
                  </figcaption>
                </figure>
                <figure>
                  <img src="/src/img/employment.png" style={{ height: '300px' }} alt="unemployment statistics" />
                  {/* <figcaption><a href="https://www.forbes.com/sites/morgansimon/2020/04/01/what-the-stimulus-package-means-for-everyday-people-not-corporations/#10a9f04f371f">
                  Source</a></figcaption> */}
                </figure>
              </div>
            </div>

            {/* <div className="productivity"> Productivity</div> */}
            {/* <button type="button" link="https://www.visualcapitalist.com/covid-19-impact-on-app-popularity/" className="squareButton">Productivity magnified with COVID-19: </button> */}

          </div>
        </div>

        <div className="healthNSocial">
          <h2>Social and Screentime</h2>
          <div className="categoryBoxes">
            <div className="singleBoxes"> Social
              <div className="subPics">
                <img src="/src/img/instagramtime.png" style={{ height: '400px' }} alt="stimulus form" />
                <figure>
                  <img src="/src/img/zoom.png" style={{ height: '400px' }} alt="stimulus package breakdown" />
                  <figcaption><a href="https://www.wrcbtv.com/story/41996193/what-the-tech-how-to-use-the-zoom-app">Source: WRCBTV</a></figcaption>
                </figure>
              </div>
            </div>

            <div className="singleBoxes"> Screen Time
              <div className="subPics">
                <img src="/src/img/iphoneUsage.png" style={{ height: '400px' }} alt="stimulus form" />
                <figure>
                  {/* <img src="/src/img/zoom.png" style={{ height: '400px' }} alt="stimulus package breakdown" /> */}
                  {/* <figcaption> Source:https://www.wrcbtv.com/story/41996193/what-the-tech-how-to-use-the-zoom-app</figcaption> */}
                </figure>
              </div>
            </div>
          </div>
          {/* Screen Time/Social life  */}
          {/* <button type="button" link=" https://www.washingtonpost.com/technology/2020/03/24/screen-time-iphone-coronavirus-quarantine-covid/"
            className="squareButton">Screen N Social</button> */}
        </div>
      </div>
    </div>

  );
};

export default Micro;
