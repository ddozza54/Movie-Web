import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Router from "./Router";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  return <Router></Router>;
}

export default App;
