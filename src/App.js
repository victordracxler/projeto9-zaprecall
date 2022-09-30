import { useState } from 'react'
import styled from 'styled-components'
import logo from "./assets/img/logo.png"
import Footer from './Footer'
import DECKTESTE from './mock'
import Perguntas from './Perguntas'


export default function App() {
    const allClosed = []
    const allNull = []
    DECKTESTE.forEach(() => {
        allClosed.push(false)
        allNull.push(null)
        })
    const [respondidas, setRespondidas] = useState(allNull)
    const [virada, setVirada] = useState(false)
    const [indiceAberta, setIndiceAberta] = useState()

    return(
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="logo zaprecall" />
                <h1>ZapRecall</h1>
            </div>
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
        </div>
    )
};
