import React from "react";

export default function Botoes() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [habilitaBotao,setBotao]=React.useState("desabilitado");


    return (
        <div className={habilitaBotao}>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>I</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
            <button>M</button>
            <button>N</button>
            <button>O</button>
            <button>P</button>
            <button>Q</button>
            <button>R</button>
            <button>S</button>
            <button>T</button>
            <button>U</button>
            <button>V</button>
            <button>W</button>
            <button>X</button>
            <button>Y</button>
            <button>Z</button>
        </div>
    )
}