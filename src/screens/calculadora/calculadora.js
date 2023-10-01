import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TextInput, StyleSheet } from "react-native"
import { CheckBox } from "react-native-elements";
import criarEvento from "../../services/api/eventos/criarEvento";
import Alerta from "../../components/alerta";

import estilos from "./estilos";

function TelaCalculadora({ route, navigation }) {

    // VARIÁVEIS PARA CONTROLAR TODOS OS DADOS DO EVENTO

    // LEMBRETE -> fAZER O useEffect

    // INFORMAÇÕES DO ORGANIZADOR DO EVENTO
    const idOrganizador = route.params.id || route.params.idOrganizador;
    const [nomeEvento, setNomeEvento] = useState('');
    const [qtdHomens, setQtdHomens] = useState('');
    const [qtdMulheres, setQtdMulheres] = useState('');
    const [qtdCriancas, setQtdCriancas] = useState('');
    const [endereco, setEndereco] = useState('');
    const [custoLocal, setCustoLocal] = useState('');
    const [dataEvento, setDataEvento] = useState('');

    // CARNE BOVINA
    const [maminha, setMaminha] = useState(false);
    const [contraFile, setContraFile] = useState(false);
    const [alcatra, setAlcatra] = useState(false);

    // CARNE SUÍNA
    const [costela, setCostela] = useState(false);
    const [fileSuino, setFileSuino] = useState(false);
    const [lombo, setLombo] = useState(false);

    // LINGUÍÇAS
    const [toscana, setToscana] = useState(false);
    const [cuiabana, setCuiabana] = useState(false);
    const [linguicaFrango, setLinguicaFrango] = useState(false);

    // CARNE DE FRANGO
    const [sobrecoxa, setSobrecoxa] = useState(false);
    const [asa, setAsa] = useState(false);
    const [coracao, setCoracao] = useState(false);

    // BEBIDAS
    const [agua, setAgua] = useState(false);
    const [refri, setRefri] = useState(false);
    const [cerveja, setCerveja] = useState(false);
    const [suco, setSuco] = useState(false);

    // SUPRIMENTOS
    const [copoDesc, setCopoDesc] = useState(false);
    const [talheres, setTalheres] = useState(false);
    const [prato, setPrato] = useState(false);
    const [carvao, setCarvao] = useState(false);
    const [guardanapos, setGuardanapos] = useState(false);
    const [palitos, setPalitos] = useState(false);

    // ACOMPANHAMENTOS
    const [arroz, setArroz] = useState(false);
    const [farofa, setFarofa] = useState(false);
    const [pao, setPao] = useState(false);
    const [paoAlho, setPaoAlho] = useState(false);
    const [vinagrete, setVinagrete] = useState(false);
    const [queijoCoalho, setQueijoCoalho] = useState(false);

    // Objeto que vai para op back-end salvar o evento
    const evento = {
        idOrganizador: idOrganizador,
        nomeEvento: nomeEvento,
        qtdHomens: Number(qtdHomens),
        qtdMulheres: Number(qtdMulheres),
        qtdCriancas: Number(qtdCriancas),
        endereco: endereco,
        custoLocal: Number(custoLocal),
        dataEvento: dataEvento,

        carnes: {

            bovino: {

                contraFile: {
                    selecionado: contraFile
                },

                maminha: {
                    selecionado: maminha
                },

                alcatra: {
                    selecionado: alcatra
                }

            },

            suino: {

                costela: {
                    selecionado: costela
                },

                fileSuino: {
                    selcionado: fileSuino
                },

                lombo: {
                    selecionado: lombo
                }

            },

            frango: {

                sobrecoxa: {
                    selecionado: sobrecoxa
                },

                coracao: {
                    selecionado: coracao
                },

                asa: {
                    selecionado: asa
                }

            },

            linguicas: {

                toscana: {
                    selecionado: toscana
                },

                cuiabana: {
                    selecionado: cuiabana
                },

                linguicaFrango: {
                    selecionado: linguicaFrango
                }

            }

        },

        bebidas: {

            agua: {
                selecionado: agua
            },

            refri: {
                selecionado: refri
            },

            cerveja: {
                selecionado: cerveja
            },

            suco: {
                selecionado: suco
            }

        },

        suprimentos: {

            copoDesc: {
                selecionado: copoDesc
            },

            talheres: {
                selecionado: talheres
            },

            prato: {
                selecionado: prato
            },

            carvao: {
                selecionado: carvao
            },

            guardanapos: {
                selecionado: guardanapos
            },

            palitos: {
                selecionado: palitos
            }

        },

        acompanhamentos: {

            arroz: {
                selecionado: arroz
            },

            farofa: {
                selecionado: farofa
            },

            pao: {
                selecionado: pao
            },

            paoAlho: {
                selecionado: paoAlho
            },

            vinagrete: {
                selecionado: vinagrete
            },

            queijoCoalho: {
                selecionado: queijoCoalho
            }

        }

    }

    return (
        <ScrollView style={estilos.tela}>
            <Text>Calculadora de churras</Text>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            <Button title="Receitas" onPress={() => navigation.navigate("ListaReceitas")} />
            <Button title="Histórico" onPress={() => navigation.navigate("Historico", route.params)} />
            <Button title="Perfil" onPress={() => navigation.navigate("Perfil", route.params)} />
            <Button title="Sair" onPress={() => navigation.navigate("Login")} />

            <Text>Quantas pessoas vão ao churrasco?</Text>

            <View style={estilos.containerQtdPessoa}>
                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Homens</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={qtdHomens}
                        onChangeText={(texto) => setQtdHomens(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>

                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Mulheres</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={qtdMulheres}
                        onChangeText={(texto) => setQtdMulheres(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>

                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Crianças</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={qtdCriancas}
                        onChangeText={(texto) => setQtdCriancas(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={estilos.linhaMarrom}></View>

            <Text>Carnes</Text>

            {/* CARNE BOVINA */}
            <Text>Carne bovina</Text>
            <CheckBox
                title="Contra-filé"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={contraFile}
                onPress={() => setContraFile(!contraFile)}
            />

            <CheckBox
                title="Maminha"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={maminha}
                onPress={() => setMaminha(!maminha)}
            />

            <CheckBox
                title="Alcatra"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={alcatra}
                onPress={() => setAlcatra(!alcatra)}
            />


            {/* CARNE SUINA */}
            <Text>Carne suína</Text>
            <CheckBox
                title="Costela"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={costela}
                onPress={() => setCostela(!costela)}
            />

            <CheckBox
                title="Filé suino"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={fileSuino}
                onPress={() => setFileSuino(!fileSuino)}
            />

            <CheckBox
                title="Lombo"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={lombo}
                onPress={() => setLombo(!lombo)}
            />


            {/* LINGUÍÇAS */}
            <Text>Linguícas</Text>
            <CheckBox
                title="Linguíça Toscana"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={toscana}
                onPress={() => setToscana(!toscana)}
            />

            <CheckBox
                title="Linguíça Cuiabana"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={cuiabana}
                onPress={() => setCuiabana(!cuiabana)}
            />

            <CheckBox
                title="Linguíça de Frango"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={linguicaFrango}
                onPress={() => setLinguicaFrango(!linguicaFrango)}
            />



            {/* CARNE DE FRANGO */}
            <Text>Frango</Text>
            <CheckBox
                title="Sobrecoxa"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={sobrecoxa}
                onPress={() => setSobrecoxa(!sobrecoxa)}
            />

            <CheckBox
                title="Coração"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={coracao}
                onPress={() => setCoracao(!coracao)}
            />

            <CheckBox
                title="Asa"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={asa}
                onPress={() => setAsa(!asa)}
            />



            {/* BEBDIDAS */}
            <Text>Bebidas</Text>
            <CheckBox
                title="Água"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={agua}
                onPress={() => setAgua(!agua)}
            />

            <CheckBox
                title="Refrigerante"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={refri}
                onPress={() => setRefri(!refri)}
            />

            <CheckBox
                title="Cerveja"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={cerveja}
                onPress={() => setCerveja(!cerveja)}
            />

            <CheckBox
                title="Suco"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={suco}
                onPress={() => setSuco(!suco)}
            />



            {/* Suprimentos */}
            <Text>Suprimentos</Text>
            <CheckBox
                title="Copo Descartável"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={copoDesc}
                onPress={() => setCopoDesc(!copoDesc)}
            />

            <CheckBox
                title="Talheres Descartáveis"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={talheres}
                onPress={() => setTalheres(!talheres)}
            />

            <CheckBox
                title="Prato Descartável"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={prato}
                onPress={() => setPrato(!prato)}
            />

            <CheckBox
                title="Carvão"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={carvao}
                onPress={() => setCarvao(!carvao)}
            />

            <CheckBox
                title="Guardanapos"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={guardanapos}
                onPress={() => setGuardanapos(!guardanapos)}
            />

            <CheckBox
                title="Palitos de dente"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={palitos}
                onPress={() => setPalitos(!palitos)}
            />


            {/* ACOMPANHAMENTOS */}
            <Text>Acompanhamentos</Text>
            <CheckBox
                title="Arroz"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={arroz}
                onPress={() => setArroz(!arroz)}
            />

            <CheckBox
                title="Farofa"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={farofa}
                onPress={() => setFarofa(!farofa)}
            />

            <CheckBox
                title="Pão"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={pao}
                onPress={() => setPao(!pao)}
            />

            <CheckBox
                title="Pão de alho"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={paoAlho}
                onPress={() => setPaoAlho(!paoAlho)}
            />

            <CheckBox
                title="Vinagrete"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={vinagrete}
                onPress={() => setVinagrete(!vinagrete)}
            />

            <CheckBox
                title="Queijo Coalho"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={queijoCoalho}
                onPress={() => setQueijoCoalho(!queijoCoalho)}
            />


            {/* INFORMAÇÕES DO EVENTO */}
            <Text>Nome do Evento</Text>
            <TextInput
                value={nomeEvento}
                onChangeText={(texto) => setNomeEvento(texto)}
                placeholder="Digite o nome do evento"
            />


            <Text>Enderço do evento</Text>
            <TextInput
                value={endereco}
                onChangeText={(texto) => setEndereco(texto)}
                placeholder="Digite o endereço do evento"
            />

            <Text>Informe o custo da locação</Text>
            <TextInput
                value={custoLocal}
                onChangeText={(texto) => setCustoLocal(texto)}
                placeholder="Informe o custo do local do churrasco"
                keyboardType="numeric"
            />

            <Text>Data do evento</Text>
            <TextInput
                value={dataEvento}
                onChangeText={(texto) => setDataEvento(texto)}
                placeholder="Informe o custo do local do churrasco"
                
            />


            <Button title="Calcular e salvar" onPress={async () => {

                const resposta = await criarEvento(evento);

                if (resposta.status === 'success') {

                    Alerta("Sucesso!", "Evento calculado e salvo com sucesso");
                    navigation.navigate("Resultado", resposta.dados);

                } else {

                    Alerta("Ops! Algo deu errado", resposta.msg);

                }
            }} />
        </ScrollView>
    )
}

export default TelaCalculadora