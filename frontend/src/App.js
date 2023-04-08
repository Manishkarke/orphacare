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
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<PrivateRoute children={<AboutUs />} />} />
        <Route path="/childdetail/:id" element={<PrivateRoute children={<ChildDetail />} />} />
        <Route path="/donate" element={<PrivateRoute children={<DonateNow />} />} />
        <Route path="/report" element={<PrivateRoute children={<AddReport />} />} />
        <Route path="/volunteer" element={<PrivateRoute children={<Volunteers />} />} />
        <Route path="/" element={<AdoptKidsRoute />} />
        <Route path="/signin" element={<SignInRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
      </Routes>
    </div>
  );
}
export default App;
