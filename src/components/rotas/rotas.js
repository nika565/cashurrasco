import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaLogin from "../../screens/login/login";
import TelaCadastro from "../../screens/cadastro/cadastro";
import TelaCalculadora from "../../screens/calculadora/calculadora";
import TelaResultado from "../../screens/resultado/resultado";
import TelaListaReceitas from "../../screens/listaReceita/listaReceita";
import TelaReceita from "../../screens/receita/receita";
import TelaHistorico from "../../screens/historico/historico";
import Perfil from "../../screens/perfil/perfil";

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={TelaLogin}/>
                <Stack.Screen name="Cadastro" component={TelaCadastro}/>
                <Stack.Screen name="Calculadora" component={TelaCalculadora}/>
                <Stack.Screen name="Resultado" component={TelaResultado}/>
                <Stack.Screen name="ListaReceitas" component={TelaListaReceitas}/>
                <Stack.Screen name="Receita" component={TelaReceita}/>
                <Stack.Screen name="Historico" component={TelaHistorico}/>
                <Stack.Screen name="Perfil" component={Perfil}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;