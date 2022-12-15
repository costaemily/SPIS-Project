import { StyleSheet, Text, View, Image,
        KeyboardAvoidingView, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { listaNomes } from '../services/nomeService';
import React, { useState, useEffect } from "react";


export default function PaginaTeste({navigation}) {

  const [selected, setSelected] = useState("");
  const [nomes, setNomes] = React.useState([])
  const [itens, setItens] = React.useState([])
  
  useEffect(()=>{
    async function listNames() {
        const names = await listaNomes()
        setNomes(names)
        const qualquernome = names.map(element => {
            return{key: element.id, value: element.nome}
        });
        console.log(qualquernome)
        setItens(qualquernome)
      }
    listNames()
  },[])

  return (
    <KeyboardAvoidingView>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerTelaPrin}>
                    <Image source={require('../imgs/borcelle.png')} style={styles.logo}/>
                </View>
                
                <View style={styles.containerInput}>
                
                </View>
                
                <Text>{selected}</Text>
            </View>
            <SelectList data={itens}
                                setSelected={setSelected}
                                dropdownStyles={{backgroundColor: 'gray'}}
                                dropdownTextStyles={{color: 'white'}}
                                style={styles.input}
                                boxStyles={styles.borda}
                                placeholder="Nome"
                                notFoundText='Opção não encontrada'
                                inputStyles={styles.texto}/>
        </ScrollView>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312F42'
    },
    containerTelaPrin: {
        backgroundColor: '#312F42',
        alignItems: 'center',
        height: 430,
        width: 360,
        borderRadius: 50
    },
    containerInput: {
        position: 'absolute',
        alignItems: 'center',
        top: 300,
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
      },
      borda: {
        height: 60,
        backgroundColor: '#fff',
        borderBottomColor: '#D9D9D9',
        borderLeftColor: '#D9D9D9',
        borderRightColor: '#D9D9D9',
        borderRightWidth: 1,
        borderBottomWidth: 6,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderRadius: 25,
        alignItems: 'center'
      },
      texto: {
        fontSize: 20
      }
});