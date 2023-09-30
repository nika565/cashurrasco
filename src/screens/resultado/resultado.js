import React, { useState } from "react";
import { Text, Button, ScrollView, TextInput } from "react-native"
import { CheckBox } from "react-native-elements";
import criarEvento from "../../services/api/eventos/criarEvento";
import Alerta from "../../components/alerta";

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

    // Objeto que vai para op back-end salvar o evento
    // const evento = {
    //     idOrganizador: idOrganizador,
    //     nomeEvento: nomeEvento,
    //     qtdHomens: Number(qtdHomens),
    //     qtdMulheres: Number(qtdMulheres),
    //     qtdCriancas: Number(qtdCriancas),
    //     endereco: endereco,
    //     custoLocal: Number(custoLocal),
    //     dataEvento: dataEvento,

    //     carnes: {

    //         bovino: {

    //             contraFile: {
    //                 selecionado: contraFile
    //             },

    //             maminha: {
    //                 selecionado: maminha
    //             },

    //             alcatra: {
    //                 selecionado: alcatra
    //             }

    //         },

    //         suino: {

    //             costela: {
    //                 selecionado: costela
    //             },

    //             fileSuino: {
    //                 selcionado: fileSuino
    //             },

    //             lombo: {
    //                 selecionado: lombo
    //             }

    //         },

    //         frango: {

    //             sobrecoxa: {
    //                 selecionado: sobrecoxa
    //             },

    //             coracao: {
    //                 selecionado: coracao
    //             },

    //             asa: {
    //                 selecionado: asa
    //             }

    //         },

    //         linguicas: {

    //             toscana: {
    //                 selecionado: toscana
    //             },

    //             cuiabana: {
    //                 selecionado: cuiabana
    //             },

    //             linguicaFrango: {
    //                 selecionado: linguicaFrango
    //             }

    //         }

    //     },

    //     bebidas: {

    //         agua: {
    //             selecionado: agua
    //         },

    //         refri: {
    //             selecionado: refri
    //         },

    //         cerveja: {
    //             selecionado: cerveja
    //         },

    //         suco: {
    //             selecionado: suco
    //         }

    //     },

    //     suprimentos: {

    //         copoDesc: {
    //             selecionado: copoDesc
    //         },

    //         talheres: {
    //             selecionado: talheres
    //         },

    //         prato: {
    //             selecionado: prato
    //         },

    //         carvao: {
    //             selecionado: carvao
    //         },

    //         guardanapos: {
    //             selecionado: guardanapos
    //         },

    //         palitos: {
    //             selecionado: palitos
    //         }

    //     },

    //     acompanhamentos: {

    //         arroz: {
    //             selecionado: arroz
    //         },

    //         farofa: {
    //             selecionado: farofa
    //         },

    //         pao: {
    //             selecionado: pao
    //         },

    //         paoAlho: {
    //             selecionado: paoAlho
    //         },

    //         vinagrete: {
    //             selecionado: vinagrete
    //         },

    //         queijoCoalho: {
    //             selecionado: queijoCoalho
    //         }

    //     }

    // }

    return (
        <ScrollView>
            <Text>Calculadora de churras</Text>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            {/* <Button title="Receitas" onPress={() => navigation.navigate("ListaReceitas")} />
            <Button title="Histórico" onPress={() => navigation.navigate("Historico", route.params)} />
            <Button title="Perfil" onPress={() => navigation.navigate("Perfil", route.params)} />
            <Button title="Sair" onPress={() => navigation.navigate("Login")} /> */}


            {/* CARNE BOVINA */}
            <Text>Carne bovina</Text>

            <Text>Contra filé: Qtd:{route.params.carnes.bovino.contraFile.qtd} Preço total:{route.params.carnes.bovino.contraFile.precoTotal}</Text>

            <Text>Maminha: Qtd:{route.params.carnes.bovino.maminha.qtd} Preço total:{route.params.carnes.bovino.maminha.precoTotal}</Text>

            <Text>Alcatra: Qtd:{route.params.carnes.bovino.alcatra.qtd} Preço total:{route.params.carnes.bovino.alcatra.precoTotal}</Text>


            {/* CARNE SUINA */}
            <Text>Carne suína</Text>

            <Text>Costela: Qtd:{route.params.carnes.suino.costela.qtd} Preço total:{route.params.carnes.suino.costela.precoTotal}</Text>
        
            <Text>Filé Suino: Qtd:{route.params.carnes.suino.fileSuino.qtd} Preço total:{route.params.carnes.suino.fileSuino.precoTotal}</Text>


            <Text>Lombo: Qtd:{route.params.carnes.suino.lombo.qtd} Preço total:{route.params.carnes.suino.lombo.precoTotal}</Text>


            {/* LINGUÍÇAS */}
            <Text>Linguícas</Text>

            <Text>Toscana: Qtd:{route.params.carnes.linguicas.toscana.qtd} Preço total:{route.params.carnes.linguicas.toscana.precoTotal}</Text>

        
            <Text>Cuiabana: Qtd:{route.params.carnes.linguicas.cuiabana.qtd} Preço total:{route.params.carnes.linguicas.cuiabana.precoTotal}</Text>

            
            <Text>Linguica de Frango: Qtd:{route.params.carnes.linguicas.linguicaFrango.qtd} Preço total:{route.params.carnes.linguicas.linguicaFrango.precoTotal}</Text>



            {/* CARNE DE FRANGO */}
            <Text>Frango</Text>

            <Text>Sobrecoxa: Qtd:{route.params.carnes.frango.sobrecoxa.qtd} Preço total:{route.params.carnes.frango.sobrecoxa.precoTotal}</Text>

            <Text>Coração: Qtd:{route.params.carnes.frango.coracao.qtd} Preço total:{route.params.carnes.frango.coracao.precoTotal}</Text>

            <Text>Asa: Qtd:{route.params.carnes.frango.asa.qtd} Preço total:{route.params.carnes.frango.asa.precoTotal}</Text>


            {/* BEBDIDAS */}
            <Text>Bebidas</Text>
            
            <Text>Água: Qtd:{route.params.bebidas.agua.qtd} Preço total:{route.params.bebidas.agua.precoTotal}</Text>


            <Text>Refrigerante: Qtd:{route.params.bebidas.refri.qtd} Preço total:{route.params.bebidas.refri.precoTotal}</Text>

            
            <Text>Cerveja: Qtd:{route.params.bebidas.cerveja.qtd} Preço total:{route.params.bebidas.cerveja.precoTotal}</Text>

            <Text>Suco: Qtd:{route.params.bebidas.suco.qtd} Preço total:{route.params.bebidas.suco.precoTotal}</Text>


            {/* Suprimentos */}
            <Text>Suprimentos</Text>
            
            <Text>Copo Descartável: Qtd:{route.params.suprimentos.copoDesc.qtd} Preço total:{route.params.suprimentos.copoDesc.precoTotal}</Text>

            <Text>Talheres Descartáveis: Qtd:{route.params.suprimentos.talheres.qtd} Preço total:{route.params.suprimentos.talheres.precoTotal}</Text>

            <Text>Prato Descartável: Qtd:{route.params.suprimentos.prato.qtd} Preço total:{route.params.suprimentos.prato.precoTotal}</Text>

            <Text>Carvão: Qtd:{route.params.suprimentos.carvao.qtd} Preço total:{route.params.suprimentos.carvao.precoTotal}</Text>

            <Text>Guardanapos: Qtd:{route.params.suprimentos.guardanapos.qtd} Preço total:{route.params.suprimentos.guardanapos.precoTotal}</Text>

            <Text>Palitos de Dente: Qtd:{route.params.suprimentos.palitos.qtd} Preço total:{route.params.suprimentos.palitos.precoTotal}</Text>


            {/* ACOMPANHAMENTOS */}
            <Text>Acompanhamentos</Text>

            <Text>Arroz: Qtd:{route.params.acompanhamentos.arroz.qtd} Preço total:{route.params.acompanhamentos.arroz.precoTotal}</Text>

            <Text>Farofa: Qtd:{route.params.acompanhamentos.farofa.qtd} Preço total:{route.params.acompanhamentos.farofa.precoTotal}</Text>

            <Text>Pão: Qtd:{route.params.acompanhamentos.pao.qtd} Preço total:{route.params.acompanhamentos.pao.precoTotal}</Text>

            <Text>Pão de Alho: Qtd:{route.params.acompanhamentos.paoAlho.qtd} Preço total:{route.params.acompanhamentos.paoAlho.precoTotal}</Text>

            <Text>Vinagrete: Qtd:{route.params.acompanhamentos.vinagrete.qtd} Preço total:{route.params.acompanhamentos.vinagrete.precoTotal}</Text>

            <Text>Queijo Coalho: Qtd:{route.params.acompanhamentos.queijoCoalho.qtd} Preço total:{route.params.acompanhamentos.queijoCoalho.precoTotal}</Text>


            {/* INFORMAÇÕES DO EVENTO */}
            <Text>Nome do Evento</Text>
            <Text>{route.params.nomeEvento}</Text>

            <Text>Quantidade de Homens</Text>
            <Text>{route.params.qtdHomens}</Text>

            <Text>Quantidade de Mulheres</Text>
            <Text>{route.params.qtdMulheres}</Text>

            <Text>Quantidade de Crianças</Text>
            <Text>{route.params.qtdCriancas}</Text>

            <Text>Enderço do evento</Text>
            <Text>{route.params.endereco}</Text>

            <Text>Informe o custo da locação</Text>
            <Text>{route.params.custoLocal}</Text>

            <Text>Data do evento</Text>
            <Text>{route.params.dataEvento}</Text>

            <Text>Custo individual</Text>
            <Text>{route.params.custoPessoa}</Text>

            <Text>Custo individual</Text>
            <Text>{route.params.custoTotal}</Text>

            <Button title="Voltar" onPress={() => {

                navigation.navigate('Calculadora', { id: route.params.idOrganizador });

            }} />
        </ScrollView>

    )
}

export default TelaResultado;

