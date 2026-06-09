import Nav from "./Nav";
import Footer from "./Footer";
import { useLocation } from "react-router";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
