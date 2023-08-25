import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import FooterMenu from "./components/FooterMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
          </Routes>
        </main>
        <FooterMenu />
      </BrowserRouter>
    </>
  );
}

export default App;
