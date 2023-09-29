import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native"
import { CheckBox } from "react-native-elements";

function TelaCalculadora({ route, navigation }) {

    // State para meu checkbox
    const [isChecked, setCheked] = useState(false);

    return (
        <View>
            <Text>Calculadora de churras</Text>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            <Button title="Receitas" onPress={() => navigation.navigate("ListaReceitas")} />
            <Button title="Histórico" onPress={() => navigation.navigate("Historico", route.params)} />
            <Button title="Perfil" onPress={() => navigation.navigate("Perfil", route.params)} />
            <Button title="Sair" onPress={() => navigation.navigate("Login")} />

            {/* Esse botão vai ficar no final da página */}
            <Button title="Calcular" onPress={() => navigation.navigate("Resultado")} />

            <CheckBox
                title="Boi"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={isChecked}
                onPress={() => setCheked(!isChecked)}
            />

            <CheckBox
                title="Porco"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={isChecked}
                onPress={() => setCheked(!isChecked)}
            />

            <CheckBox
                title="Galinha"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="orange"
                checked={isChecked}
                onPress={() => setCheked(!isChecked)}
            />

            <Button title="Teste" onPress={console.log(isChecked)}/>
        </View>

    )
}

export default TelaCalculadora