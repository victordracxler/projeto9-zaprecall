import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";
import DECKTESTE, { CORES } from "./mock";
import iconCerto from "./assets/img/icone_certo.png";
import iconQuase from "./assets/img/icone_quase.png";
import iconErro from "./assets/img/icone_erro.png";

export default function Perguntas(props) {
  const { respondidas, virada, setVirada, indiceAberta, setIndiceAberta } =
    props;
  const { verde, amarelo, vermelho, cinza } = CORES;

  function Pergunta(obj, i) {
    const { question, answer } = obj;

    if (i === indiceAberta) {
      if (virada) {
        return (
          <PerguntaAberta data-identifier="flashcard" key={i}>
            <p data-identifier="flashcard-answer">{answer}</p>
          </PerguntaAberta>
        );
      } else {
        return (
          <PerguntaAberta data-identifier="flashcard" key={i}>
            <p data-identifier="flashcard-question">{question}</p>
            <img
              data-identifier="flashcard-turn-btn"
              onClick={() => setVirada(true)}
              src={setaVirar}
              alt="turn"
            />
          </PerguntaAberta>
        );
      }
    } else {
      if (respondidas[i] === null) {
        return (
          <PerguntaFechada data-identifier="flashcard" key={i}>
            <p data-identifier="flashcard-index-item">Pergunta {i + 1}</p>
            <img
              data-identifier="flashcard-show-btn"
              onClick={() => {
                setIndiceAberta(i);
                setVirada(false);
              }}
              src={setaPlay}
              alt="play"
            />
          </PerguntaFechada>
        );
      } else {
        let icone;
        let cor;
        switch (respondidas[i]) {
          case "certo":
            icone = iconCerto;
            cor = verde;
            break;
          case "quase":
            icone = iconQuase;
            cor = amarelo;
            break;
          case "erro":
            icone = iconErro;
            cor = vermelho;
            break;
          default:
            cor = cinza;
            break;
        }
        return (
          <PerguntaFechada
            data-identifier="flashcard"
            cor={cor}
            key={i}
            line={true}
          >
            <p data-identifier="flashcard-index-item">Pergunta {i + 1}</p>
            <img data-identifier="flashcard-status" src={icone} alt="answered" />
          </PerguntaFechada>
        );
      }
    }
  }

  return <ul>{DECKTESTE.map((obj, i) => Pergunta(obj, i))}</ul>;
}

const PerguntaFechada = styled.li`
  width: 300px;
  height: 50px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.cor};
    text-decoration: ${(props) => props.line && "line-through"};
  }
`;

const PerguntaAberta = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
