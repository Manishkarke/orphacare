import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/form/SignIn";
import SignUp from "./components/form/SignUp";
import Header from "./components/header/Header";
import AddReport from "./components/form/AddReport";
import DonateNow from "./components/form/DonateNow";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/report" element={<AddReport />} />
      </Routes>
    </div>
  );
}

export default App;
