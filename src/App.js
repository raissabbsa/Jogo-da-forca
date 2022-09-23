import React from "react";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";

let palavraEscolhida;

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [habilitaBotao, setBotao] = React.useState("desabilitado");
    const [colocaTraco, setColoca]=React.useState([" "]);
    

    function escolhePalavra() {
        let num = Math.floor(Math.random() * palavras.length);
        palavraEscolhida = transformaArray(palavras[num]);
        console.log(palavraEscolhida)
        setBotao("habilitado");
        ColocaTracos()
    }

    function ColocaTracos(){
        let arrayTraco=[];
        for(let i=0;i<palavraEscolhida.length;i++){
            arrayTraco [i]= "__ ";
            setColoca(arrayTraco)
        }
        console.log(arrayTraco)
    }

    function transformaArray(palavra) {
        let arrayPalavra = [];
        for (let i = 0; i < palavra.length; i++) {
            arrayPalavra[i] = palavra[i];
        }
        return arrayPalavra;
    }

    function verificaLetra(letra){
        
        let achou=0
        for(let i=0;i<palavraEscolhida.length;i++){
            if(palavraEscolhida[i] === letra){
                achou=1;
            }
        }
        if(achou===1){
            alert("achouu", letra)
        }
    }

    return (
        <>
            <main>
                <img src={forca0} alt="" />
                <div className="esquerda">
                    <button onClick={escolhePalavra}>Escolher Palavra</button>
                    <div className="visivel">
                        {colocaTraco.map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}</div>
                </div>

            </main>
            <footer>
                <div className={habilitaBotao}>
                    {alfabeto.map((letra,i) => <button key={i} onClick={() => 
                        verificaLetra(letra)}>{letra}</button>)}
                </div>
                <div className="chute">
                    <p>Já sei a palavra!</p>
                    <input type="text" />
                    <button>Chutar</button>
                </div>
            </footer>
        </>
    );
}

