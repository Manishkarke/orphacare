import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AddReport from "./components/form/AddReport";
import DonateNow from "./components/form/DonateNow";
import AboutUs from "./components/About/AboutUs";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
import AdoptKidsRoute from "./routes/adoptKidsRoute";
import ChildDetail from "./components/Child/ChildDetail";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/childdetail/:id" element={<ChildDetail />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/signin" element={<SignInRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
        <Route path="/report" element={<AddReport />} />
        <Route path="/volunteer" element={<Volunteers />} />
        <Route path="/" element={<AdoptKidsRoute />} />
      </Routes>
    </div>
  );
}
export default App;
