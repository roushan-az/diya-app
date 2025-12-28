import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
