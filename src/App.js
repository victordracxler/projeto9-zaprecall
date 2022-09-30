import styled from 'styled-components'
import logo from "./assets/img/logo.png"
import setaPlay from "./assets/img/seta_play.png"

export default function App() {
    

    return(
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="logo zaprecall" />
                <h1>ZapRecall</h1>
            </div>
            <ul>
                <li className="pergunta-fechada"><p>perguntinha</p><img src={setaPlay} alt="play" /></li>
                <li className="pergunta-fechada"><p>perguntinha</p><img src={setaPlay} alt="play" /></li>
                <li className="pergunta-fechada"><p>perguntinha</p><img src={setaPlay} alt="play" /></li>
            </ul>

            <div className="footer-concluidos">
                <div className="container-botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
                <p>concluidos</p>
            </div>
        </div>
    )
};
