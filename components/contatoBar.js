import * as React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import estilo from './estilo';

export default function contatoBar() {
    return (
        <View style={estilo.contato_box}>
            <Text>
                <ImageBackground
                    source={require('../assets/Images/face_icon.png')}
                    style={estilo.img_contato}
                    resizeMode="center">
                </ImageBackground>
                <ImageBackground
                    source={require('../assets/Images/insta_icon.png')}
                    style={estilo.img_contato}
                    resizeMode="center">
                </ImageBackground>
            </Text>
            <Text style={estilo.txt_contato}>{"© 2021 JaGO"}</Text>
        </View>
    );
}