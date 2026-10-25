import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/project/:slug" element={<ProjectPage />} />

          <Route path="/category/:slug" element={<CategoryPage />} />

          <Route
            path="/category/:slug/:subcategorySlug"
            element={<ProjectsPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
