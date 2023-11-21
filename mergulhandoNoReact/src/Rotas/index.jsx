import React from "react";
import styled from "styled-components";
import photoTeste from "./../assets/fotoExemplo.jpg";
import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";

export default function Rotas() {

    return <> 
        <Titulo nome="Mergulhando em React"/>
        <Campo>
            <Conteudo 
                phodo={photoTeste}
                nome="@pessoa1"  
                descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fugiat praesentium explicabo quae, provident perspiciatis a inventore quo. Totam tempore ullam voluptates assumenda ratione quod veniam quibusdam, consequuntur non nemo."
            />
        </Campo>
        <Campo>
            <Conteudo 
                phodo={photoTeste}
                nome="@pessoa2"  
                descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fugiat praesentium explicabo quae, provident perspiciatis a inventore quo. Totam tempore ullam voluptates assumenda ratione quod veniam quibusdam, consequuntur non nemo."
            />
        </Campo>
    </>
}

