'use client'

import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import CardAluno from "@/components/perfil/perfil";
import CardDisciplina from "@/components/props/CardDisciplinas";
import Botao from "@/components/button/button";
import Footer from "@/components/footer/footer";
import { useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [contador, setContador] = useState(0);

  const [atividades, setAtividades] = useState(0);

  return (
    <div>
      <Header />
      <Menu />
      <CardAluno nome="Fernanda" curso="amizade e magia" periodo="3º" />
      <CardDisciplina nome="Honestidade" professor="Leon Kennedy" nota="9,0" />
      <CardDisciplina nome="Lealdade" professor="Xavier" nota="8,5" />
      <CardDisciplina nome="generosidade" professor="Rarity" nota="7,8" />
      <Botao texto="Entrar" />
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>+</button>

      <h1>{atividades}</h1>
      <button onClick={() => setAtividades(atividades + 1)}>+</button>
      <button onClick={()=> { atividades > 0 && setAtividades(atividades - 1)}}>-</button>
      if (atividades === 0) {
        <p>Nenhuma atividade cadastrada.</p>
      } else if (atividades === 1) {
        <p>Você possui 1 atividade.</p>
      } else {
        <p>Você possui {atividades} atividades.</p>
      }
      <Footer />
    </div>
  );
}
