import * as React from 'react';
import { Dimensions, ImageBackground, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import estilo from '../../components/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import ContatoBar from '../../components/contatoBar';

const servicos = [
  {
    uid: 1,
    nome: "Protótipo Do Validador",
    desc: "Validador RFID para embarque de passageiros.",
    imagem: require('../../assets/Images/prototipo_2.jpeg'),
    pagina: 'Prot_Validador',
  },
  {
    uid: 2,
    nome: "Plataforma Premium",
    desc: "Sistema whitelabel",
    imagem: require('../../assets/Images/Whitelabel (1).png'),
    pagina: 'cli_premiun',
  },
  {
    uid: 3,
    nome: "Parceria",
    desc: "Seja um parceiro. Faça parte de nossa jornada.",
    imagem: require('../../assets/Images/parceria.png'),
    pagina: 'parceria',
  },
]

export default function Servicos(props) {
  //const [index, setIndex] = React.useState('0');
  //const r = React.useRef(0);
  return (
    <View style={estilo.container}>
      <FlatList
        data={servicos}
        ListHeaderComponent={<Text style={estilo.titulo}></Text>} // Titulo
        ListFooterComponent={ContatoBar} // Rodape
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <LinearGradient colors={['#EEE', '#AAFFFF']} locations={[0.3, 0.9]} style={estilo.card}>
            <ImageBackground
              source={item.imagem}
              style={estilo.img_card}
              resizeMode="stretch">
            </ImageBackground>

            <Text style={estilo.card_title}> {item.nome} </Text>

            <Text style={estilo.card_desc}> {item.desc} </Text>

            <TouchableOpacity onPress={() => { props.navigation.navigate(item.pagina) }}>
              <Text style={estilo.card_button}>Saiba Mais</Text>
            </TouchableOpacity>


          </LinearGradient>
        )}
      />
    </View>
  );

}

