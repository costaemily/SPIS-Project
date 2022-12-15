import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, 
        TextInput, KeyboardAvoidingView,
        TouchableOpacity,
        Platform, 
        ScrollView,
        FlatList} from 'react-native';
        
export default function PaginaPesquisa({route, navigation}) {

    const {valor, opcao, itens} = route.params;

    const [pecas, setPecas] = React.useState([])
    const [text, onChangeText] = React.useState(null);
    const [isNomeChecked, setNomeChecked] = React.useState(false);
    const [isModeloChecked, setModeloChecked] = React.useState(false);
    const [isSerialChecked, setSerialChecked] = React.useState(false);

    console.log(itens)

    return (
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#312F42'}} 
                              behavior={Platform.OS === "ios" ? "padding" : null} enabled>
                <View style={{flexDirection: 'row',
                            justifyContent: 'center',
                            top: 10}}>
                    <Image source={require('../imgs/borcelle.png')} style={styles.logo}/>
                    <Text style={styles.textoNomeLoja}>LOJA IACONA TECH</Text>
                </View>
                
                <View style={styles.containerPrin}>
                  <View style={{width: '100%', 
                                top: 20}}>
                    <FlatList data={itens}
                              keyExtractor={item=>item.id}
                              renderItem={({item}) => 
                              <View style={styles.item}>
                                  <Image source={require("../imgs/puzzle-game-piece.png")}
                                        style={styles.logoImagemItens} />
                                  <Text style={styles.textoQuantidade}>{item.quantidade}</Text>
                                  <Text style={styles.textoItens}>{item.idnome.nome}</Text>
                                  <Text style={styles.textoMarca}>{item.idmarca.nome}</Text>
                                  <Text style={styles.textoSerial}>{item.numeroserie}</Text>
                                  <Text style={styles.textoDescricao}>{item.descricao}</Text>
                                  <View style={styles.containerModelos}>
                                  {
                                    item.idmodelo.map((item) => {
                                      return(
                                            <Text style={styles.textoModelo}> {item.nome}</Text>
                                      )
                                    })
                                  }
                                  </View>
                                  <View style={{position: 'absolute',
                                                top: 195,
                                                left: 20,
                                                width: 255,
                                                height: 1,
                                                backgroundColor: '#000'}}/>
                                  <Text style={styles.textoValor}>R$: {item.valorunitariocusto}</Text>
                                  <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                                                      style={styles.alterar} 
                                                      start={{ x: 0.8, y: 1 }}
                                                      end={{ x: 0, y: 0 }}>
                                      <Image source={require("../imgs/editar.png")}
                                            style={styles.logoEditar} />
                                  </LinearGradient>
                              </View>
                              }>

                    </FlatList>
                  </View>
                  

                </View>
                <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                                    style={styles.botoesTelaPrin} 
                                    start={{ x: 0.8, y: 1 }}
                                    end={{ x: 0, y: 0 }}>
                    <Text style={styles.textoNomeBotao}>item</Text>
                </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  containerModelos: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 10
  },
  textoModelo: {
    top: 90, 
    left: 20,
    fontSize: 18,
    fontWeight: '500'
  },
  alterar: {
    position: 'absolute',
    alignItems: 'center',
    top: 5,
    left: 250,
    backgroundColor: '#FF914D',
    borderColor: '#FF914D',
    borderRadius: 50,
    borderWidth: 1,
    elevation: 4,
    shadowColor: '#000',
    width: 43,
    height: 43
  },
  logoEditar: {
    top: 7,
    width: 25,
    height: 25
  },
  textoValor: {
    position: 'absolute',
    top: 160, 
    left: 20,
    fontSize: 22,
    fontWeight: '400'
  },
  textoDescricao: {
    position: 'absolute',
    top: 130, 
    left: 20,
    fontSize: 18,
    fontWeight: '400'
  },
  textoSerial: {
    position: 'absolute',
    top: 70, 
    left: 100,
    fontSize: 20,
    fontWeight: '400'
  },
  logoImagemItens: {
    width: 70,
    height: 70
  },
  textoQuantidade: {
    position: 'absolute',
    top: 10, 
    left: 100,
    fontSize: 20,
    fontWeight: '500'
  },
  textoMarca: {
    position: 'absolute',
    top: 10, 
    left: 150,
    fontSize: 20,
    fontWeight: '400'
  },
  textoItens: {
    position: 'absolute',
    top: 40, 
    left: 100,
    fontSize: 20,
    fontWeight: '400'
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#D9D9D9',
    borderLeftColor: '#D9D9D9',
    borderRightColor: '#D9D9D9',
    borderBottomWidth: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 215,
    width: 305,
    borderRadius: 30,
  }, 
  containerTela: {
    height: 250,
    width: 360,
  },
  container: {
    backgroundColor: '#fff',
    height: 100,
    width: 360,
  },
  logo: {
    height: 110,
    width: 120
  },
  textoNomeLoja: {
    top: 40,
    left: 5,
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  containerPrin: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    height: 510,
    width: 360,
    top: 50
  },
  textoNomeBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  textoBotaoPesquisar: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  textoNomeItem: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'auto',
  },
  containerOpcoes: {
    position: 'absolute',
    top: 50,
    left: 20
  },
  opcoes: {
    position: 'absolute',
    bottom: 50,
  },
  botoesTelaPrin: {
    position: 'absolute',
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 190,
    borderRadius: 20,
    borderColor: '#FF914D',
    borderWidth: 1,
    elevation: 4,
    shadowColor: '#000',
    top: 140,
    left: 90
  },
  botaoPesquisar: {
    position: 'absolute',
    top: 310,
    left: 100,
    backgroundColor: '#FF914D',
    borderColor: '#FF914D',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 150,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000'
  },
  containerInput: {
    position: 'absolute',
    alignItems: 'center',
    top: 230,
    left: 30,
    padding: 5,
    backgroundColor: '#fff',
    borderBottomColor: '#D9D9D9',
    borderLeftColor: '#D9D9D9',
    borderRightColor: '#D9D9D9',
    borderBottomWidth: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 60,
    width: 285,
    borderRadius: 25,
  },
  input: {
    height: 40,
    fontSize: 20,
    height: 40,
    width: 250,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 35
  }
});
