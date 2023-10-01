import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TextInput } from "react-native"
import { CheckBox } from "react-native-elements";
import editarEvento from "../../services/api/eventos/editarEvento";
import apagarEvento from "../../services/api/eventos/apagarEvento";
import Alerta from "../../components/alerta";

function Evento({ route, navigation }) {

    // VARIÁVEIS PARA CONTROLAR TODOS OS DADOS DO EVENTO
    console.log(`\n\n\n\n------------------------- PARÂMETRO DE ROTAAAAAAS ------------------------\n\n\n\n`)

    console.log(route.params)

    console.log(`\n\n\n\n------------------------- PARÂMETRO DE ROTAAAAAAS ------------------------\n\n\n\n`)

    // INFORMAÇÕES DO ORGANIZADOR DO EVENTO
    const idOrganizador = route.params.idOrganizador;
    const [nomeEvento, setNomeEvento] = useState(route.params.nomeEvento);
    const [qtdHomens, setQtdHomens] = useState(route.params.qtdHomens);
    const [qtdMulheres, setQtdMulheres] = useState(route.params.qtdMulheres);
    const [qtdCriancas, setQtdCriancas] = useState(route.params.qtdCriancas);
    const [endereco, setEndereco] = useState(route.params.endereco);
    const [custoLocal, setCustoLocal] = useState(route.params.custoLocal);
    const [dataEvento, setDataEvento] = useState(route.params.dataEvento);

    // CARNE BOVINA
    const [maminha, setMaminha] = useState(route.params.carnes.bovino.maminha.selecionado);
    const [contraFile, setContraFile] = useState(route.params.carnes.bovino.contraFile.selecionado);
    const [alcatra, setAlcatra] = useState(route.params.carnes.bovino.alcatra.selecionado);

    // CARNE SUÍNA
    const [costela, setCostela] = useState(route.params.carnes.suino.costela.selecionado);
    const [fileSuino, setFileSuino] = useState(route.params.carnes.suino.fileSuino.selecionado);
    const [lombo, setLombo] = useState(route.params.carnes.suino.lombo.selecionado);

    // LINGUÍÇAS
    const [toscana, setToscana] = useState(route.params.carnes.linguicas.toscana.selecionado);
    const [cuiabana, setCuiabana] = useState(route.params.carnes.linguicas.cuiabana.selecionado);
    const [linguicaFrango, setLinguicaFrango] = useState(route.params.carnes.linguicas.linguicaFrango.selecionado);

    // CARNE DE FRANGO
    const [sobrecoxa, setSobrecoxa] = useState(route.params.carnes.frango.sobrecoxa.selecionado);
    const [asa, setAsa] = useState(route.params.carnes.frango.asa.selecionado);
    const [coracao, setCoracao] = useState(route.params.carnes.frango.coracao.selecionado);

    // BEBIDAS
    const [agua, setAgua] = useState(route.params.bebidas.agua.selecionado);
    const [refri, setRefri] = useState(route.params.bebidas.refri.selecionado);
    const [cerveja, setCerveja] = useState(route.params.bebidas.cerveja.selecionado);
    const [suco, setSuco] = useState(route.params.bebidas.suco.selecionado);

    // SUPRIMENTOS
    const [copoDesc, setCopoDesc] = useState(route.params.suprimentos.copoDesc.selecionado);
    const [talheres, setTalheres] = useState(route.params.suprimentos.talheres.selecionado);
    const [prato, setPrato] = useState(route.params.suprimentos.prato.selecionado);
    const [carvao, setCarvao] = useState(route.params.suprimentos.carvao.selecionado);
    const [guardanapos, setGuardanapos] = useState(route.params.suprimentos.guardanapos.selecionado);
    const [palitos, setPalitos] = useState(route.params.suprimentos.palitos.selecionado);

    // ACOMPANHAMENTOS
    const [arroz, setArroz] = useState(route.params.acompanhamentos.arroz.selecionado);
    const [farofa, setFarofa] = useState(route.params.acompanhamentos.farofa.selecionado);
    const [pao, setPao] = useState(route.params.acompanhamentos.pao.selecionado);
    const [paoAlho, setPaoAlho] = useState(route.params.acompanhamentos.paoAlho.selecionado);
    const [vinagrete, setVinagrete] = useState(route.params.acompanhamentos.vinagrete.selecionado);
    const [queijoCoalho, setQueijoCoalho] = useState(route.params.acompanhamentos.queijoCoalho.selecionado);

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
                    selecionado: fileSuino
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
        <ScrollView>
            <Text>Calculadora de churras</Text>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            <Button title="Receitas" onPress={() => navigation.navigate("ListaReceitas")} />
            <Button title="Histórico" onPress={() => navigation.navigate("Historico", route.params)} />
            <Button title="Perfil" onPress={() => navigation.navigate("Perfil", route.params)} />
            <Button title="Sair" onPress={() => navigation.navigate("Login")} />

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

            <Text>Quantidade de Homens</Text>
            <TextInput
                value={String(qtdHomens)}
                onChangeText={(texto) => setQtdHomens(texto)}
                placeholder="Digite a quantidade de homens"
                keyboardType="numeric"
            />

            <Text>Quantidade de Mulheres</Text>
            <TextInput
                value={String(qtdMulheres)}
                onChangeText={(texto) => setQtdMulheres(texto)}
                placeholder="Digite a quantidade de mulheres"
                keyboardType="numeric"
            />

            <Text>Quantidade de Crianças</Text>
            <TextInput
                value={String(qtdCriancas)}
                onChangeText={(texto) => setQtdCriancas(texto)}
                placeholder="Digite a quantidade de crianças"
                keyboardType="numeric"
            />

            <Text>Enderço do evento</Text>
            <TextInput
                value={endereco}
                onChangeText={(texto) => setEndereco(texto)}
                placeholder="Digite o endereço do evento"
            />

            <Text>Informe o custo da locação</Text>
            <TextInput
                value={String(custoLocal)}
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


            <Button title="Editar evento" onPress={async () => {

                

                const resposta = await editarEvento(route.params._id, evento);

                if (resposta.status === 'success') {

                    Alerta("Sucesso!", "Evento editado e salvo com sucesso");
                    navigation.navigate("Resultado", resposta.dados);

                } else {

                    Alerta("Ops! Algo deu errado", resposta.msg);

                }


            }} />

            <Button title="Apagar evento" onPress={async () => {

                const resposta = await apagarEvento(route.params._id);

                if (resposta.status === 'success') {

                    Alerta("Sucesso!", resposta.msg);
                    navigation.navigate("Calculadora", {id: evento.idOrganizador});

                } else {

                    Alerta("Ops! Algo deu errado", resposta.msg);

                }


            }} />
        </ScrollView>

    )
}

export default Evento;