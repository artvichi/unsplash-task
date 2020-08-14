import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Normalize } from "styled-normalize";
import Header from "./components/Header";
import useDataEndpoint from "./hooks/useDataEndpoint";
import Container from "./components/Container";

function App() {
  const data = useDataEndpoint();

  return (
    <Wrapper>
      <Normalize />
      <Router>
        <Header />
        <Container data={data} />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Arial";
`;

export default App;
