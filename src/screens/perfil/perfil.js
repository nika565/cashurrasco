import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import editarUsuario from "../../services/api/usuarios/editarUsuario";
import buscarUsuario from "../../services/api/usuarios/buscarUsuario";
import apagarUsuario from "../../services/api/usuarios/apagarUsuario";
import Alerta from "../../components/alerta";

function Perfil({ route, navigation }) {

    const [nome, setNome] = useState(route.params.nome);
    const [email, setEmail] = useState(route.params.email);
    const [celular, setCelular] = useState(route.params.celular);
    // const [senha, setSenha] = useState(route.params.senha);

    const usuario = {
        nome: nome,
        email: email,
        celular: celular
    };

    return (
        <ScrollView style={estilos.tela}>

            {/* <Text>Perfil:</Text> */}

            <Image style={estilos.imgPerfil} source={require("../../assets/icons/chef.png")} />

            <View style={estilos.formulario}>
                <Text style={estilos.label}>Nome</Text>
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Digite seu nome"
                />

                <Text style={estilos.label}>E-mail</Text>
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />

                <Text style={estilos.label}>Celular</Text>
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setCelular(text)}
                    value={celular}
                    placeholder="Digite seu celular"
                    keyboardType="phone-pad"
                />



                <TouchableOpacity style={[estilos.btn, estilos.corAmarelo]} onPress={async () => {
                    const resposta = await editarUsuario(route.params.id, usuario)

                    if (resposta.status == 'error') {

                        Alerta("Ops! Algo deu errado", resposta.msg);

                    } else {

                        const dados = await buscarUsuario(route.params.id);

                        Alerta("Usuário editado com sucesso", resposta.msg);


                        setNome(dados.usuario.nome);
                        setEmail(dados.usuario.email);
                        setCelular(dados.usuario.celular);

                    }

                }}><Text style={estilos.txtBtn}>Editar</Text></TouchableOpacity>


                <TouchableOpacity style={[estilos.btn, estilos.corVermelho]} onPress={async () => {
                    const resposta = await apagarUsuario(route.params.id)

                    if (resposta.status == 'error') {

                        Alerta("Ops! Algo deu errado", resposta.msg);

                    } else {

                        Alerta("Usuário excluído com sucesso", resposta.msg);

                        navigation.navigate('Login');

                    }

                }}><Text style={estilos.txtBtn}>Excluir conta</Text></TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const estilos = StyleSheet.create({

    tela: {
        backgroundColor: '#260101',
    },

    formulario:{
        width: '75%',
        alignSelf: "center",
    },

    label: {
        fontSize: 18,
        color: '#FFF',
        
        marginBottom: 10,
    },
    input: {
        fontSize: 15,
        color: '#FFF',

        borderWidth: 0,
        borderRadius: 5,

        padding: 10,
        marginBottom: 30,

        backgroundColor: '#4B0000',
    },

    corAmarelo:{
        backgroundColor: '#FF7801'
    },

    corVermelho:{
        backgroundColor: '#BF0404'
    },

    btn:{
        width: '100%',
        height: 45,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 5,
        marginBottom: 30,
    },

    txtBtn:{
        fontSize: 15,
    },

    imgPerfil:{
        width: 100,
        height: 100,

        backgroundColor: '#F48E35',

        padding: 20,
        alignSelf: "center",

        borderRadius: 100,
        margin: 30,
    }

});

export default Perfil;