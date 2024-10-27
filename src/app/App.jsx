import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "../screens/Login";
import CorsesList from "../screens/CorsesList";
import { CardWithTopLogo } from "../components/CorseListHolder/CardWithTopLogo";
import { HeaderList } from "../components/CorseListHolder/HeaderList";
import { GridHolder } from "../components/CorseListHolder/GridHolder/GridHolder";
import { Filter } from "../components/CorseListHolder/filter/Filter";
import CorseListHolder from "../components/CorseListHolder";
import NewsListHolder from "../components/NewsListHolder";

function App() {
  return (
    <>
      {/* <CorseListHolder /> */}

      <NewsListHolder />
    </>
  );
}

export default App;
