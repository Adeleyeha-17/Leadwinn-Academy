import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Career } from "./pages/Career";
import { Plans } from "./pages/Plans";
import { Feedback } from "./pages/Feedback";
import { Signin } from "./pages/Signin";
import { Register } from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Profile } from "./pages/Profile";
import { PrivateRoute } from "./hooks/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import "./server"

function App() {
  

  
  return (
    <>
    <Router>
      <AnimatePresence mode="wait"/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/career" element={<Layout><Career /></Layout>} />
          <Route path="/plans" element={<Layout><Plans /></Layout>} />
          <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
          
          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Layout><Profile /></Layout>} />
          </Route>

          <Route path="/sign-in" element={<Signin />} />
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
