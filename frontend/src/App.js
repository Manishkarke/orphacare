import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AddReport from "./components/form/AddReport";
import AboutUs from "./components/About/AboutUs";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
import AdoptKidsRoute from "./routes/AdoptKidsRoute";
import ChildDetail from "./components/Child/ChildDetail";
import Volunteers from "./components/Volunteers/Volunteers";
import PrivateRoute from "./utils/PrivateRoute";
import LogOut from "./ui/LogOut";
import ReportRoutes from "./routes/ReportRoutes";
import DonationRoute from "./routes/DonationRoute";
import ReportDetails from "./components/Reports/ReportDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AdoptKidsRoute />} />
        <Route
          path="/about"
          element={<PrivateRoute children={<AboutUs />} />}
        />
        <Route
          path="/childdetail/:id"
          element={<PrivateRoute children={<ChildDetail />} />}
        />
        <Route
          path="/donate"
          element={<PrivateRoute children={<DonationRoute />} />}
        />
        <Route
          path="/report"
          element={<PrivateRoute children={<ReportRoutes />} />}
        />
        <Route
          path="/addReport"
          element={<PrivateRoute children={<AddReport />} />}
        />

        <Route
          path="/reportDetail/:id"
          element={<PrivateRoute children={<ReportDetails />} />}
        />
        <Route
          path="/volunteer"
          element={<PrivateRoute children={<Volunteers />} />}
        />
        <Route path="/signin" element={<SignInRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}
export default App;
