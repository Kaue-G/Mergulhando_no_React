import React from "react";
import photoTeste from "./../assets/fotoExemplo.jpg";
import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";
import { useParams } from "react-router-dom";

export default function Postagem() {

    const { nome, descricao } = useParams()

    return(
        <>
            <Titulo nome="Mergulhando no React" />
            <Campo>
                <Conteudo
                    foto={photoTeste}
                    nome={ "@" + nome }
                    descricao={ descricao }
                />
            </Campo>
        </>
    );
}