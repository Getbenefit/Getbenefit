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

          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="40" height="40" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_426_3879" transform="scale(0.0125)"/>
              </pattern>
              <image id="image0_426_3879" width="80" height="80" xlink:href="data:image/png;base64,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"/>
              </defs>
              </svg>

          </div>
      </div>
    </footer>
  );
};

export default Footer;
