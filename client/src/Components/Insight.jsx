// Hero
import heroBack from './Insights/images/heroBack.webp';
import heroBack2 from './Insights/images/heroBack2.webp';
import heroBack3 from './Insights/images/heroBack3.webp';
import btnArrow from './Insights/images/btn-arrow.svg';

// Cards
import cardImg1 from './Insights/images/cardImg1.webp';
import cardImg2 from './Insights/images/cardImg2.webp';
import cardImg3 from './Insights/images/cardImg3.webp';
import cardImg4 from './Insights/images/cardImg4.webp';
import cardImg5 from './Insights/images/cardImg5.webp';
import cardImg6 from './Insights/images/cardImg6.webp';
import cardImg7 from './Insights/images/cardImg7.webp';
import cardImg8 from './Insights/images/cardImg8.webp';
import cardImg9 from './Insights/images/cardImg9.webp';
import cardImg10 from './Insights/images/cardImg10.webp';

// Conversations
import conversationsImg from './Insights/images/conversationsImg.webp';
import conversationsImg2 from './Insights/images/conversationsImg2.webp';
import conversationsImg3 from './Insights/images/conversationsImg3.webp';

// Discover
import discoverImg1 from './Insights/images/discoverImg1.webp';
import discoverImg2 from './Insights/images/discoverImg2.webp';
import discoverImg3 from './Insights/images/discoverImg3.webp';

// CSS
import './Insights/style.css';

function Insight() {
  return (
    <>
      <div className="insightsClone">
        <div className="mainPageHeading">
          <h2>
            Explore our latest thought leadership, ideas, and insights on the
            issues that are shaping the future of business and society.
          </h2>
        </div>
        {/* Hero Section */}
        <section className="heroMain">
          <div className="hero">
            <img src={heroBack} className="heroImg" alt="" />
            <img src={heroBack2} className="heroImg2" alt="" />
            <img src={heroBack3} className="heroImg3" alt="" />
            <div className="heroCard">
              <div className="heroCard-Content">
                <h4>Leading sustainability</h4>
                <p className="heroCard-Content-Para">
                  In the race to save the planet, we bring insights on how to go
                  beyond corporate responsibility to make sustainability a
                  source of value.
                </p>
              </div>
              <div className="heroCard-ButtonMain">
                <a href="/" className="heroCard-Button">
                  Read More <img src={btnArrow} className="ml-2" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Cards Section */}
        <section className="cardMain">
          <h3 className="cardMainHeading">
            Latest reports from the Capgemini Research Institute
          </h3>
          <div className="rowOne">
            <div className="cardContent">
              <img className="cardImg" src={cardImg1} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">The people experience advantage</h4>
                <p className="cardPara">
                  How companies can make life better for their most important
                  assets
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg2} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">
                  Intelligent products and services
                </h4>
                <p className="cardPara">
                  Progress in digital technologies and rapidly evolving customer
                  demand have led to a new level of interconnectivity
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg3} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Data for net zero</h4>
                <p className="cardPara">
                  The growing urgency around climate change has placed it at the
                  forefront of global issues.
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg4} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Sustainable product design</h4>
                <p className="cardPara">
                  Sustainability is a cornerstone of today’s manufacturing
                  operations, but are organizations doing enough?
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg5} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Cloud sovereignty</h4>
                <p className="cardPara">
                  The journey to cloud sovereignty – Assessing cloud potential
                  to drive transformation and build trust
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg6} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">
                  Cybersecurity in smart factories
                </h4>
                <p className="cardPara">
                  Smart factories are increasingly being utilized by industry as
                  part of the transition toward digitization.
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg7} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Reflect, rethink, reconsider</h4>
                <p className="cardPara">
                  Food loss or waste continues to be a major problem across the
                  lifecycle of food.
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg8} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Digital twins</h4>
                <p className="cardPara">
                  Digital twins, virtual replicas of physical systems that can
                  model, simulate, monitor, analyze, and constantly optimize the
                  physical world, will be at the core of this transformation.
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg9} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">Quantum technologies</h4>
                <p className="cardPara">
                  How to prepare your organization for a quantum advantage now
                </p>
              </div>
            </div>
            <div className="cardContent">
              <img className="cardImg" src={cardImg10} alt="" />
              <div className="posCard">
                <h4 className="cardHeading">
                  Unlocking the Value in Connected Health
                </h4>
                <p className="cardPara">
                  Accelerated digital healthcare adoption amid the pandemic
                  means now is the time for biopharma companies to transform
                  their connected health portfolios
                </p>
              </div>
            </div>
          </div>
          <div className="heroCard-ButtonMain btnCardPos">
            <a href="/reports" className="heroCard-Button">
              See more reports <img src={btnArrow} className="ml-2" alt="" />
            </a>
          </div>
        </section>
        {/* Conversations */}
        <section>
          <div>
            <h3 className="cardMainHeading">
              Latest reports from the Capgemini Research Institute
            </h3>
            <p className="cardPara">
              Accelerated digital healthcare adoption amid the pandemic means
              now is the time for biopharma companies to transform their
              connected health portfolios
            </p>
          </div>
          <div className="heroMain">
            <div className="hero">
              <img src={conversationsImg} className="heroImg" alt="" />
              <img src={conversationsImg2} className="heroImg2" alt="" />
              <img src={conversationsImg3} className="heroImg3" alt="" />
              <div className="heroCard">
                <div className="heroCard-Content">
                  <h4>Leading sustainability</h4>
                  <p className="heroCard-Content-Para">
                    In the race to save the planet, we bring insights on how to
                    go beyond corporate responsibility to make sustainability a
                    source of value.
                  </p>
                </div>
                <div className="heroCard-ButtonMain">
                  <a href="/" className="heroCard-Button">
                    Read More <img src={btnArrow} className="ml-2" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Discover */}
        <section className="discoverMain">
          <h3 className="discoverHeading">Discover more</h3>
          <div className="discover">
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={discoverImg1} alt="" />
              </div>
              <div className="discoverCont">
                <h4>Research Library</h4>
                <p>Browse research and insights from across the business.</p>
              </div>
            </div>
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={discoverImg2} alt="" />
              </div>
              <div className="discoverCont">
                <h4>Expert perspectives</h4>
                <p>Review the archive of blogs from Capgemini’s experts</p>
              </div>
            </div>
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={discoverImg3} alt="" />
              </div>
              <div className="discoverCont">
                <h4>Analyst reports</h4>
                <p>Access our archive of analyst citations</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Insight;
