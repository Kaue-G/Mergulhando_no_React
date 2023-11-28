import styled from "styled-components";

const ModeloTitulo = styled.div`
    background: linear-gradient(45deg, #cb356b, #bd3f32);
    color: white;
    padding: 32px;
`

const TituloNome = styled.div`
    font-size: 32pt;
    margin-top: 96px;
`

const TituloData = styled.div`
    font-size: 16pt;
    margin-top: 8px;
`
export default function Titulo() {
    return <ModeloTitulo>
        <TituloNome>Velejando com o React</TituloNome>
        <TituloData>Segunda-feira. 01 de Janeiro</TituloData>
    </ModeloTitulo>
}

