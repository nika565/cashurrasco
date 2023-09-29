import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native"
import Login from "../../services/api/usuarios/login";
import Alerta from "../../components/alerta";

function TelaLogin({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usuario = {
        email: email,
        senha: senha
    };

    return (
        <View style={styles.container}>

            <View>
                

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />


                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />

                <Button title="Entrar" onPress={async () => {
                    const resposta = await Login(usuario)

                    if (resposta.status == 'success') {

                        setEmail('');
                        setSenha('');

                        Alerta('Sucesso!', resposta.msg);

                        navigation.navigate("Calculadora", resposta.dados);

                    } else {
                        Alerta('Algo deu errado:', resposta.msg)
                    }

                }} />

            </View>

            <Button title="Cadastre-se" onPress={() => navigation.navigate("Cadastro")} />
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

export default TelaLogin;