import * as React from 'react';
import { Dimensions, ImageBackground, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import estilo from '../../components/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import ContatoBar from '../../components/contatoBar';

const menu = [
  {
    uid: 1,
    nome: "Sobre",
    pagina: 'Sobre',
  },
  {
    uid: 2,
    nome: "Contato",
    pagina: 'Contato',
  },
  {
    uid: 3,
    nome: "Login",
    pagina: 'Login',
  },
]

export default function Menu(props) {
  //const [index, setIndex] = React.useState('0');
  //const r = React.useRef(0);
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Menu Principal</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { props.navigation.navigate(item.pagina) }}>
              <Text style={estilo.card_button}>{item.nome}</Text>
            </TouchableOpacity>
        )}
      />
      <ContatoBar />
    </View>
  );

}

