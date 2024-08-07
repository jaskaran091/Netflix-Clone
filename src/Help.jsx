import { useLocation } from "react-router-dom";
import style from "./help.module.css";
import { useEffect, useState } from "react";

function Help() {
  const location = useLocation();
  const path = location.pathname;
  const [pad, setPad] = useState("40px");
  useEffect(() => {
    if (path === "/SignIn") setPad("160px");
    else setPad("40px");
  }, [location.pathname]);

  return (
    <div className={style.container} style={{ paddingTop: pad }}>
      <div className={style.center}>
        {path === "/SignIn" && (
          <>
            <h3>Questions? Call 000-800-919-1694</h3>
            <ul>
              <li>FAQ</li>
              <li>Help Centre</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
          </>
        )}
        {path === "/" && (
          <>
            <h3>Questions? Call 000-800-919-1694</h3>
            <ul>
              <li>FAQ</li>
              <li>Help Centre</li>
              <li>Account</li>
              <li>Medua Centre</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </ul>
          </>
        )}

        <select name="language">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        {path === "/" && <h5>Netflix India</h5>}
      </div>
    </div>
  );
}

export default Help;
