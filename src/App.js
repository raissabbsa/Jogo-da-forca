import React from "react";
import Botoes from "./Botoes";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";


export default function App() {
    return (
        <>
            <main>
                <img src={forca0} alt=""/>
                <button>Escolher Palavra</button>
            </main>
            <footer>
                <Botoes />
                <div className="chute">
                    <p>Já sei a palavra!</p>
                    <input type="text" />
                    <button>Chutar</button>
                </div>

            </footer>
        </>

    );
}

