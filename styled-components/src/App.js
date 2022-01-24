import React from "react";
import styled from "styled-components";
import GlobalStyles from "./style/GlobalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: skyblue;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: white;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>styled-components</Title>
      </Container>
    </>
  );
};

export default App;
