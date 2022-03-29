import { Routes, Route } from "react-router-dom";
import { Home, Contact, Menu } from "../pages/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
