import React, { useState, useRef } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Burger from "./component/Burger";
import Menu from "./component/Menu";
import Content from "./component/Content";
import { useOnClickOutside } from "./hooks";
import AppBar from "./component/AppBar";

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
