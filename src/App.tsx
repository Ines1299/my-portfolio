import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import Layout from "./components/Layout";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route
            path="/category/:categorySlug/:subcategorySlug"
            element={<SubcategoryPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
