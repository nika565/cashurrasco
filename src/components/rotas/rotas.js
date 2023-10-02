import react from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./stack.rotas";
import DrawerNavigation from "./drawer.rotas";

function Navigation(){
    return(
        <NavigationContainer>
            {/* <StackNavigation/> */}
            <DrawerNavigation/>
        </NavigationContainer>
    )
}

export default Navigation;