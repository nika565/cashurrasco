import React from "react";
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    tela:{
        backgroundColor: '#fff',
    },  
    
    containerQtdPessoa:{
        marginTop: 20,
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-around",
    },

    fieldset:{
        borderWidth: 2,
        width: "27%",
        height: 90,
        alignItems: "center",
        borderRadius: 10,
        borderColor: '#F27405'
    },

    fieldsetLabel:{
        textAlign: "center",
        position: "relative",
        top: -13,
        zIndex: 1,
        color: '#F27405',

        backgroundColor: '#fff',
        width: 70,
    },

    fieldsetInput:{
        width: '100%',
        height: '100%',
        textAlign: "center",
        fontSize: 40,
        bottom: 20
    },

    linhaMarrom:{
        backgroundColor: '#BF0404',
        width: '90%',
        height: 2,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    tituloVermelho:{
        color: "#BF0404",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 15,
    },

    subtitulo:{
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 20,
        textTransform: "capitalize",
    },

    checkbox:{
        borderColor: "#FFF",
        backgroundColor: '#FFF'
    },

    footer:{
        backgroundColor: "#260101",
        width: '100%',
        alignItems: "center",
        marginTop: 20,
    },

    tituloAmarelo:{
        color: '#F27405',
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 15,

        margin: 30,
    },

    containerEvento:{
        width: '90%',
    },

    inputTotal:{
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 10,
        marginBottom: 20,
    },

    label:{
        marginLeft: 5,
    },

    input:{
        height: 40,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 5,
    },

    btnEditar:{
        backgroundColor: '#F2B705',
        width: '100%',
        height: 50,

        borderRadius: 10,
        
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 10,
        marginTop: 20,
    },

    btnApagar:{
        backgroundColor: 'red',
        width: '100%',
        height: 50,

        borderRadius: 10,
        
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 20,
        marginTop: 5,
    },

    txtSalvar:{
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: "bold",
    }
})

export default estilos;

