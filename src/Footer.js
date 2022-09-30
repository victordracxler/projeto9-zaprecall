import { useState } from "react";

export default function Footer(props) {
  const {
    respondidas,
    setRespondidas,
    virada,
    setVirada,
    indiceAberta,
    setIndiceAberta,
  } = props;

  const [acertos, setAcertos] = useState([]);
  const [concluidos, setConcluidos] = useState(0);


  function Responder(botao){
    let novaRespondida = [...respondidas]
    novaRespondida[indiceAberta] = botao
    setRespondidas(novaRespondida)
    setIndiceAberta(null);
    setVirada(false);
  }
  console.log(respondidas);

  function ContarConcluidos(){
    let novoConcluidos = 0

    for (let i=0; i<respondidas.length; i++){
        if (respondidas[i] !== null){
            novoConcluidos++
        }
    }
    setConcluidos(novoConcluidos)
    return(
        <span>{novoConcluidos}/{respondidas.length} CONCLUÍDOS</span>
    )
  }

  return (
    <div className="footer-concluidos">
      <div className="container-botoes">
        <button onClick={() => Responder("erro")} disabled={!virada}>Não lembrei</button>
        <button onClick={() => Responder("quase")} disabled={!virada}>Quase não lembrei</button>
        <button onClick={() => Responder("certo")} disabled={!virada}>Zap!</button>
      </div>
      <ContarConcluidos/>
    </div>
  );
}
