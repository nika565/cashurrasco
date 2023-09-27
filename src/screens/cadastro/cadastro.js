import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CadastroForm from "../../components/cadastroUsuario";

function TelaCadastro({ navigation }){
    return(
        <View style={styles.container}>
            <Text >Tela de cadastro</Text>
            <CadastroForm/>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 16,
      },

});

export default TelaCadastro;