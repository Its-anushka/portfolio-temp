
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  
  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
