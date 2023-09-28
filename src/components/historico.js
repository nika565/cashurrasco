import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import todosEventos from '../services/api/eventos/todosEventos'

const Historico = () => {
    const [data, setData] = useState(''); // Estado para armazenar todos os eventos
    const [error, setError] = useState(''); // Estado para armazenar mensagens de erro

    // ID do usuário logado (Exemplo fictício por enquanto)
    const idUsuario = '6513321d06aa79d0991825ca'

    useEffect(() => {
        async function fetchData() {

            // Pegando todos os dados da API
            const dadosApi = await todosEventos(idUsuario);

            if (dadosApi.status === 'error') {
                alert(dadosApi.msg);
                setError(dadosApi.msg); // Define a mensagem de erro no estado
            } else {
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

export default Historico;
