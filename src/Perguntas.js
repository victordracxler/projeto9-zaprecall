import { useState } from "react";
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";
import DECKTESTE from "./mock";

export default function Perguntas(props) {
  const { respondidas, virada, setVirada, indiceAberta, setIndiceAberta } =
    props;

  function Pergunta(obj, i) {
    const { question, answer } = obj;

    if (i === indiceAberta) {
      if (virada) {
        return (
          <li key={i} className="pergunta-aberta">
            <p>{answer}</p>
          </li>
        );
      } else {
        return (
          <li key={i} className="pergunta-aberta">
            <p>{question}</p>
            <img onClick={() => setVirada(true)} src={setaVirar} alt="turn" />
          </li>
        );
      }
    } else {
      return (
        <li key={i} className="pergunta-fechada">
          <p>pergunta {i + 1}</p>
          <img
            onClick={() => {
              setIndiceAberta(i);
              setVirada(false);
            }}
            src={setaPlay}
            alt="play"
          />
        </li>
      );
    }
  }


  return <ul>{DECKTESTE.map((obj, i) => Pergunta(obj, i))}</ul>;
}
