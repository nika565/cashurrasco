import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    card: {
        backgroundColor: '#F27405',
        padding: 15,
        width: '100%',
        borderRadius: 10,
        gap: 5,
        marginVertical: 20
    },

    titulo: {
        padding: 10,
        color: '#F27405',
        alignSelf: 'center',
        fontSize: 22,
        margin: 15
    },

    btn: {
        backgroundColor: '#260101',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15
    },

    btnTexto: {
        color: '#fff',
        fontSize: 14
    },

    btnRecarregar: {
        backgroundColor: '#F27405',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        margin: 5,
    }

});

export default estilos;
