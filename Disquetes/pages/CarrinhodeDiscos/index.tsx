
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Topo from './components/Topo';
import Detalhe from "./components/Detalhe";
import carrinho from "../../mocks/disquetes";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo}/>
      <View style={estilos.carrinho}>
          <Detalhe
            nome={carrinho.detalhes.nome}
            nomeLoja={carrinho.detalhes.nomeLoja}
            descricao={carrinho.detalhes.descricao}
            preco={carrinho.detalhes.preco}
          />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});