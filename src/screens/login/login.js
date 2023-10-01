import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native"
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
        <ScrollView style={estilos.tela}>

            {/* <TouchableOpacity title="alternativo" onPress={() => navigation.navigate("Calculadora")}><Text>Atalho</Text></TouchableOpacity> */}

            <Text style={estilos.tituloLogin}>Login</Text>

            <View style={estilos.login}>
                <View>
                    {/* <Text style={estilos.label}>Email:</Text> */}
                    <TextInput
                        style={estilos.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder="E-mail"
                        keyboardType="email-address"
                    />
                </View>

                <View>

                </View>
                    {/* <Text style={estilos.label}>Senha:</Text> */}
                    <TextInput
                        style={estilos.input}
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />

                <TouchableOpacity style={estilos.entrar} onPress={async () => {
                    const resposta = await Login(usuario)

                    if (resposta.status == 'success') {

                        setEmail('');
                        setSenha('');

                        Alerta('Sucesso!', resposta.msg);

                        navigation.navigate("Calculadora", resposta.dados);

                    } else {
                        Alerta('Algo deu errado:', resposta.msg)
                    }

                }}><Text style={estilos.txtEntrar}>Entrar</Text></TouchableOpacity>

                <Text style={estilos.txtCadastrar}>
                    Ainda não é cadastrado? 
                    <Text style={estilos.linkCadastrar} onPress={() => navigation.navigate("Cadastro")}> Cadastre-se</Text>
                </Text>
            </View>

        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    tela: {
        width: "100%",
        // height: "100%",
      },
  
      login: {
          alignSelf: "center",
          width: "75%",
          height: "40%",
  
          display: "flex",
      },
  
      tituloLogin:{
          fontSize: 20,
          fontWeight: "bold",
  
          textTransform: "uppercase",
          textAlign: "center",
          
          color: "#BF0404",

          marginTop: 60,
          marginBottom: 50,
      },
  
      input: {
          width: "100%",
          height: 50,

          paddingLeft: 10,
  
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#BF0404",
        
          fontSize: 20,
          marginBottom: 30,
      },

      entrar:{
          height: 50,

          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "#BF0404",

          borderRadius: 5,

          marginTop: 20,
      },

      txtEntrar:{
        fontSize: 20,
      },

      txtCadastrar:{
        marginTop: 50,
        fontSize: 14,
      },

      linkCadastrar:{
        fontSize: 15,
        color: "#BF0404"
      }
  });

export default TelaLogin;