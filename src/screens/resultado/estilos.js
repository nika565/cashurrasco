import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    cardapio:{
        width: '85%',
        marginBottom: 40,

        borderWidth: 1.5,
        borderRadius: 10,
        
        alignSelf: "center",
    },

    tituloCardapio:{
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",

        marginTop: 20,
        marginBottom: 3,
        marginLeft: 8,
    },

    linha:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: "center",

        width: '95%',

        paddingTop: 10,
        paddingBottom: 3,

        borderTopWidth: 1,
    },

    corCinza:{
        color: "#5F5F5F",
        fontSize: 16,
    },

    kilos:{
        fontWeight: "bold",
    },

    titulo:{
        color: "#BF0404",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 15,
        margin: 26,
    },

    containerPessoa:{
        flexDirection: "row",
        alignItems: "flex-end"
    },

    resultado:{
        fontSize: 30,
        fontWeight: "bold",
        marginRight: 5,

        color: "#F2B705"
    },

    containerInfoEvento:{
        backgroundColor: "#260101",
        padding: 20,
    },

    corBranca:{
        color: "#FFF"
    },

    txt:{
        marginBottom: 5,
        fontSize: 16,
    },

    linhaAmarela:{
        backgroundColor: '#F2B705',
        width: '100%',
        height: 2,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    tituloCusto:{
        color: "green",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
        marginBottom: 5,
    },

    partePrecos:{
        borderWidth: 2,
        borderColor: "green",
        borderRadius: 5,

        flexDirection: "row",

        backgroundColor: "#FFF",
        // justifyContent: "space-between"
    },

    caixaPreco:{
        borderLeftWidth: 2,
        borderLeftColor: "green",
        padding: 5,
        
        width: '33%',
    },

    caixaUm:{
        borderLeftWidth: 0,
    },

    preco:{
        color: "green",
        fontWeight: "bold",
        fontSize: 15,
    },

    txtPreco:{
        textTransform: "capitalize",
    },

    input:{
        backgroundColor: "#FFF",
        marginBottom: 10,
        marginTop: 10,

        borderRadius: 10,
        padding: 5,
    },

    label:{
        color: '#F2B705',
    },

    btn:{
        backgroundColor: '#F2B705',
        width: 180,
        height: 50,

        borderRadius: 10,
        
        alignSelf: 'flex-start',
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 20,
        marginTop: 20,
    }
});

export default estilos;