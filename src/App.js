import React from "react";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

let palavraEscolhida;
let palavraEspacada=[];
let errou=0;
let acertou=0;

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [colocaTraco, setColoca]=React.useState([" "]);
    const [classeTraco,setClasse]=React.useState("visivel")
    const [clicados, setClicados] = React.useState([]);
    let [img,setImg] = React.useState(forca0)

    function escolhePalavra() {
        let num = Math.floor(Math.random() * palavras.length);
        palavraEscolhida = transformaArray(palavras[num]);
        alert(palavraEscolhida)
        setClicados(alfabeto)
        ColocaTracos()
    }

    function ColocaTracos(){
        let arrayTraco=[];
        for(let i=0;i<palavraEscolhida.length;i++){
            arrayTraco[i]= "__ ";
            
        }
        setColoca(arrayTraco)
    }

    function transformaArray(palavra) {
        let arrayPalavra = [];
        for (let i = 0; i < palavra.length; i++) {
            arrayPalavra[i] = palavra[i];
            palavraEspacada[i]=palavra[i]+" ";
        }
        return arrayPalavra;
    }

    function verificaLetra(letra){
        
        let achou=0

        let novoArrayLetra=[...clicados]
        for(let i=0; i<26;i++){
            if(letra === novoArrayLetra[i]){
                novoArrayLetra[i]=" ";
            }
        }
        setClicados(novoArrayLetra)
        
        let novoArray=[...colocaTraco];
        for(let i=0;i<palavraEscolhida.length;i++){
            if(palavraEscolhida[i] === letra){
                achou=1;
            }
        }
        if(achou===1){
            
            for(let i=0;i<palavraEscolhida.length;i++){
                if(letra === palavraEscolhida[i]){
                    novoArray[i]=letra+" ";
                    acertou++;
                    console.log(acertou)
                }
            
            }
            setColoca(novoArray)
            console.log(novoArray)
            console.log(palavraEspacada)
            if(acertou === palavraEscolhida.length){
                fimJogo("ganhou")
            }
        }
        else{
            errou++;
            if(errou === 1){
                setImg(forca1)
            }
            else if(errou===2){
                setImg(forca2)
            }
            else if(errou===3){
                setImg(forca3)
            }
            else if(errou===4){
                setImg(forca4)
            }
            else if(errou===5){
                setImg(forca5)
            }
            else if(errou===6){
                setImg(forca6)
                fimJogo("perdeu")
            }            
        }

    }

    function fimJogo(estado){
        setColoca(palavraEspacada)

        let novoclicado=[];
        for(let i=0; i<26; i++){
            novoclicado[i] = " "
        }
        setClicados(novoclicado)
        
        if(estado === "perdeu"){
            setClasse("errou")
        }
        else{
            setClasse("ganhou")
        }
    }

    return (
        <>
            <main>
                <img src={img} alt="" />
                <div className="esquerda">
                    <button onClick={escolhePalavra}>Escolher Palavra</button>
                    <div className={classeTraco}>
                        {colocaTraco.map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}</div>
                </div>

            </main>
            <footer>
                <div className="botoes">
                    {alfabeto.map((letra,i) => <button 
                        className={clicados.includes(letra) ? "habilitado" : "desabilitado"}
                        key={i} onClick={() => verificaLetra(letra)}>{letra}</button>)}
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

