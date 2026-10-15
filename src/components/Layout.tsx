import { useLocation } from "react-router";

import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
