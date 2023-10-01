import React from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";

function TelaReceita({ route, navigation }){
    const {imagem, nome, ingredientes, molho, preparo} = route.params


    
    return(
        <ScrollView style={estilos.tela}>
            <Text style={[estilos.nomeReceita, estilos.letraBranca]}>{nome}</Text>

            <View style={estilos.containerReceita}>
                <Text style={[estilos.tituloIngredientes, estilos.letraBranca]}>Ingredientes</Text>
                
                {
                    // Gerando a lista de ingrdientes através de um looping, usando map, que é uma função que percorre todos os valores de uma lista. Fiz o mesmo com os ingredientes do molho
                    ingredientes.map((ingrediente) => <Text style={[estilos.ingrediente, estilos.letraBranca]} key={Math.random()}><Image style={estilos.ingredienteIcone} source={require('../../assets/icons/salad.png')}/>{ingrediente}</Text>)                
                }
                <View style={estilos.containerMolho}>
                    {
                        molho&&molho.map((ingredienteMolho) => <Text style={[estilos.ingredienteMolho, estilos.letraBranca]} key={Math.random()}>{ingredienteMolho}</Text>)
                    }
                </View>

                <Text style={estilos.tituloPreparo}>Modo de preparo</Text>

                {
                    preparo.map((paragrafoPreparo) => <Text style={[estilos.textoPreparo, estilos.letraBranca]} key={Math.random()}>{paragrafoPreparo}</Text>)
                }
            </View>

            <TouchableOpacity style={estilos.btn} onPress={() => navigation.goBack()}><Text style={estilos.txtBtn}>Voltar</Text></TouchableOpacity>
        </ScrollView>
    )
}


const estilos = StyleSheet.create({
    tela:{
        // backgroundColor: "#"
    },

    nomeReceita:{
        fontSize: 17,
        fontWeight: "bold",

        textTransform: "uppercase",
        textAlign: "center",

        marginTop: 30,
        marginBottom: 30,
    },

    containerReceita:{
        marginLeft: 10,
    },

    tituloIngredientes:{
        fontSize: 16,
        textTransform: "uppercase",
    },

    ingredienteIcone:{
        width: 50,
        height: 50,
    },

    ingrediente:{
        fontSize: 16,
    },

    ingredienteMolho:{
        marginTop: 20,
        fontSize: 16,
    },

    letraBranca:{
        color: "#000",
    },

    containerMolho:{
        marginTop: 20,
        marginBottom: 20,
    },

    tituloPreparo:{
        fontSize: 16,
        textTransform: 'uppercase',

        marginTop: 20,
        marginBottom: 20,
    },

    textoPreparo:{
        fontSize: 16,
        textAlign: "justify",
        marginRight: 10,
        marginBottom: 10,
    },

    btn:{
        backgroundColor: "#FF7801",
        width: 150,
        borderRadius: 5,
        height: 50,
        marginTop:20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        margin: 20,
    },

    txtBtn:{
        fontSize: 16,
    }
})

export default TelaReceita