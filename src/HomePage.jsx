import { Link, useNavigate } from "react-router-dom";
import BlackBox from "./BlackBox";
import Help from "./Help";
import Mid from "./Mid";
import Question from "./Question";
import style from "./homePage.module.css";
const arr = [
  {
    id: 0,
    content: {
      h1: "Enjoy on your TV",
      p: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
  },
  {
    id: 1,
    content: {
      h1: "Download your shows to watch offline",
      p: "Save your favourites easily and always have something to watch.",
    },
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    img2: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
  },
  {
    id: 2,
    content: {
      h1: "Watch everywhere",
      p: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
  },
  {
    id: 3,
    content: {
      h1: "Create profiles for kids",
      p: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    },
    img: "https://occ-0-4189-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54dg",
    video: "",
  },
];
import { useLocation } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function login() {
    if (email === "karan" && pass === "123") {
      navigate("/Home");
    } else {
      alert("Incorrect details entered");
    }
  }

  const location = useLocation();
  console.log(location);
  const path = location.pathname;
  return (
    <>
      <div>
        <div
          className={style.getStarted}
          style={{ height: `${path === "/SignIn" && "100vh"}` }}
        >
          <div
            className={style.gradient}
            style={{ height: `${path === "/SignIn" && "100vh"}` }}
          >
            <div className={style.header}>
              <div className={style.heading}>
                <svg
                  viewBox="0 0 111 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                >
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
              </div>
              {path === "/" && (
                <div className={style.signIn}>
                  <select name="language">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select>
                  <Link to="/SignIn">
                    <button>Sign In </button>
                  </Link>{" "}
                </div>
              )}
            </div>
            {path === "/" ? (
              <div className={style.center}>
                <h1>Unlimited movies, TV shows and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <div className={style.box}>
                  <input type="email" placeholder="Email Address" />
                  <button>
                    Get Started{"  "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="#ffffff"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className={style.SigninCenter}>
                <header>
                  <h1>Sign In</h1>
                </header>
                <form>
                  <input
                    type="text"
                    placeholder="Email or mobile number"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <button onClick={login}>Sign In</button>
                  <h4>OR</h4>
                  <button className={style.button2}>Use a sign-in code</button>
                  <a href="">Forgot password?</a>
                </form>
                <footer>
                  <label className={style.container}>
                    <input type="checkbox" />
                    Remember me
                    <span className={style.checkmark}></span>
                  </label>
                  <p>
                    New to Netflix? <b>Sign up now.</b>
                  </p>
                  <p className={style.foot}>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. <b> Learn More.</b>
                  </p>
                </footer>
              </div>
            )}
          </div>
        </div>
      </div>
      {path === "/" && (
        <>
          <Mid />
          {arr.map((item, i) => (
            <div key={i}>
              <BlackBox item={item} />
              <Mid />
            </div>
          ))}
          <Question />
          <Mid />
        </>
      )}
      <Help />
    </>
  );
}

export default HomePage;
