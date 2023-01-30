import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import People from "./assets/people.png";
import Boy from "./assets/boy.png";
import Thank from "./assets/Thank.png";
import CustomButton from "./components/CustomButton/CustomButton";
import Tags from "./components/Tags/Tags";
import Broadband from "./assets/broadband.png";
import Health from "./assets/health.png";
import Education from "./assets/educat.png";
import Wallet from "./assets/wallet.png";
import Chair from "./assets/chair.png";
import Vacation from "./assets/vacate.png";

const App = () => {
  return (
    <>
      <Header />
      <Section>
        <div>
          <img src={People} alt="People standing" />
        </div>
        <div className="section-text">
          <h2 className="purple">Get Benefit for Startup and Teams</h2>
          <p>
            Getbenefit offers startups and teams looking for cost-effective
            benefits a wide range of services to support the grouth and success
            of their teams
          </p>
          <CustomButton text="Get Benefit" />
        </div>
      </Section>
      <Section>
        <div className="section-text">
          <h2 className="purple">
            Get Benefit for Remote Workers and Freelancers
          </h2>
          <p>
            From flexible co-working spaces to low-cost Internet Subscriptions.
            Getbenefit helps remote workers and tailored to their specific needs
          </p>
          <CustomButton text="Get Benefit" />
        </div>
        <div>
          <img src={Boy} alt="People standing" />
        </div>
      </Section>

      <Section className="section-tags">
        <Tags image={Broadband} text="Broadband" />
        <Tags image={Health} text="Health" />
        <Tags image={Education} text="Education" />
        <Tags image={Wallet} text="401(k)" />
        <Tags image={Chair} text="Co-working Space" />
        <Tags image={Vacation} text="Vacation" />
      </Section>
      <Section>
        <div>
          <img src={Thank} alt="Thank" className="section-thank" />
        </div>
        <div className="thank">
          Spend more time being more productive, save more and get the most
          benefits out of life.
        </div>
      </Section>
    </>
  );
};

export default App;
