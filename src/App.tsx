import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Techhub } from "./pages/Techhub";
import { Plans } from "./pages/Plans";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/tech-hub" element={<Layout><Techhub /></Layout>} />
          <Route path="/plans" element={<Layout><Plans /></Layout>} />
          <Route path="/faq" element={<Layout><Faq /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
