import React, { useState, useRef } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import Content from "./components/Content";
import { useOnClickOutside } from "./hooks";
import AppBar from "./components/AppBar";

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <AppBar />
        <Content />
      </>
    </ThemeProvider>
  );
}

export default App;
