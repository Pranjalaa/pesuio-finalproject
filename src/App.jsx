import React from "react";
import Tab from "./tab";
import Tabdinner from "./tabdinner";
import Tabstarter from "./tabstarter";

import "./styles.css";

export default function App() {
  return (
    <div className="App flex flex-col justify-center items-center min-h-screen bg-gradient-to-r bg-black">
      <Tabstarter/>
      <Tabdinner/>
      <Tab/>
    </div>
  );
}
