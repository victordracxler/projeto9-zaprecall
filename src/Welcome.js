import styled from "styled-components";

export default function Welcome(props) {
  const { logo, setIniciado } = props;

  return (
    <>
      <LogoInicio src={logo} alt="logo" />
      <Titulo>ZapRecall</Titulo>
      <BotaoInicio onClick={() => setIniciado(true)}>
        Iniciar Recall!
      </BotaoInicio>
    </>
  );
}

const LogoInicio = styled.img`
  height: 161px;
  width: 136px;
  margin: 148px auto 30px auto;
`;

const Titulo = styled.h1`
  font-family: "Righteous";
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
`;

const BotaoInicio = styled.button`
  width: 246px;
  height: 54px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #d70900;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #d70900;
  padding: 5px;
  margin: 30px auto;
`;