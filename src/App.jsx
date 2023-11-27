import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Get_blood from "./components/get_blood";
import Banks from "./components/blood_camps";
import Donate from "./components/donate";
import Login from "./components/login";
import Sign_up from "./components/signup";
import Footer from "./components/footer";



import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blood_camps" element={<Banks />} />
          <Route path="/get_blood" element={<Get_blood />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_up />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
