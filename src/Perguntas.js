import { useState } from "react";
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import DECKTESTE from "./mock"


export default function Perguntas() {
    const allClosed = []
    DECKTESTE.forEach(() => allClosed.push(false))
    const [aberta, setAberta] = useState(allClosed)



    function Pergunta(obj, i) {
        console.log(obj);
        const {question, answer} = obj

        if(aberta[i]){
            return (
            <li key={i} className="pergunta-aberta"><p>{question}</p><img src={setaVirar} alt="turn" /></li>
            )
        } else {
            return (
            <li key={i} className="pergunta-fechada"><p>pergunta {i+1}</p><img onClick={() => AbrirPergunta(i)} src={setaPlay} alt="play" /></li>
            )  
        }
    }

    function AbrirPergunta(chave) {
        const novoAberto = [...allClosed]
        novoAberto[chave] = true
        setAberta(novoAberto)        
    }


    return(
        <ul>
            {DECKTESTE.map((obj, i) => Pergunta(obj, i))}
                
        </ul>
    )
    
};
