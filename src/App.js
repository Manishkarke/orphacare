import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/form/SignIn";
import SignUp from "./components/form/SignUp";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
