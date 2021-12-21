import * as React from 'react';
import { Dimensions, ImageBackground, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import estilo from '../../components/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import ContatoBar from '../../components/contatoBar';

export default function Sobre() {
    return (
        <><View style={estilo.container}>
            <Text style={estilo.titulo}></Text>
            <Text style={estilo.txtStyle}>A JaGO é uma startup de soluções tecnológicas para microempresas de transporte de turismo.</Text>
            <Text style={estilo.txtStyle}>Nossos principais produtos e serviços são: O validador RFID (Radio Frequency Identification). Com ele o tempo de fila no embarque será muito menor em comparação ao metódo tradicional de papel e caneta. Por essa razão nosso slogan "Ready you go!",
                o passageiro basta aproximar o celular ou uma pulseira (de uma excursão, por exemplo.) e já está pronto para embarcar.</Text>
                <Text style={estilo.txtStyle}>E plataformas whitelabel, que são sistemas desenvolvidos de acordo com as necessidades e plano de negócios do cliente.</Text>
            <Text style={estilo.txtStyle}>Temos como objetivo expandir nossa empresa para que possamos atender outros modais de transporte
                como aéreo, ferroviário e aquaviário.</Text>
            <Text style={estilo.txtStyle}>JaGO está localizada em Guarulhos no estado de São Paulo.
                Para mais informações nos sigam no Instagram e Facebook.</Text>

        </View><ContatoBar /></>
    );

}

