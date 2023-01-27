import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Faq from "./components/FAQ/Faq";
import People from "./assets/people.png";
import Boy from "./assets/boy.png";
import Info from "./components/Info/Info";
import Illust1 from "./assets/Frame.svg";
import Illust2 from "./assets/Layer.svg";
import Illust3 from "./assets/Messaging.svg";
import Illust4 from "./assets/Groupfifty.svg";
import Thank from "./assets/Thank.png";
import CustomButton from "./components/CustomButton/CustomButton";
import Footer from "./components/Footer/Footer";

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
          image={People}
        />
        <Card
          header="Getbenefit For Startup and Teams"
          text="Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the growth and success of their teams.

"
          color="pink"
          image={Boy}
        />
      </Section>

      <Section className="column">
        <h2>How It Works</h2>
        <div className="information">
          <Info
            heading="Onboard"
            image={Illust1}
            text="Onboard as a team or as a solo user. Its a brief and quick process."
          />
          <Info
            heading="Get Plans"
            image={Illust2}
            text="From our range of plans, add your preferred plans to your bundle.
            From Health, Co-working space, Gadgets, Education, Vacation, Data plan and 401k."
          />
          <Info
            heading="Get Advice"
            image={Illust3}
            text="You can chose to speak with a representative who will advice you based on what plans or bundles you can opt for. "
          />
          <Info
            heading="Get Benefit"
            image={Illust4}
            text="You make payment and start using your getbenefit voucher whenever you need to. "
          />
        </div>
      </Section>

      <Section>
        <div>
          <img src={Thank} alt="Thank" />
        </div>
        <div className="thank">
          Spend more time being more productive, save more and get the most
          benefits out of life.
        </div>
      </Section>

      <Section>
        <div className="section-question">
          <h3 className="section-heading">
            Have More <span className="purple">Questions?</span>
          </h3>
          <CustomButton text="Contact Us" />
        </div>
        <div className="section-faqs">
          <Faq
            question="How much does it cost to use Getbenefit?"
            answer=" Getbenefit offers a wide range of benefits, including health, power, internet connectivity, housing, annuity, education and co-working spaces."
          />
          <Faq
            question="What benefits does getbenefit offer?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            question="Can I customize my benefit plan?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            question="What do I do when I am confused?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            question="Does Getbenefit offer 24/7 support?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
          <Faq
            question="Is Getbenefit available in all locations?"
            answer="lorem hrjyu uey u yh jk etyjykte yj trteustjeyjette h yjtyje yjytui tuyue"
          />
        </div>
      </Section>
      <Footer/>
    </>
  );
}

export default App;
