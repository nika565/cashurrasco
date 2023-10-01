import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./stack.rotas";

import TelaLogin from "../../screens/login/login";
import TelaCadastro from "../../screens/cadastro/cadastro";
import TelaCalculadora from "../../screens/calculadora/calculadora";
import TelaResultado from "../../screens/resultado/resultado";
import TelaListaReceitas from "../../screens/listaReceita/listaReceita";
import TelaReceita from "../../screens/receita/receita";
import TelaHistorico from "../../screens/historico/historico";
import Perfil from "../../screens/perfil/perfil";
import Evento from "../../screens/evento/evento";

const Drawer = createDrawerNavigator();

// function DrawerNavigation(){
//     return(
//         <Drawer.Navigator initialRouteName="Login">
//             <Drawer.Screen name="Login" component={StackNavigation}/>
//             <Drawer.Screen name="Cadastro" component={StackNavigation}/>
//             <Drawer.Screen name="Calculadora" component={StackNavigation}/>
//             <Drawer.Screen name="Resultado" component={StackNavigation}/>
//             <Drawer.Screen name="ListaReceitas" component={StackNavigation}/>
//             <Drawer.Screen name="Receita" component={StackNavigation}/>
//             <Drawer.Screen name="Historico" component={StackNavigation}/>
//             <Drawer.Screen name="Evento" component={StackNavigation}/>
//             <Drawer.Screen name="Perfil" component={StackNavigation}/>
//         </Drawer.Navigator>
        
//         // <Drawer.Navigator initialRouteName="Login">
//         //     <Drawer.Screen name="Receita" component={TelaReceita}/>
//         //     <Drawer.Screen name="Cadastro" component={TelaCadastro}/>
//         //     <Drawer.Screen name="Resultado" component={TelaResultado}/>
//         //     <Drawer.Screen name="Evento" component={Evento}/>
//         //     <Drawer.Screen name="Calculadora" component={TelaCalculadora}/>
//         //     <Drawer.Screen name="ListaReceitas" component={TelaListaReceitas}/>
//         //     <Drawer.Screen name="Historico" component={TelaHistorico}/>
//         //     <Drawer.Screen name="Perfil" component={Perfil}/>
//         //     <Drawer.Screen name="Login" component={TelaLogin}/>
//         // </Drawer.Navigator>
//     )
// }

// export default DrawerNavigation;