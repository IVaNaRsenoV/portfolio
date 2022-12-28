import React, { FC } from 'react';
import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Main, Projects, About } from "./pages";

const App: FC = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App