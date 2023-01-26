import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <>
      <Header />
      <Section>
        <Card
          header="Getbenefit For Startup and Teams"
          text="Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the growth and success of their teams.

"
          color="purple"
        />
        <Card
          header="Getbenefit For Startup and Teams"
          text="Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the growth and success of their teams.

"
          color="pink"
        />
      </Section>
      <Section>
        <div>
          <h3 className="section-heading">
            Have More <span className="purple">Questions?</span>
          </h3>
        </div>
        <div>
          <Faq
            Question="How many games will there be ?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            Question="How many games will there be ?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            Question="How many games will there be ?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            Question="How many games will there be ?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
        </div>
      </Section>
    </>
  );
}

export default App;
