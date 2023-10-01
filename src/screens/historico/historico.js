import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import todosEventos from '../../services/api/eventos/todosEventos'
import buscarEvento from '../../services/api/eventos/buscarEvento'
import Alerta from '../../components/alerta'

const TelaHistorico = ({route, navigation}) => {
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
    }, []); // A lista de dependências vazia garante que isso será executado apenas uma vez

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>Nome do Evento: {item.nomeEvento}</Text>
                <Text>ID do Organizador: {item.idOrganizador}</Text>
                <Text>Custo Total: {item.custoTotal}</Text>
                <Button title='Ver mais' onPress={async () => {

                    const evento = await buscarEvento(item._id)

                    

                    navigation.navigate('Evento', evento.evento)
                }} />
            </View>
        );
    }

    return (
        <View>
            {error ? ( // Verifica se há uma mensagem de erro
                <Text>Mensagem de Erro: {error}</Text>
            ) : (
                <>
                    <Text>Sua FlatList com dados da API:</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={renderItem}
                    />
                </>
            )}
        </View>
    );
}

export default TelaHistorico;
