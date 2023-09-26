import React from "react";
import { View, Text, Button } from "react-native";

function TelaReceita({ route, navigation }){
    const {id, nome, ingredientes, molho, preparo} = route.params


    
    return(
        <View>
            <Text>{nome}</Text>

            {
                ingredientes&&ingredientes.map((item) => <Text key={Math.random()} >{item}</Text>)
                
            }

            <Text>{JSON.stringify(preparo)}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default TelaReceita