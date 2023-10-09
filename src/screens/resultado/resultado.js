import React, { useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import estilos from "./estilos";
import MapView from "react-native-maps";

function TelaResultado({ route, navigation }) {
    // VARIÁVEIS PARA CONTROLAR TODOS OS DADOS DO EVENTO

    // INFORMAÇÕES DO ORGANIZADOR DO EVENTO
    const idOrganizador = route.params.id;
    const [nomeEvento, setNomeEvento] = useState();
    const [qtdHomens, setQtdHomens] = useState(route.params.qtdHomens);
    const [qtdMulheres, setQtdMulheres] = useState(route.params.qtdMulheres);
    const [qtdCriancas, setQtdCriancas] = useState(route.params.qtdCriancas);
    const [endereco, setEndereco] = useState(route.params.endereco);
    const [custoLocal, setCustoLocal] = useState(route.params.custoLocal);
    const [dataEvento, setDataEvento] = useState(route.params.dataEvento);

    console.log(route.params);

    return (
        <ScrollView>

            {/* CARNE BOVINA */}
            <Text style={estilos.titulo}>Aqui está o resultado do cálculo</Text>

            <View style={estilos.cardapio}>
                <Text style={estilos.tituloCardapio}>Carnes</Text>
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Contra filé</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.bovino.contraFile.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.bovino.contraFile.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Maminha</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.bovino.maminha.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.bovino.maminha.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Alcatra</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.bovino.alcatra.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.bovino.alcatra.precoTotal}</Text> */}
                </View>


                {/* CARNE SUINA */}
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Costela</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.suino.costela.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.suino.costela.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Filé Suino</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.suino.fileSuino.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.suino.fileSuino.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Lombo</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.suino.lombo.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.suino.lombo.precoTotal}</Text> */}
                </View>

                
                {/* LINGUÍÇAS */}
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Toscana</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.linguicas.toscana.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.linguicas.toscana.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Cuiabana</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.linguicas.cuiabana.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.linguicas.cuiabana.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Linguica de Frango</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.linguicas.linguicaFrango.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.linguicas.linguicaFrango.precoTotal}</Text> */}
                </View>

                
                {/* CARNE DE FRANGO */}
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Sobrecoxa</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.frango.sobrecoxa.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.frango.sobrecoxa.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Coração</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.frango.coracao.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.frango.coracao.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Asa</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.carnes.frango.asa.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.carnes.frango.asa.precoTotal}</Text> */}
                </View>
            </View>


            {/* BEBIDAS */}
            <View style={estilos.cardapio}>
                <Text style={estilos.tituloCardapio}>Bebidas</Text>
                
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Água</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.bebidas.agua.qtd.toFixed("2")} L</Text>
                    {/* <Text>R${route.params.bebidas.agua.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Refrigerante</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.bebidas.refri.qtd.toFixed("2")} L</Text>
                    {/* <Text>R${route.params.bebidas.refri.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Cerveja</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.bebidas.cerveja.qtd.toFixed("2")} L</Text>
                    {/* <Text>R${route.params.bebidas.cerveja.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Suco</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.bebidas.suco.qtd.toFixed("2")} L</Text>
                    {/* <Text>R${route.params.bebidas.suco.precoTotal}</Text> */}
                </View>
            </View>

            
            {/* Suprimentos */}
            <View style={estilos.cardapio}>
                <Text style={estilos.tituloCardapio}>Suprimentos</Text>
                
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Copos Descartáveis</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.copoDesc.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.suprimentos.copoDesc.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Talheres Descartáveis</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.talheres.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.suprimentos.talheres.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Pratos Descartáveis</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.prato.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.suprimentos.prato.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Carvão</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.carvao.qtd.toFixed("0")} Kg</Text>
                    {/* <Text>R${route.params.suprimentos.carvao.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Guardanapos</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.guardanapos.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.suprimentos.guardanapos.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Palitos de Dente</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.suprimentos.palitos.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.suprimentos.palitos.precoTotal}</Text> */}
                </View>
            </View>


            {/* ACOMPANHAMENTOS */}
            <View style={estilos.cardapio}>
                <Text style={estilos.tituloCardapio}>Acompanhamentos</Text>
                
                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Arroz</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.arroz.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.acompanhamentos.arroz.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Farofa</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.farofa.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.acompanhamentos.farofa.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Pão</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.pao.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.acompanhamentos.pao.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Pão de Alho</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.paoAlho.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.acompanhamentos.paoAlho.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Vinagrete</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.vinagrete.qtd.toFixed("2")} Kg</Text>
                    {/* <Text>R${route.params.acompanhamentos.vinagrete.precoTotal}</Text> */}
                </View>

                <View style={estilos.linha}>
                    <Text style={[estilos.nomeCarne, estilos.corCinza]}>Queijo Coalho</Text>
                    <Text style={[estilos.kilos, estilos.corCinza]}>{route.params.acompanhamentos.queijoCoalho.qtd.toFixed("0")} UN</Text>
                    {/* <Text>R${route.params.acompanhamentos.queijoCoalho.precoTotal}</Text> */}
                </View>
            </View>

            {/* INFORMAÇÕES DO EVENTO */}
            <View style={estilos.containerInfoEvento}>
                <View>
                    <Text style={[estilos.txt, estilos.corBranca]}>Nome do Evento</Text>
                    <Text style={estilos.resultado}>{route.params.nomeEvento}</Text>
                </View>

                <View style={estilos.linhaAmarela}></View>

                <View style={estilos.containerPessoa}>
                    <Text style={estilos.resultado}>{route.params.qtdHomens}</Text>
                    <Text style={[estilos.txt, estilos.corBranca]}>Homens</Text>
                </View>

                <View style={estilos.containerPessoa}>
                    <Text style={estilos.resultado}>{route.params.qtdMulheres}</Text>
                    <Text style={[estilos.txt, estilos.corBranca]}>Mulheres</Text>
                </View>

                <View style={estilos.containerPessoa}>
                    <Text style={estilos.resultado}>{route.params.qtdCriancas}</Text>
                    <Text style={[estilos.txt, estilos.corBranca]}>Crianças</Text>
                </View>

                <View style={estilos.linhaAmarela}></View>

                    <View style={estilos.input}>
                        <Text style={estilos.label}>Endereço do evento</Text>
                        <Text>{route.params.endereco}</Text>
                    </View>

                    <MapView style={estilos.mapa}/>

                    <View style={estilos.input}>
                        <Text style={estilos.label}>Data do evento</Text>
                        <Text>{route.params.dataEvento}</Text>
                    </View>

                <View style={estilos.linhaAmarela}></View>

                <Text style={estilos.tituloCusto}>Custo</Text>
                <View style={estilos.partePrecos}>
                    <View style={[estilos.caixaPreco, estilos.caixaUm]}>
                        <Text style={estilos.txtPreco}>locação</Text>
                        <Text style={estilos.preco}>R${route.params.custoLocal.toFixed("2")}</Text>
                    </View>

                    <View style={estilos.caixaPreco}>
                        <Text style={estilos.txtPreco}>individual</Text>
                        <Text style={estilos.preco}>R${route.params.custoPessoa.toFixed("2")}</Text>
                    </View>

                    <View style={estilos.caixaPreco}>
                        <Text style={estilos.txtPreco}>total</Text>
                        <Text style={estilos.preco}>R${route.params.custoTotal.toFixed("2")}</Text>
                    </View>
                </View>

                <TouchableOpacity style={estilos.btn} onPress={() => {

                    navigation.navigate('Calculadora', { id: route.params.idOrganizador });

                }}><Text>Voltar</Text></TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default TelaResultado;

