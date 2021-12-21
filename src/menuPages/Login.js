import * as React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import estilo from '../../components/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import ContatoBar from '../../components/contatoBar';

export default function Login(props) {
    const [email, onChangeEmail] = React.useState(null);
    const [senha, onChangeSenha] = React.useState(null);

    return (
        <><View style={estilo.container}>
            <Text style={estilo.titulo}></Text>

            <LinearGradient colors={['#FFF', '#EEE', '#AAFFFF']} locations={[0.1, 0.3, 0.9]} style={estilo.card}>
                <SafeAreaView>
                    <Text style={estilo.form_title}>E-mail:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeEmail}
                        placeholder="E-mail"
                        value={email}
                        keyboardType="email-address"
                    />

                    <Text style={estilo.form_title}>Senha:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeSenha}
                        placeholder="Senha"
                        value={senha}
                        secureTextEntry={true}
                    />

                </SafeAreaView>
                <TouchableOpacity onPress={() => { props.navigation.navigate(null) }}>
                    <Text style={estilo.card_button}>Enviar</Text>
                </TouchableOpacity>

            </LinearGradient>
            
        </View><ContatoBar/></>
    );

}

