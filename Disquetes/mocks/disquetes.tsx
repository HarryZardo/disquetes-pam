import { ImageComponent } from 'react-native';
import cartola from '../../assets/imgs/cartola lp.jpg';
import djavan from '../../assets/imgs/djavan.jpg';
import led_zeppelin from '../../assets/imgs/Led-Zeppelin-Celebration-Day-2012.jpg';
import legião_dois from '../../assets/imgs/lgdois.jpg';
import nirvana from '../../assets/imgs/nirvana.jpg';
import the_smiths from '../../assets/imgs/The Smiths Meat Is Murder 1985.jpg';

const carrinho = {
    topo: {
        titulo: "Detalhes do Carrinho",
    },
    detalhes: {
        nome: "Carrinho de Compras",
        nomeLoja: "Disquetes store",
        descricao: "Uma cesta com discos cuidadosamente selecionados para integrar sua coleção ;)",
        preco: "R$ 20,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens do Carrinho",
        lista: [
            {
                nome: "Disco Cartola",
                imagem: cartola,
            },
            {
                nome: "Disco Djavan",
                imagem: djavan,
            },
            {
                nome: "Disco Celebration Day-Led Zeppelin",
                imagem: led_zeppelin,
            },
            {
                nome: "Disco Dois-Legião Urbana",
                imagem: legião_dois,
            },
            {
                nome: "Disco Nevermind-Nirvana",
                imagem: nirvana,
            },
            {
                nome: "Disco Meat is Murder-The Smiths",
                imagem: the_smiths,
            }
        ]
    }
}

export default carrinho;