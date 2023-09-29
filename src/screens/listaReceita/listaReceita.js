import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";

function TelaListaReceitas({ navigation }){
    return(
        <ScrollView style="estilos.tela">
            <Text>Receitas</Text>

            <TouchableOpacity style={estilos.botaoReceita} onPress={() => navigation.navigate("Receita",
                {
                    nome: "Frango de churrasco na brasa",
                    ingredientes: ["1 frango aberto ao meio", "2 dentes de alho esmagados", "1 colher de sopa de azeite", "1 colher de chá de pimentão doce", "1 colher de chá de piripiri em pó (pimenta caiena)", "Sumo de meio de limão", "Sal a gosto"],
                    molho: ["MOLHO", "50 ml de óleo vegeta", "1 colher de chá de piripiri em pó", "1 colher de chá de pimentão doce", "2 dentes de alho esmagados", "25 ml de cerveja", "Pimenta a gosto", "sumo de meio limão", "1 folha de louro", "sal a gosto"],
                    preparo: ["Primeiro, deve fazer o molho de churrasco: esmague os dentes de alho e junte o piripiri, o óleo, o pimentão, o sumo de limão, o louro e a cerveja. Tempere de sal e pimenta a seu gosto e envolta bem toda a mistura.", "Prepare o frango na marinada: esmague o alho e junte o azeite, o sumo de limão, o pimentão doce, o piripiri e o sal. Envolva tudo muito bem e barra todo o frango com este preparado. Deixe marinar durante cerca de 1h.", "Prepare as brasas para assar. Quando estiverem prontas, disponha o frango sobre uma grelha e coloque sobre as brasas.", "Enquanto grelha, vá pincelando o frango com o molho e vire-o de modo a que fique bem dourado por igual. Quando estiver bem dourado e assado, retire e corte em pedaços. Sirva de imediato."],
                }
            )}>
                <Image source={{uri: 'https://www.colherdepau.net/wp-content/uploads/2021/03/26219596_174952219904944_3535145634622898468_n.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Frango à portuguesa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita} onPress={() => navigation.navigate("Receita",
                {
                    id: 1,
                    nome: "a",
                    ingredientes: "e",
                    molho: "i",
                    preparo: "o",
                }
            )}>
                <Image source={{uri: 'https://s2-receitas.glbimg.com/X4ml6XBTOVnqH8KW57eBfGBs-Oc=/0x0:984x648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/Q/B/BHy7kUR0CN7EiUaccsZQ/picanha-no-espeto.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Picanha na brasa</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita} onPress={() => navigation.navigate("Receita",
                {
                    id: 1,
                    nome: "a",
                    ingredientes: "e",
                    molho: "i",
                    preparo: "o",
                }
            )}>
                <Image source={{uri: 'https://www.comidaereceitas.com.br/wp-content/uploads/2013/11/Paleta-de-porco-assada1.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Paleta suína com pimenta</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoReceita} onPress={() => navigation.navigate("Receita")}>
                <Image source={{uri: 'https://www.minhareceita.com.br/app/uploads/2021/04/shutterstock_1659060670-1.jpg'}} style={estilos.imagemReceita} />
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoReceita}>Linguiça na brasa</Text>
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