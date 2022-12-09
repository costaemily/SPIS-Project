import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTelaPrin}>
        <Image source={require('./imgs/borcelle.png')} style={styles.logo}/>
        <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                        style={styles.containerNome} 
                        start={{ x: 0.8, y: 1 }}
                        end={{ x: 0, y: 0 }}>
          <Text style={styles.textoNomeLoja}>LOJA IACONA TECH</Text>
        </LinearGradient>
        <View style={styles.configBotoes}>
          <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                            style={styles.botoesTelaPrin} 
                            start={{ x: 0.8, y: 1 }}
                            end={{ x: 0, y: 0 }}>
              <Image source={require('./imgs/lupa.png')} style={styles.logoBotao}/>
              <Text style={styles.textoNomeBotao}>cadastro</Text>
          </LinearGradient>
          <View style={styles.espaco}/>
          <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                            style={styles.botoesTelaPrin} 
                            start={{ x: 0.8, y: 1 }}
                            end={{ x: 0, y: 0 }}>
              <Image source={require('./imgs/lupa.png')} style={styles.logoBotao}/>
              <Text style={styles.textoNomeBotao}>consultas</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerTotalItens}>
          <View style={styles.bolinhaAmarela}/>
          <View style={styles.bolinhaRosa}/>
            <View style={styles.caixaTextoQtdItens}>
              <Text style={styles.textoQtdEstoque}>quantidade de itens no estoque</Text>
            </View>
            <Text style={styles.textoQTD}>1.200</Text>
            <Image source={require('./imgs/iconeEstoque.png')} style={styles.logoEstoque}/>
            
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerTelaPrin: {
    backgroundColor: '#312F42',
    alignItems: 'center',
    height: 430,
    width: 360,
    borderRadius: 50
  },
  container: {
    backgroundColor: '#312F42',
    alignItems: 'center',
    height: 100,
    width: 360,
  },
  logo: {
    height: 170,
    width: 170,
    marginTop: 50
  },
  containerNome: {
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 275,
    borderRadius: 20,
    top: 15
  },
  textoNomeLoja: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  },
  textoNomeBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginTop: 30
  },
  botoesTelaPrin: {
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    borderRadius: 20,
    marginTop: 80,
  },
  configBotoes: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
  },
  espaco: {
    marginLeft: 40
  },
  logoBotao: {
    width: 27,
    height: 27,
    marginLeft: 50
  },
  maisBotao: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 50,
    marginLeft: 50
  },
  containerTotalItens: {
    flex: 1,
    position: 'absolute',
    top: 480,
    marginTop: 100,
    backgroundColor: '#fff',
    borderColor: "#D9D9D9",
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 6,
    borderWidth: 1,
    height: 105,
    width: 340,
    borderRadius: 20,
  },
  caixaTextoQtdItens: {
    width: 200,
    height: 60,
    alignItems: 'center',
  },
  textoQtdEstoque: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
    marginTop: 10
  },
  textoQTD: {
    flex: 1,
    position: 'absolute',
    color: "#312F42",
    top: 35,
    left: 120,
    fontWeight: '500',
    fontSize: 43
  },
  logoEstoque: {
    flex: 1,
    position: 'absolute',
    width: 70,
    height: 70,
    left: 250,
    top: 10
  },
  bolinhaAmarela: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFEBD3',
    borderRadius: 50,
    width: 55,
    height: 55
  },
  bolinhaRosa: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFD3EE',
    borderRadius: 50,
    width: 90,
    height: 90,
    top: 8,
    left: 150
  }
});
