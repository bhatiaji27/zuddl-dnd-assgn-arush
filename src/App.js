import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/Board";
import Header from "./dnd/board/Header";

export default function App() {
  const data = generateQuoteMap(10);

  return (
    <>
      <Header />
      <Board initial={data} withScrollableColumns />
    </>
  );
}
