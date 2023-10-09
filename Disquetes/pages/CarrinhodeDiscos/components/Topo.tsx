
import { Text, Image, StyleSheet, Dimensions } from 'react-native';
import topo from "../../../../assets/imgs/header.jpg";

const width = Dimensions.get("screen").width;

type Props = {
    titulo: string
}
//integrando os mocks as funções.
export default function Topo({titulo}: Props) {
    return <>

     <Image source={topo} style={estilos.topo} />
     <Text style={estilos.titulo}>{titulo}</Text>
    </>
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      color: "#A60F1B",
      textAlign: "center",
      fontSize: 28,
      lineHeight: 30,
      padding: 40,
      fontFamily: "MontserratBold",
    }
  });