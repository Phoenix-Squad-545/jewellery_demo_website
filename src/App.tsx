import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import { useEffect, useState } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import CategoryDetail from "./pages/CategoryDetail";
import ProductList from "./pages/ProductList";
import Loader from "./components/common/Loader";

function AppContent() {

  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "instant" });

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:category" element={<CategoryDetail />} />
          <Route path="/gallery/:category/:product" element={<ProductList />} />

          {/* Catch-all for wrong routes */}
  <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );

}