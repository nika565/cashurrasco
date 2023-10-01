import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
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
        <ScrollView style={estilos.tela}>

            <Text style={estilos.tituloCadastro}>Cadastro</Text>
            
            <View style={estilos.formulario}>
                {/* <Text style={estilos.label}>Nome:</Text> */}
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Nome"
                />

                {/* <Text style={estilos.label}>Email:</Text> */}
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />

                {/* <Text style={estilos.label}>Celular:</Text> */}
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setCelular(text)}
                    value={celular}
                    placeholder="Celular"
                    keyboardType="phone-pad"
                />

                {/* <Text style={estilos.label}>Senha:</Text> */}
                <TextInput
                    style={estilos.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity style={estilos.cadastrar} onPress={async () => {
                    const resposta = await criarUsuario(usuario)

                    if (resposta) {
                        navigation.navigate('Login')
                    }
                }}><Text style={estilos.txtCadastrar}>Cadastrar</Text></TouchableOpacity>

                <Text style={estilos.linkVoltar} onPress={() => navigation.navigate("Login")}>Voltar</Text>
            </View>

        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    tela: {
        width: "100%",
        height: "100%",
      },
  
      formulario: {
          width: "75%",
          height: "40%",
  
          display: "flex",
          alignSelf: "center",
      },
  
      tituloCadastro:{
          fontSize: 20,
          fontWeight: "bold",
  
          textTransform: "uppercase",
          textAlign: "center",
          
          color: "#BF0404",

          marginTop: 50,
          marginBottom: 40,
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

      cadastrar:{
          height: 50,

          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "#BF0404",

          borderRadius: 5,

          marginTop: 10,
      },

      txtCadastrar:{
        fontSize: 20,
      },

      linkVoltar:{
          fontSize: 20,
          textAlign: "center",
          color: "#BF0404",
          
          marginTop: 10,
          marginBottom: 10,
      }
  });

export default TelaCadastro;