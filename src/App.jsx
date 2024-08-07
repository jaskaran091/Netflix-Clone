import HomePage from "./HomePage";
import style from "./homePage.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<HomePage />} />
          <Route path="/Home" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
