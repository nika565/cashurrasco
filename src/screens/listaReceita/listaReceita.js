import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";

function TelaListaReceitas(){
    return(
        <ScrollView style="estilos.tela">
            <Text>Aqui ficarão as receitas</Text>

            <TouchableOpacity style={estilos.botaoReceita}>
                <Image source={{uri: 'https://www.colherdepau.net/wp-content/uploads/2021/03/26219596_174952219904944_3535145634622898468_n.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Frango à portuguesa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita}>
                <Image source={{uri: 'https://www.colherdepau.net/wp-content/uploads/2021/03/26219596_174952219904944_3535145634622898468_n.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Frango à portuguesa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita}>
                <Image source={{uri: 'https://www.colherdepau.net/wp-content/uploads/2021/03/26219596_174952219904944_3535145634622898468_n.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Frango à portuguesa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita}>
                <Image source={{uri: 'https://www.colherdepau.net/wp-content/uploads/2021/03/26219596_174952219904944_3535145634622898468_n.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Frango à portuguesa</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    tela:{
        width: "100%",
        display: "flex",
    },

    botaoReceita:{
        width: "80%",
        height: 200,
        marginBottom: 20,
        alignSelf: "center",
        // backgroundColor: "#000",

        justifyContent: "flex-end",

    },

    imagemReceita:{
        width: "100%",
        height: "100%",

        borderRadius: 5,
    },

    containerTexto:{
        position: "absolute",
        backgroundColor: '#00000081',
        width: "100%",
        height: "25%",

        borderTopWidth: 3,
        borderTopColor: "#F27405",

        justifyContent: "center",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    textoReceita:{
        marginLeft: 10,

        color: "#fff",
        textTransform: "uppercase",
    },
});

export default TelaListaReceitas;