import React from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet } from "react-native";

function TelaReceita({ route, navigation }){
    const {imagem, nome, ingredientes, molho, preparo} = route.params


    
    return(
        <ScrollView style={estilos.tela}>
            <Text style={[estilos.nomeReceita, estilos.letraBranca]}>{nome}</Text>
            <Text style={[estilos.tituloIngredientes, estilos.letraBranca]}>Ingredientes</Text>
            
            {
                // Gerando a lista de ingrdientes através de um looping, usando map, que é uma função que percorre todos os valores de uma lista. Fiz o mesmo com os ingredientes do molho
                ingredientes.map((ingrediente) => <Text style={[estilos.ingrediente, estilos.letraBranca]} key={Math.random()}>{ingrediente}</Text>)                
            }

            {
                molho&&molho.map((ingredienteMolho) => <Text style={[estilos.ingredienteMolho, estilos.letraBranca]} key={Math.random()}>{ingredienteMolho}</Text>)
            }

            {
                preparo.map((paragrafoPreparo) => <Text style={[estilos.textoPreparo, estilos.letraBranca]} key={Math.random()}>{paragrafoPreparo}</Text>)
            }

            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </ScrollView>
    )
}


const estilos = StyleSheet.create({
    tela:{
        backgroundColor: "#575757"
    },

    nomeReceita:{
        fontSize: 17,
        fontWeight: "bold",

        textTransform: "uppercase",
        textAlign: "center",
    },

    tituloIngredientes:{
        fontSize: 16,
        textTransform: "uppercase",
    },

    ingrediente:{
        marginBottom: 15,
        fontSize: 16,
    },

    letraBranca:{
        color: "#fff",
    }
})

export default TelaReceita