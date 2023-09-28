import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import criarUsuario from "../../services/api/usuarios/criarUsuario";

function TelaCadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');

    const usuario = {
        nome: nome,
        email: email,
        celular: celular,
        senha: senha
    };

    return (
        <View style={styles.container}>
            
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

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />

                <Button title="Cadastrar" onPress={async () => {
                    const resposta = await criarUsuario(usuario)

                    if (resposta) {
                        navigation.navigate('Login')
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

export default TelaCadastro;