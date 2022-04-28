import React from "react";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#08 - Renderização Condicional" color="##982395">
                <ParOuImpar numero={21}> </ParOuImpar>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos> </TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos> </ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira da Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={100} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno "
                    aluno="Pedro Silva "
                    nota={9.3}
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);

/*

A função abaixo é um exemplo de como fazer uma função com a sintaxe mais simples possível:

underline _ : é usado para quando se vai receber apenas um parametro
Arrow function => : Quando não vai se nomear a função, voce pode usar o simbolo de => depois dos parametros
{} () return : quando é para retornar tudo aquilo que está dentro da função.

export default _ => 
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Fragmento />
            <ComParametro
                titulo="Situação do aluno "
                aluno="Pedro Silva "
                nota={9.3}
            />
            <Primeiro></Primeiro>

        </div>






A função abaixo é um exemplo de como fazer uma função com a sintaxe completa, onde que é declarada que é uma function, o nome dela e os parametros que ela recebe:
export default function SintaxeCompleta (props) {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Fragmento />
            <ComParametro
                titulo="Situação do aluno "
                aluno="Pedro Silva "
                nota={9.3}
            />
            <Primeiro></Primeiro>

        </div>
    )

}
*/
