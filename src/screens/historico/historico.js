import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import todosEventos from '../../services/api/eventos/todosEventos'
import buscarEvento from '../../services/api/eventos/buscarEvento'
import Alerta from '../../components/alerta'
import estilos from './estilos';

const TelaHistorico = ({ route, navigation }) => {
    const [data, setData] = useState(''); // Estado para armazenar todos os eventos
    const [error, setError] = useState(''); // Estado para armazenar mensagens de erro


    useEffect(() => {
        async function fetchData() {

            // Pegando todos os dados da API
            const dadosApi = await todosEventos(route.params.id);

            // console.log(dadosApi)

            if (dadosApi.status === 'error') {
                alert(dadosApi.msg);
                setError(dadosApi.msg); // Define a mensagem de erro no estado
            } else {

                if (dadosApi.eventos.length == 0) {
                    Alerta("Ops!", "Você não tem nehum evento cadastrado...");
                    navigation.navigate('Calculadora', route.params)
                }

                setData(dadosApi.eventos); // Pega o array de eventos
            }
        }

        fetchData();
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            <View style={estilos.card}>
                {console.log(item._id)}
                <Text style={estilos.btnTexto}>Nome do Evento: {item.nomeEvento}</Text>
                <Text style={estilos.btnTexto}>Quantidade de Pessoas: {item.qtdHomens + item.qtdMulheres + item.qtdCriancas}</Text>
                <Text style={estilos.btnTexto}>Endereço: {item.endereco}</Text>
                <Text style={estilos.btnTexto}>Custo Total: {item.custoTotal}</Text>
                <TouchableOpacity style={estilos.btn} onPress={async () => {


                    const evento = await buscarEvento(item._id)

                    navigation.navigate('Evento', evento.evento)
                }} ><Text style={estilos.btnTexto}>Ver Mais</Text></TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ padding: 10, backgroundColor: '#260101', height: '100%' }} >
            {error ? ( // Verifica se há uma mensagem de erro
                <Text style={estilos.titulo}>Mensagem de Erro: {error}</Text>
            ) : (
                <View style={{ backgroundColor: '#260101' }}>
                    <Text style={estilos.titulo}>Histórico de eventos</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={renderItem}
                        style={{height: '100%'}}

                    />
                </View>
            )}
        </View>
    );
}

export default TelaHistorico;
