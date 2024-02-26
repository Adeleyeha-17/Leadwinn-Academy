import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Plans } from "./pages/Plans";
import { Feedback } from "./pages/Feedback";
import { Signin } from "./pages/Signin";
import { Register } from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Profile } from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import "./server"
import { Courses } from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState<boolean | null>(false);


  useEffect(() => {
    const tokenData = sessionStorage.getItem('token');
    if (tokenData) {
      setToken(JSON.parse(tokenData));
    }
  }, []);

  return (
    <>
      <Router>
        <AnimatePresence mode="wait"/>
        <ScrollToTop />
        <Routes>
          {token ? <Route path="/" element={<Layout><Home /></Layout>} /> : <Route path="/register" element={<Register />} />}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/plans" element={<Layout><Plans /></Layout>} />
          <Route path="/courses" element={<Layout><Courses /></Layout>} />
          <Route path="/courses/:id" element={<Layout><CourseDetails /></Layout>} />

          <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
          
          <Route path="/profile" element={<Layout><Profile /></Layout>} />

          <Route path="/sign-in" element={<Signin setToken={setToken}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <AnimatePresence />
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        limit={1}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
