import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import logo from "../../../../assets/logo.jpg";

type Props = {
  nome: string,
  nomeLoja: string,
  descricao: string,
  preco: string
}

export default function Detalhe({nome, nomeLoja, descricao, preco}: Props): JSX.Element{
    return <>
    
    <Text style={estilos.nome}>{nome}</Text>

        <View style={estilos.loja}>
          <Image style={estilos.imagemLoja }source={logo}/>
          <Text style={estilos.nomeLoja} >{nomeLoja}</Text>
        </View>

        <Text style={estilos.descricao}>
          {descricao}
        </Text>

        <Text style={estilos.preco}>{preco}</Text>
        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textobotao}>Comprar</Text>
        </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({
  
    nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#A60F1B",
      fontFamily: "MontserratItalic",
    },
    loja: {
      flexDirection:"row",
      paddingVertical: 12
    },
    imagemLoja: {
      width:32,
      height:32
    },
    nomeLoja:{
      fontSize: 16,
      fontFamily: "MontserratItalic",
      lineHeight: 26,
      marginLeft: 12
    },
    descricao: {
      color: "#0D0D0D",
      fontFamily: "MontserratRegular"
    },
    preco: {
      fontSize: 24,
      fontFamily: "MontserratRegular",
      color: "#0D0D0D",
      marginTop: 8
    },
    botao: {
      marginTop: 16,
      backgroundColor: "#BF5454",
      paddingVertical: 16,
      borderRadius: 6
    },
    textobotao: {
      textAlign: "center",
      color: "#0D0D0D",
      fontSize: 16,
      lineHeight: 26,
      fontFamily: "MontserratBold"
    }
  });