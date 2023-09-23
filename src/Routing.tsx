import React from "react";
import { Route, Routes } from "react-router-dom";
import MiscInDom from "./pages/misc";
import HomepageInDom from "./pages/home";

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
      <Route path={"/misc"} element={MiscInDom} />
    </Routes>
  );
}
