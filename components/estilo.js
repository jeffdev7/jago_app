import * as React from 'react';
import { StyleSheet } from 'react-native';

/*import { useFonts } from 'expo-font';
let [fontsLoaded] = useFonts({
  'Nunito': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
});*/

const estilo = StyleSheet.create({
  container_azul: {
    flex: 1,
    backgroundColor: '#60a3d9',
    alignItems: 'center',
    //borderBottomColor: '#000',
    //borderBottomWidth: 5,
    //maxHeight: "70%",
    //justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#EFF',
  },

  titulo: {
    color: '#000',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationColor: '#2e8bc0',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  titulo_home: {
    color: '#FFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  subtitulo_home: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  blocoEstilo: {
    maxWidth: 500,
    maxHeight: 200,
    textAlign: 'center',
    justifyContent: 'center',
  },
  carrosel: {
    marginHorizontal: 20,
  },
  txtHome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    marginTop: 15,
  },
  txtStyle: {
    fontSize: 15,
    //margin: 4,
    textAlign: 'justify',
    padding: 10,
    paddingHorizontal: 20,
  },
  img: {
    height: 260,
  },
  img_logo: {
    height: 150,
    width: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    tintColor: '#FFF',
  },
  img_logo_border: {
    padding: 40,
    margin: 45,
    height: 190,
    width: 190,
    //padding: 5,
    backgroundColor: '#EEFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 900,
  },
  card: {
    //shadowColor: '#000',
    //shadowRadius: 5,
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
  },

  card_title: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card_desc: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    //marginBottom: 10,
  },
  card_button: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    backgroundColor: '#60a3d9',
    opacity: 0.8,
    borderRadius: 20,
    //shadowColor: '#000',
    //shadowRadius: 5,
    borderWidth: 1,
  },
  img_card: {
    height: 300,
    margin: 5,
  },

  contato_box: {
    borderTopWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-end',
    backgroundColor: '#FFE',
  },
  txt_contato: {
    fontSize: 10,
  },
  img_contato: {
    height: 30,
    width: 30,
  },
  input: {
    height: 40,
    marginHorizontal: 15,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  form_title: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'monospace',
    marginHorizontal: 15,
    marginTop: 10,
  },
  input_multiline: {
    height: 100,
    marginHorizontal: 15,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    maxHeight: 1000,
    textAlignVertical: 'top',
  },
  img_border: {
    height: 270,
    padding: 5,
    //width: 32,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
export default estilo;
