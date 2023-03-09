import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AddReport from "./components/form/AddReport";
import DonateNow from "./components/form/DonateNow";
import AboutUs from "./components/About/AboutUs";
import Blog from "./components/Blog";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
// import AboutUs from "./components/About/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/signin" element={<SignInRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
        <Route path="/report" element={<AddReport />} />
      </Routes>
    </div>
  );
}

export default App;
