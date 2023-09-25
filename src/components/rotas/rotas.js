import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaLogin from "../../screens/login/login";
import TelaCadastro from "../../screens/cadastro/cadastro";
import TelaCalculadora from "../../screens/calculadora/calculadora";
import TelaListaReceitas from "../../screens/listaReceita/listaReceita";
import TelaHistorico from "../../screens/historico/historico";

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={TelaLogin}/>
                <Stack.Screen name="Cadastro" component={TelaCadastro}/>
                <Stack.Screen name="Calculadora" component={TelaCalculadora}/>
                <Stack.Screen name="ListaReceitas" component={TelaListaReceitas}/>
                <Stack.Screen name="Historico" component={TelaHistorico}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;