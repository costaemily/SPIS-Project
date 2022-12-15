import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, 
        TextInput, KeyboardAvoidingView,
        Platform, 
        ScrollView} from 'react-native';
import { Checkbox } from "react-native-paper";

export default function PaginaCarregamento({navigation}) {

    const [text, onChangeText] = React.useState(null);
    const [isNomeChecked, setNomeChecked] = React.useState(false);
    const [isModeloChecked, setModeloChecked] = React.useState(false);
    const [isSerialChecked, setSerialChecked] = React.useState(false);

    return (
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#312F42'}} 
                              behavior={Platform.OS === "ios" ? "padding" : null} enabled>
            <ScrollView>
                
                
                <View style={{flexDirection: 'row',
                            justifyContent: 'center',
                            top: 10}}>
                    <Image source={require('../imgs/borcelle.png')} style={styles.logo}/>
                    <Text style={styles.textoNomeLoja}>LOJA IACONA TECH</Text>
                </View>
                
                <View style={styles.containerPrin}>
                    <View style={{position: 'relative',
                                  top: 50}}>
                        <Checkbox.Item label="nome" 
                                        status={isNomeChecked ? 'checked' : 'unchecked'} 
                                        position='leading'
                                        onPress={() => {setNomeChecked(!isNomeChecked)}}
                                        labelStyle={styles.textoNomeItem}/>
                        <Checkbox.Item label="modelo"
                                        status={isModeloChecked ? 'checked' : 'unchecked'} 
                                        position='leading'
                                        onPress={() => {setModeloChecked(!isModeloChecked)}}
                                        labelStyle={styles.textoNomeItem}/>
                        <Checkbox.Item label="serial "
                                        status={isSerialChecked ? 'checked' : 'unchecked'} 
                                        position='leading'
                                        onPress={() => {setSerialChecked(!isSerialChecked)}}
                                        labelStyle={styles.textoNomeItem}/>
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="digite aqui"/>
                    </View>
                    <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                                    style={styles.botaoPesquisar} 
                                    start={{ x: 0.8, y: 1 }}
                                    end={{ x: 0, y: 0 }}>
                        <Text style={styles.textoBotaoPesquisar}>pesquisar</Text>
                    </LinearGradient> 
                </View>
                <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                                    style={styles.botoesTelaPrin} 
                                    start={{ x: 0.8, y: 1 }}
                                    end={{ x: 0, y: 0 }}>
                    <Text style={styles.textoNomeBotao}>item</Text>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  containerTela: {
    height: 250,
    width: 360,
  },
  container: {
    backgroundColor: '#fff',
    height: 1000,
    width: 360,
  },
  logo: {
    right: 10,
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
    backgroundColor: '#fff',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    height: 600,
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
