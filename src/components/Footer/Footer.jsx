import React from "react";
//import { ReactComponent as Social } from "../../assets/Groupthirty.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <Logo />
      </div>
      <div className="footer-body">
        <div className="footer-main">
          <div>
            <h6 className="footer-heading">About Us</h6>
            <p>
              <span className="purple">Getbenefit's </span>mission is to
              revolutionize the gig economy by providing the most affordable and
              comprehensive benefits for remote workers, freelancers, and
              startups. We understand the unique challenges that come with the
              gig economy and we're committed to making it easier for gig
              workers to access the benefits they need. Our platform uses AI
              technology to make the process of finding, selecting and accessing
              benefits more efficient and personalized, ensuring that our users
              are getting the{" "}
              <span className="pink">best options that fit their needs</span>
            </p>
          </div>
        </div>
        <div className="footer-side">
          <div>
            <h6 className="footer-heading__2">Company</h6>
            <ul className="footer-links">
              <li className="footer-link"><a>Contact Us</a></li>
              <li className="footer-link"><a>Privacy Policy</a></li>
              <li className="footer-link"><a>Terms and Conditions</a></li>
            </ul>
          </div>
          <div>
            <h6 className="footer-heading__2">Customer Support</h6>
            <p>support@getbenefit.ng</p>
          </div>
          <div>
            <h6 className="footer-heading__2">Contact</h6>
            <ul className="footer-links">
              <li className="footer-link">Lagos, Nigeria</li>
              <li className="footer-link">info@getbenefit.ng</li>
              <li className="footer-link">+234 8148 401 699</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div>
          Getbenefit.ng &copy; {new Date().getFullYear()}. ALL RIGHTS RESERVED
        </div>
        <div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="40" height="40" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_769_1009" transform="scale(0.0111111)"/>
              </pattern>
              <image id="image0_769_1009" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEr0lEQVR4nO2cWahWVRTHf1oOjWZSEUU+RHMvFQ2UNGAUUVFBZXCjB8nyIahAMDOoKKgIJe1BwwYoo7JohgoRL2VlpEXzRFE0cstuZqThzR0L1oXj1/3mvc9e3/nWD/4P95vOXv+7zz57rz2A4ziO4ziO4ziO4ziO4zg7MQW4ELgZeBBYpVoBLADOB/ba+StOq4wDLgJeBrYDoYnkMy/pP0S+2y7ynePoM04HPmjB3Hp6D5jRxvXOBTYAc2MHci0wHntMBBYDO7oweVTyG4uAXetcaw9gDvCRfv53fS0aJ+kPL8UWewKrIxhcq9UFA/cHZgHPAH/XfG5+7IBWFn5cHi4WmAwMJjB5VFJrP2lwp7zboOZ3xG7AnzW319Xk59GEJjeT+HFs7IDOrtOWzSMfAxlNlubjzDp3WFfc1OCiizvsFnXD3sAvGWuy9DZGkdhPAZYB13cVFfBwk4s/DkyiPBZkMlm6cocB0/WOWg78oO+tidEje7aFQmwEDic9uxSCK1Mj2s8eHuO9b4ADYgT3SouF2QJcRVpmZqrN9fQbcESs4J5s8+KPAdNIw90GzB3VsLbP0VjSQSE2AdfF7mcCaw0YLBpKkeOY3UWBPgTOiliWHO1zrb6I2VwUOTJC4QY1Q9btk7l2CFy2XtT0azI+jVTQzzU5tXuH5RjJbLQksJIyP3KBt+hD9tI2TR+re1WmOq0gLSO3yx+JCv+XznzIw/NEYEKDcnxWdaOFG0oKZivwFnC/5lMGNKkvo7IXMpo8Ula6QUZl6zPXqJBRckeXxoHAjwaCDhkkXcukHFPz9/E69Ax9pvdTG71RR2RXFqbnJen9tYHgQ4mSqaykFJNK/2g7vUwnMYszL1XXPamNbpaP7hfNSW10N7mOUCGdmtrogw0EGTJrW1mzSBsMBBsy6g1KYpaBYENG3VWW0TIq/MpAwCGTzqFEZhhIU4YMGi4jPVrLvQYCDyXrETIgKcznDQQfStQFZGKiLvQOfaChkhcH/Q+Z3b6tD9rsOzHCGZrVChXUdh2smds3MlixGr4KA8hq+KOBqYXX9gXO01FU6HHtAE7AAJMLyf9tBowJkfUUhlhkwJCQqG2WRUNmOKiiif/lGGSeAWNC5H7zfhhkgqEVniGCZOWUWaS38aUBk0IVunPNmK578kKP6udY2yPKYGqiXawhsWRm/zR6jHG6j6WXFtjMpYeZoj2S7wwY2UhyjkclGK97PcT0J4DXgZ8MGCx6rskS4Z5mppFFkq/mzjOn3Fa8NNKZGt3qtRj7ti02HQOGmouVVTNZDL68cFJLyCy5kxZmOCAgaaLpFuBbA+aGwh4Z00PrVidqT9ZTaWQ5778GjA0FrdO9L6Z7B9cAV+isiUy5X6av3a6nv7xjOOm/VbuUssLKfBsrpv5qwLTQpmTh/FH0GJK/uAPYbMDA0ERv1zmCp6eYpoYPGTA01OhN4GIqxiTdNLQu8+BjE3DfGDvGKskh+sBZX9J6ju+Bh/ShXKlBRzvso4tolmht3xwhR/wx8DRwY7/U3E6QEdihenTZbOBW3TK3onC8sJwu9oAe37NQjzO7RA8diX1yjeM4juM4juM4juM4juPQU/wH51qBT42zgL8AAAAASUVORK5CYII="/>
              </defs>
          </svg>

          </div>
      </div>
    </footer>
  );
};

export default Footer;
