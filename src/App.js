import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import People from "./assets/people.png";
import Boy from "./assets/boy.png";
import Spend from "./assets/spend.png";
import CustomButton from "./components/CustomButton/CustomButton";
import Tags from "./components/Tags/Tags";
import Broadband from "./assets/broadband.png";
import Health from "./assets/health.png";
import Education from "./assets/educat.png";
import Wallet from "./assets/wallet.png";
import Chair from "./assets/chair.png";
import Vacation from "./assets/vacate.png";
import Illust1 from "./assets/Frame.svg";
import Illust2 from "./assets/Layer.svg";
import Illust3 from "./assets/Messaging.svg";
import Illust4 from "./assets/Groupfifty.svg";
import Info from "./components/Info/Info";
import { ReactComponent as Check } from "./assets/check-box.svg";
import ManReady from "./assets/mansready.png";
import Market from "./assets/market.png";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Section className="w40">
        <div>
          <img src={People} alt="People standing" />
        </div>
        <div className="section-text">
          <h2 className="purple">Get Benefit for Startup and Teams</h2>
          <p>
          Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the grouth and success of their teams
          </p>
          <CustomButton text="Get Benefit" />
        </div>
      </Section>

      <Section className="w40 flex-reverse">
        <div className="section-text">
          <h2 className="purple">
            Get Benefit for Remote Workers and Freelancers
          </h2>
          <p>
          From flexible co-working spaces to low-cost Internet Subscriptions. Getbenefit helps remote workers and tailored to their specific needs
          </p>
          <CustomButton text="Get Benefit" />
        </div>
        <div>
          <img src={Boy} alt="People standing" />
        </div>
      </Section>

      <Section className="section-tags">
        <Tags
          image={Broadband}
          heading="Broadband"
          text="Helping employees and freelancers access cost-efficient data plans, allowing them stay 
          connected and productive."
        />
        <Tags
          image={Health}
          heading="Health"
          text="Getting access to comprehensive and affordable healthcare coverage, to live healthy and 
          work healthy."
        />
        <Tags
          image={Education}
          heading="Education"
          text="Providing employees and freelancers with opportunities and resources to further their education and 
          skills development, helping them stay competitive in the workplace."
        />
        <Tags
          image={Wallet}
          heading="401(k)"
          text="Helping employees secure their financial future by offering access to top pension managers 
          and 401k plans."
        />
        <Tags
          image={Chair}
          heading="Co-working Space"
          text="Get access to productive, and collaborative co-working spaces wherever you find yourself. 
          Just walk in and get your job done."
        />
        <Tags
          image={Vacation}
          heading="Vacation"
          text="Providing employees and freelancers with opportunities to further their education and skills 
          development, helping them stay competitive in the workplace."
        />
      </Section>

      <Section className="no-flex">
        <h2 className="purple">How It Works</h2>
        <div className="information">
          <Info
            image={Illust1}
            heading="Onboard"
            text="Sign up to getbenefit and create an account"
          />
          <Info
            image={Illust2}
            heading="Get Plans"
            text="Browse our selection of comprehensive benefits options and select the ones that are right for you"
          />
          <Info
            image={Illust3}
            heading="Get Advice"
            text="Speak with a representative who will advice you based on what plans or bundles will be suitable 
            for you."
          />
          <Info
            image={Illust4}
            heading="Get Benefits"
            text="You make payment and Getbenefit whenever you need to."
          />
        </div>
      </Section>

      <Section className="gap">
        <div>
          <img src={Spend} alt="Thank" className="section-thank" />
        </div>
        <div className="thank">
          {/* "Whether you're an employer looking to offer competitive benefits or an independent worker 
          looking to access them, Getbenefit simplifies the process, 
          making it easy to find and manage the benefits you need to thrive." */}
          “Spend more time being productive, save more and get the most benefits out of life.”
        </div>
      </Section>

      <Section>
        <div className="why-image">
          <img src={ManReady} alt="Man relaxed" />
        </div>
        <div className="why height">
          <h3 className="why-heading">Why Get Benefit?</h3>
          <ul className="why-links">
            <li className="why-link">
              <Check /> Access Benefit in a single bundle
            </li>
            <li className="why-link">
              <Check />
              Flexible Benefits Plans
            </li>
            <li className="why-link">
              <Check />
              Secure and Compliant
            </li>
            <li className="why-link">
              <Check />
              Pay-as-you go
            </li>
            <li className="why-link">
              <Check />
              24/7 Support
            </li>
            <li className="why-link">
              <Check />
              Zero paper work
            </li>
          </ul>
        </div>
        {/* <div className="why-image">
          <img src={ManReady} alt="Man relaxed" />
        </div> */}
      </Section>


      <Section className="gap tablet">
        <div className="faq-sub">
          <img
            src={Market}
            alt="digital Marketing Illustration"
            className="faq-image"
          />
          <div className="faq-text">
            <div className="faq-heading">Have more Questions?</div>
            <CustomButton text="Contact Us" />
          </div>
        </div>
        
        <div className="faq-faq">
          <Faq
            question="What Benefits does GetBenefit offers?"
            answer="Getbenefit offers a wide range of benefits, 
            including health, broadband plans, 401(k)/Pension, education, vacation and flexible co-working spaces."
          />
           <Faq
            question=" Is Getbenefit only for startups and teams?"
            answer="No, Getbenefit is also available for freelancers and remote workers. 
            Our platform is tailored to the specific needs of startups, teams, and remote workers."
          />
          <Faq
            question="How much does it cost to use get benefits?"
            answer="With as little as 30,000 naira, you can get access benefits you deserve."
          />
          <Faq question="Can I Customize my benefits plans?" 
          answer="Yes, Getbenefit allows users to choose the benefits that they need,
           making it easy for them to find the best fit for their specific needs." />
          <Faq question="What do I do when I am confused?" 
          answer="Yes, you can schedule a call with our team if you have any 
          questions or need assistance with our platform." />
          <Faq
            question="Does GetBenefit offers 24/7 support?"
            answer="Yes, Getbenefit team is always ready to assist, 
            providing support and assistance when needed."
          />
          <Faq
            question="Is GetBenefit available in all locations?"
            answer="Currently, Getbenefit is available in Nigeria, 
           with plans to expand to other locations soon."
          />
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default App;
