import { useState } from "react";
import styled from "styled-components";
import { CORES } from "./mock";


export default function Footer(props) {
  const {
    respondidas,
    setRespondidas,
    virada,
    setVirada,
    indiceAberta,
    setIndiceAberta,
  } = props;
 
  const {verde, amarelo, vermelho} = CORES
  
  const [concluidos, setConcluidos] = useState(0);

  function Responder(botao) {
    let novaRespondida = [...respondidas];
    novaRespondida[indiceAberta] = botao;
    setRespondidas(novaRespondida);
    setIndiceAberta(null);
    setVirada(false);
  }

  return (
    <FooterConcluidos>
      <ContainerBotoes>
        <BotaoResposta cor={vermelho} onClick={() => Responder("erro")} disabled={!virada}>
          Não lembrei
        </BotaoResposta>
        <BotaoResposta cor={amarelo} onClick={() => Responder("quase")} disabled={!virada}>
          Quase não lembrei
        </BotaoResposta>
        <BotaoResposta cor={verde} onClick={() => Responder("certo")} disabled={!virada}>
          Zap!
        </BotaoResposta>
      </ContainerBotoes>
      <ContarConcluidos
        respondidas={respondidas}
        concluidos={concluidos}
        setConcluidos={setConcluidos}
      />
    </FooterConcluidos>
  );
}

function ContarConcluidos({ respondidas, concluidos, setConcluidos }) {
  let novoConcluidos = 0;

  for (let i = 0; i < respondidas.length; i++) {
    if (respondidas[i] !== null) {
      novoConcluidos++;
    }
  }
  setConcluidos(novoConcluidos);
  return (
    <span>
      {concluidos}/{respondidas.length} CONCLUÍDOS
    </span>
  );
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const BotaoResposta = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px solid ${props => props.cor};
  padding: 5px;
`;
