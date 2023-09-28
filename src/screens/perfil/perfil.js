import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
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
        <View style={styles.container}>

            <Text>Perfil:</Text>

            <View style={styles.container}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Digite seu nome"
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Celular:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setCelular(text)}
                    value={celular}
                    placeholder="Digite seu celular"
                    keyboardType="phone-pad"
                />



                <Button title="Editar" onPress={async () => {
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

                }} />


                <Button title="Excluir conta" onPress={async () => {
                    const resposta = await apagarUsuario(route.params.id)

                    if (resposta.status == 'error') {

                        Alerta("Ops! Algo deu errado", resposta.msg);

                    } else {

                        Alerta("Usuário excluído com sucesso", resposta.msg);

                        navigation.navigate('Login');

                    }

                }} />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
    },

});

export default Perfil;