import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { CheckBox } from "react-native-elements";
import editarEvento from "../../services/api/eventos/editarEvento";
import apagarEvento from "../../services/api/eventos/apagarEvento";
import Alerta from "../../components/alerta";
import estilos from "./estilos";
import buscarEvento from "../../services/api/eventos/buscarEvento";

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
    const [custoLocal, setCustoLocal] = useState(String(route.params.custoLocal));
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

        <ScrollView style={estilos.tela}>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            <View style={estilos.areaBotao}>
                <TouchableOpacity style={estilos.btnNav} onPress={() => navigation.navigate("Historico", route.params)}><Text style={estilos.btnNavTxt}>Histórico</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.btnNav} onPress={() => navigation.navigate("Perfil", route.params)}><Text style={estilos.btnNavTxt}>Perfil</Text></TouchableOpacity>
            </View>
            
            <Text style={estilos.tituloVermelho}>Opções selecionadas do seu evento</Text>

            <View style={estilos.containerQtdPessoa}>
                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Homens</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={String(qtdHomens)}
                        onChangeText={(texto) => setQtdHomens(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>

                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Mulheres</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={String(qtdMulheres)}
                        onChangeText={(texto) => setQtdMulheres(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>

                <View style={estilos.fieldset}>
                    <Text style={estilos.fieldsetLabel}>Crianças</Text>
                    <TextInput
                        style={estilos.fieldsetInput}
                        value={String(qtdCriancas)}
                        onChangeText={(texto) => setQtdCriancas(texto)}
                        placeholder=""
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={estilos.linhaMarrom}></View>

            <Text style={estilos.tituloVermelho}>Carnes</Text>

            {/* CARNE BOVINA */}
            <Text style={estilos.subtitulo}>Carne bovina</Text>
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
            <Text style={estilos.subtitulo}>Carne suína</Text>
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
            <Text style={estilos.subtitulo}>Linguícas</Text>
            <CheckBox
                style={estilos.checkbox}
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
            <Text style={estilos.subtitulo}>Frango</Text>
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

            <View style={estilos.linhaMarrom}></View>

            {/* BEBDIDAS */}
            <Text style={estilos.tituloVermelho}>Bebidas</Text>
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

            <View style={estilos.linhaMarrom}></View>

            {/* Suprimentos */}
            <Text style={estilos.tituloVermelho}>Suprimentos</Text>
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

            <View style={estilos.linhaMarrom}></View>

            {/* ACOMPANHAMENTOS */}
            <Text style={estilos.tituloVermelho}>Acompanhamentos</Text>
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
            <View style={estilos.footer}>

                <Text style={estilos.tituloAmarelo}>Mais informações</Text>

                <View style={estilos.containerEvento}>
                    <View style={estilos.inputTotal}>
                        <Text style={estilos.label}>Nome do Evento</Text>
                        <TextInput
                            style={estilos.input}
                            value={nomeEvento}
                            onChangeText={(texto) => setNomeEvento(texto)}
                            placeholder="Digite o nome do evento"

                        />
                    </View>

                    <View style={estilos.inputTotal}>
                        <Text style={estilos.label}>Endereço do evento</Text>
                        <TextInput
                            style={estilos.input}
                            value={endereco}
                            onChangeText={(texto) => setEndereco(texto)}
                            placeholder="Digite o endereço do evento"
                        />
                    </View>

                    <View style={estilos.inputTotal}>
                        <Text style={estilos.label}>Informe o custo da locação</Text>
                        <TextInput
                            style={estilos.input}
                            value={String(custoLocal)}
                            onChangeText={(texto) => setCustoLocal(texto)}
                            placeholder="Informe o custo do local do churrasco"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={estilos.inputTotal}>
                        <Text style={estilos.label}>Data do evento</Text>
                        <TextInput
                            style={estilos.input}
                            value={dataEvento}
                            onChangeText={(texto) => setDataEvento(texto)}
                            placeholder="Informe a data do evento"

                        />
                    </View>

                    <TouchableOpacity style={estilos.btnVer} onPress={async () => {



                        const resposta = await buscarEvento(route.params._id);

                        if (resposta.status === 'success') {

                            navigation.navigate("Resultado", resposta.evento);

                        } else {

                            Alerta("Ops! Algo deu errado", resposta.msg);

                        }


                    }} ><Text style={estilos.txtSalvar}>Ver resultados</Text></TouchableOpacity>

                    <TouchableOpacity style={estilos.btnEditar} onPress={async () => {



                        const resposta = await editarEvento(route.params._id, evento);

                        if (resposta.status === 'success') {

                            Alerta("Sucesso!", "Evento editado e salvo com sucesso");
                            navigation.navigate("Resultado", resposta.dados);

                        } else {

                            Alerta("Ops! Algo deu errado", resposta.msg);

                        }


                    }} ><Text style={estilos.txtSalvar}>Editar evento</Text></TouchableOpacity>

                    <TouchableOpacity style={estilos.btnApagar} onPress={async () => {

                        const resposta = await apagarEvento(route.params._id);

                        if (resposta.status === 'success') {

                            Alerta("Sucesso!", resposta.msg);
                            navigation.navigate("Calculadora", { id: idOrganizador });

                        } else {

                            Alerta("Ops! Algo deu errado", resposta.msg);

                        }


                    }} ><Text style={estilos.txtSalvar}>Apagar evento</Text></TouchableOpacity>


                </View>
            </View>
        </ScrollView>

    )
}



export default Evento;