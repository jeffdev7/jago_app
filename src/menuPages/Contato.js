import * as React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import estilo from '../../components/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import ContatoBar from '../../components/contatoBar';

export default function Contato(props) {
    const [nome, onChangeName] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [empresa, onChangeEmpresa] = React.useState(null);
    const [telefone, onChangeTel] = React.useState(null);
    const [estado, onChangeEstado] = React.useState(null);
    const [cidade, onChangeCidade] = React.useState(null);
    const [msg, onChangeMensagem] = React.useState(null);
    return (
        <><ScrollView style={estilo.container}>
            <Text style={estilo.titulo}></Text>

            <LinearGradient colors={['#FFF', '#EEE', '#AAFFFF']} locations={[0.1, 0.3, 0.9]} style={estilo.card}>
                <SafeAreaView>
                    <Text style={estilo.form_title}>Nome:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeName}
                        placeholder="Nome"
                        value={nome}
                        //secureTextEntry={true}
                    />

                    <Text style={estilo.form_title}>E-mail:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeEmail}
                        placeholder="E-mail"
                        value={email}
                        keyboardType="email-address"
                    />

                    <Text style={estilo.form_title}>Empresa:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeEmpresa}
                        placeholder="Empresa"
                        value={empresa}
                    />

                    <Text style={estilo.form_title}>Telefone:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeTel}
                        value={telefone}
                        placeholder="Telefone"
                        keyboardType="phone-pad"
                    />

                    <Text style={estilo.form_title}>Estado:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeEstado}
                        placeholder="Estado"
                        value={estado}
                    />

                    <Text style={estilo.form_title}>Cidade:</Text>
                    <TextInput
                        style={estilo.input}
                        onChangeText={onChangeCidade}
                        placeholder="Cidade"
                        value={cidade}
                    />
                    <Text style={estilo.form_title}>Mensagem:</Text>
                    <TextInput
                        style={estilo.input_multiline}
                        onChangeText={onChangeMensagem}
                        placeholder="Por favor detalhe seu requerimento"
                        value={msg}
                        numberOfLines={4}
                        editable
                        maxLength={200}
                        multiline={true}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={() => { props.navigation.navigate(null) }}>
                    <Text style={estilo.card_button}>Enviar</Text>
                </TouchableOpacity>

            </LinearGradient>
            <ContatoBar />
        </ScrollView ></>
    );

}

