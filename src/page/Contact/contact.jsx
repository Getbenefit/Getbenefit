import React, { useReducer } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButton/CustomButton";
import Faq from "../../components/FAQ/Faq";
import Market from "../../assets/market.png";
import Frame from "../../assets/Frames.png";
import FormInput from "../../components/Forminput/Forminput";
import "./contact.css";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenum: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "first":
      return { ...state, firstname: action.payload };
    case "last":
      return { ...state, lastname: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "num":
      return { ...state, phonenum: action.payload };
    case "message":
      return { ...state, message: action.payload };
      break;
  }
};

const ContactsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstname, lastname, email, phonenum, message } = state;

  return (
    <>
      <Navigation />
      <main className="contacts">
        <div className="contacts-heading">
          <div className="contacts-heading_1">Contact us</div>
          <div className="contacts-heading_2">Get in touch</div>
          <span>We'd love to hear from you. Please fill out the form.</span>
        </div>
        <div className="contacts-body">
          <div className="contacts-form">
            <form>
              <div className="form-row">
                <FormInput
                  type="text"
                  label="First name"
                  value={firstname}
                  onInput={(e) => {
                    const value = e.target.value;
                    dispatch({ type: "first", payload: value });
                  }}
                />
                <FormInput
                  type="text"
                  label="Last name"
                  value={lastname}
                  onInput={(e) => {
                    const value = e.target.value;
                    dispatch({ type: "last", payload: value });
                  }}
                />
              </div>
              <FormInput
                type="email"
                label="Email"
                value={email}
                onInput={(e) => {
                  const value = e.target.value;
                  dispatch({ type: "email", payload: value });
                }}
              />
              <FormInput
                type="tel"
                label="Phone number"
                value={phonenum}
                onInput={(e) => {
                  const value = e.target.value;
                  dispatch({ type: "num", payload: value });
                }}
              />
              <FormInput
                type="textarea"
                label="Message"
                value={message}
                onInput={(e) => {
                  const value = e.target.value;
                  dispatch({ type: "message", payload: value });
                }}
              />
              <div className="form-footer">
                <input type="checkbox" name="policy" id="policy" />
                <label htmlFor="policy">
                  You agree to our friendly <span>privacy policy</span>
                </label>
              </div>
              <CustomButton text="Send message" />
            </form>
          </div>
          <div className="contacts-body_img">
            <img src={Frame} alt="a lot" />
          </div>
        </div>
      </main>
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
            answer="WELCOME"
          />
          <Faq
            question="How much does it cost to use get benefits?"
            answer="WELCOME"
          />
          <Faq question="Can I Customize my benefits plans?" answer="WELCOME" />
          <Faq question="What do I do when I am confused?" answer="WELCOME" />
          <Faq
            question="Does GetBenefit offers 24/7 support?"
            answer="WELCOME"
          />
          <Faq
            question="Is GetBenefit available in all locations?"
            answer="WELCOME"
          />
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default ContactsPage;
