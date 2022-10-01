import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/img/logo.png";
import Footer from "./Footer";
import DECKTESTE from "./mock";
import Perguntas from "./Perguntas";
import GlobalStyle from "./globalStyles";

export default function App() {
  const allClosed = [];
  const allNull = [];
  DECKTESTE.forEach(() => {
    allClosed.push(false);
    allNull.push(null);
  });
  const [respondidas, setRespondidas] = useState(allNull);
  const [virada, setVirada] = useState(false);
  const [indiceAberta, setIndiceAberta] = useState(null);

  return (
    <>
    <GlobalStyle/>
    <ScreenContainer >
      <LogoContainer >
        <img src={logo} alt="logo zaprecall" />
        <h1>ZapRecall</h1>
      </LogoContainer>
      <Perguntas
        respondidas={respondidas}
        virada={virada}
        setVirada={setVirada}
        indiceAberta={indiceAberta}
        setIndiceAberta={setIndiceAberta}
      />

      <Footer
        respondidas={respondidas}
        setRespondidas={setRespondidas}
        virada={virada}
        setVirada={setVirada}
        indiceAberta={indiceAberta}
        setIndiceAberta={setIndiceAberta}
      />
    </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
