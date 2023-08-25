import React from "react";
import * as S from "./styles";

export interface ICard {
    texto: string
     
  }
  export const Card = ({ texto }: ICard) => {
    return (
      <S.Aside>
        <p>Notícia de Lançamento de Produto: "A Empresa X Anuncia o Novo Smartphone Y: A Empresa X revelou seu
        mais recente lançamento, o Smartphone Y, equipado com uma câmera de alta resolução, processador de última
        geração e recursos de inteligência artificial. Saiba mais sobre as especificações e recursos deste dispositivo
         inovador." </p> {texto} 
      </S.Aside>
    );
  };