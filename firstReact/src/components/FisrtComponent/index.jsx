import styled from "styled-components";
import "./style.css";

function FirstComponent() {
    const Titulo = styled.h1`
        color: #fff;
        font-size: 30px;
        font-family: sans-serif;    
    `
    const Paragrafo = styled.p`
        color: #dedede;
        font-size: 20px;
        font-family: sans-serif;    
    `

    return (
        <section className="first-section">
            <section>
            {/* Informaçoes Gosta de fazer */}
                <Titulo>I Like this:</Titulo>
                <Paragrafo>
                    Pizza, Suco de Maracujá trincando de gelado, <br/>
                    Baketball, Natação, Ler, <br/>
                    Tocar violão.
                </Paragrafo>
            </section>
            <section>
            {/* Experiências Legais */}
                <Titulo> Nice moments:</Titulo>
                <Paragrafo>
                    Dia de praia com mina familia, <br />
                    Sair com amigos, <br />
                    comer em Rodizio <br />
                </Paragrafo>
            </section>
        </section>
    );
}

export default FirstComponent;
