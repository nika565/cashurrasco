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
    }
})

export default estilos;

