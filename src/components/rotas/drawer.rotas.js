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

function DrawerNavigation(){
    return(
        // <Drawer.Navigator initialRouteName="Login">
        //     <Drawer.Screen name="Login" component={StackNavigation}/>
        //     <Drawer.Screen name="Cadastro" component={StackNavigation}/>
        //     <Drawer.Screen name="Calculadora" component={StackNavigation}/>
        //     <Drawer.Screen name="Resultado" component={StackNavigation}/>
        //     <Drawer.Screen name="ListaReceitas" component={StackNavigation}/>
        //     <Drawer.Screen name="Receita" component={StackNavigation}/>
        //     <Drawer.Screen name="Historico" component={StackNavigation}/>
        //     <Drawer.Screen name="Evento" component={StackNavigation}/>
        //     <Drawer.Screen name="Perfil" component={StackNavigation}/>
        // </Drawer.Navigator>
        
        <Drawer.Navigator initialRouteName="Login" screenOptions={{
            title: '',
            headerStyle:{
                backgroundColor: '#F27405'
            },
            drawerInactiveTintColor: '#BF0404',
            drawerActiveTintColor: '#F27405',
        }}>
            <Drawer.Screen name="Receita" component={TelaReceita} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Cadastro" component={TelaCadastro} options={{drawerItemStyle: { display: 'none' }, drawerLockMode: 'locked-closed'}}/>
            <Drawer.Screen name="Resultado" component={TelaResultado} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Evento" component={Evento} options={{drawerItemStyle: { display: 'none' }}}/>

            <Drawer.Screen name="Calculadora" component={TelaCalculadora} options={{
                drawerLabel: 'Início'
            }}/>
            <Drawer.Screen name="ListaReceitas" component={TelaListaReceitas} options={{
                drawerLabel: 'Receitas'
            }}/>
            <Drawer.Screen name="Historico" component={TelaHistorico} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Perfil" component={Perfil} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Login" component={TelaLogin} options={{
                 drawerLockMode: 'locked-closed',
                headerShown: false,
                drawerLabel: 'Sair',
            }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;