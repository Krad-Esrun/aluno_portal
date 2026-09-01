import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import CardAluno from "@/components/perfil/perfil";
import CardDisciplina from "@/components/props/CardDisciplinas";
import Botao from "@/components/button/button";
import Footer from "@/components/footer/footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <CardAluno nome="Fernando" curso="amizade e magia" periodo="3º" />
      <CardDisciplina nome="Honestidade" professor="Leon Kennedy" nota="9,0" />
      <CardDisciplina nome="Lealdade" professor="Xavier" nota="8,5" />
      <CardDisciplina nome="generosidade" professor="Rarity" nota="7,8" />
      <Botao texto="Entrar" />
      <Footer />
    </div>
  );
}
