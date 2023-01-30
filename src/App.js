import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import People from "./assets/people.png";
import Boy from "./assets/boy.png";
import Thank from "./assets/Thank.png";
import CustomButton from "./components/CustomButton/CustomButton";

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
