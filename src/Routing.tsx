import React from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./pages/layout";
import MiscInDom from "./pages/misc";

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={WebsiteLayout} />
      <Route path={"/misc"} element={MiscInDom} />
    </Routes>
  );
}
