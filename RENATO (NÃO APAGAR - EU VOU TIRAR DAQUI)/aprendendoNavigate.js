import react from "react";
import { View, Text, Button } from "react-native";
// Os dois imports abaixo são essenciais para fazer navegação
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TelaLogin({ navigation }){ //O parâmetro permitirá que naveguemos entre as telas 
  return(
    <View>
      <Text>Tela de login</Text>

      <Button title="Entrar" onPress={() => navigation.navigate('Calculadora')}/>
    </View>
  )
}

function TelaCalculadora({ navigation }){
  return(
    <View>
      <Text>Tela de calcular o churrasco</Text>

      <Button title="Gerar Histórico" onPress={() => navigation.push("Calculadora")} /* O atributo push após o parâmetro navigate serve para que seja armazenado um histórico do caminho que você percorreu entre as telas. Por isso, se voltar pela seta superior esquerda gerada por padrão, você irá percorrer todo o caminho de volta */ />

      <Button title="Voltar com 'goBack'" onPress={() => navigation.goBack()} /* O atributo goBack após o parâmetro navigate serve para voltar para a última tela antes de entrar na atual. Se houve um histórico, esse atributo fará com que você volte por too o caminho percorrido até aqui */ />
      <Button title="Voltar com 'navigate'" onPress={() => navigation.navigate("Login")} /* O atributo navigate permitirá que eu escolha a tela em específico que desejo ir, seja para voltar ou para ir para outra tela */ />
      <Button title="Voltar com 'popToTop'" onPress={() => navigation.popToTop()} /* O atributo popToTop fará a tarefa de voltar todo o histórico gerado pelo pelo atributo push. Isso permiitrá que não seja necessário retornar por todo o caminho gerado até a tela atual */ />
    </View>
  )
}

// O createNativeStackNavigator é um gerenciador de navegação. Ele vai permitir que eu estabelaça uma navegação, através do atributo .Navigator e insira as telas dentro dessas navegação pelo atributo .Screen. A variável abaixo vai armazenar essa função. Por isso, comumente fica Stack.Navigator ou Stack.Screen. 
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ title: "Cashurrasco" }} /* O screenOptions é um comando que atribui uma característica para todas as telas de uma vez */> 
        <Stack.Screen name="Login" component={TelaLogin} options={{ title: "Tela de Login" }} /* O comando options permite atribuir uma característica para uma tela em específico */ />
        <Stack.Screen name="Calculadora" component={TelaCalculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

// Ver "React Context"

// Exercício: Fazer a navegação em todas as telas da aplicação, mas em arquivos separados e usando o import