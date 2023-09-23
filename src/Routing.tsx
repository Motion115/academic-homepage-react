import React from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layout";

const App1 = (
  <div>"hello world"</div>
)

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={WebsiteLayout} />
      <Route path={"/misc"} element={App1} />
    </Routes>
  );
}
