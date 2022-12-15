import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaPrinciapal from './views/paginaPrincipal';
import PaginaCarregamento from './views/paginaCadastro';
import PaginaConsulta from './views/paginaConsulta';
import PaginaTeste from './views/paginaTeste';
import PaginaEntrada from './views/paginaEntrada';
import PaginaSaida from './views/paginaSaida';
import PaginaPesquisa from './views/paginaPesquisa';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#312F42',
    text: '#fff',
    notification: '#312F42',
    backgroung: '#fff'
  },
};
export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='SPIS Inventory' component={PaginaPrinciapal}/>
        <Stack.Screen name='Cadastro' component={PaginaCarregamento}/>
        <Stack.Screen name='Pesquisa' component={PaginaConsulta}/>
        <Stack.Screen name='Entrada de itens' component={PaginaEntrada}/>
        <Stack.Screen name='Saída de itens' component={PaginaSaida}/>
        <Stack.Screen name='Resultado pesquisa' component={PaginaPesquisa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}