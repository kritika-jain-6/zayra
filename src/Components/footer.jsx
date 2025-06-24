import React from "react";
import '../Style/footer.css'
const footer = () => {
  return (
    <>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo_details">
              <span className="logo_name">Refresh</span>
            </div>
          </div>
          <div className="link_boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="link">Home</a>
              </li>
              <li>
                <a href="link">Contact</a>
              </li>
              <li>
                <a href="link">About Privacy</a>
              </li>
              <li>
                <a href="link">Login</a>
              </li>
              <li>
                <a href="link">Signup</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="link">App Design</a>
              </li>
              <li>
                <a href="link">Web Design</a>
              </li>
              <li>
                <a href="link">Logo Design</a>
              </li>
              <li>
                <a href="link">Banner Design</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="link">Profile</a>
              </li>
              <li>
                <a href="link">My account</a>
              </li>
              <li>
                <a href="link">Prefrences</a>
              </li>
              <li>
                <a href="link">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Courses</li>
              <li>
                <a href="link">Web Development</a>
              </li>
              <li>
                <a href="link">App Development</a>
              </li>
              <li>
                <a href="link">Video Eediting</a>
              </li>
              <li>
                <a href="link">Content Writing</a>
              </li>
            </ul>
            <ul className="box input_box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your Email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom_details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2021 <a href="link">Refresher</a> All right reserved
            </span>
            <span className="policy_terms">
              <a href="link">Privacy policy</a>
              <a href="link">Terms & Condition</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
