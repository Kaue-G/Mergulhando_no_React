import React from "react";
import styled from "styled-components"

export default function Rotas() {

    const Titulo = styled.div`
        color: #2da9f3;
        font-size: 32pt;
        padding: 32px 0;
        text-align: center;
    `

    const Campo = styled.div`
        background: #303741;
        border-radius: 16px;
        padding: 16px;
    `
    const Conteudo = styled.div`
        background: #3b424c;
        border-radius: 16px;
        margin-bottom: 16px;
        padding: 16px;
    `
    const ConteudoTopo  = styled.div`
        display: flex;
        gap: 16px;
    `
    const ConteudoFoto = styled.img`
        boder-radius: 100%;
        height: 96px;
        width: 96px;
    `
    const ConteudoNome = styled.div`
        align-self: center;
        color: #2ca8f2;
    `
    const ConteudoDescricao = styled.div`
        margin-top: 16px;
        text-align: justify;
    `

    return <> 
        <Titulo>Mergulhando no React</Titulo>
        <Campo>
            <Conteudo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta esse corporis ullam! Tempora, debitis iste sed voluptatum sequi ex quidem reprehenderit voluptates eveniet unde odit officiis? Reprehenderit, consequuntur quibusdam?
            </Conteudo>
            <Conteudo>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odit dolor optio. Distinctio enim tenetur dicta ad totam, illum animi sint laudantium id, excepturi itaque sit quia corrupti consequatur. Maiores?
            </Conteudo>
        </Campo>
    </>
}

