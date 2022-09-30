import styled from 'styled-components'
import logo from "./assets/img/logo.png"
import Footer from './Footer'
import Perguntas from './Perguntas'

export default function App() {
    

    return(
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="logo zaprecall" />
                <h1>ZapRecall</h1>
            </div>
            <Perguntas/>

            <Footer/>
        </div>
    )
};
