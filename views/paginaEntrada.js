import React, { useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { acharPecaPeloId, alterarPeca, listaPecas } from "../services/pecaService";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { listaTipoEntradas } from "../services/tipoEntradaService";
import { entrada } from "../models/entrada";
import { alterarEntrada, criarEntrada, criarNovo } from "../services/entradaService";
import { peca } from "../models/peca";


export default function PaginaEntrada() {

  let peca1 = {
    "data": {
      "type": "item",
      "id": "",
      "attributes": {
          "idnome": "",
          "idmodelo": [

    ],
          "idmarca": "",
          "numeroserie": "",
          "imagem": null,
          "descricao": "",
          "quantidade": 0,
          "valorunitariocusto": 0.0,
          "valorunitariovenda": 0.0,
          "idcategoria": ""
      },
      "relationships": {
          "item_type": {
              "data": {
                  "type": "item_type",
                  "id": "904230"
              }
          }
      }
  }
  }
  const [quantidade, setQuantidade] = useState(12);

  function handleQuantidade(number) {
    setQuantidade(quantidade + number);
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setData(date)
    hideDatePicker();
  };

  const [data, setData] = useState(new Date())
  const [dataEntrada, setDataEntrada] = useState("")

  const [marca, setMarca] = useState("")
  const [serial, setSerial] = useState("")
  const [custoUnitario, setCustoUnitario] = useState(0.0)
  const [custoVenda, setCustoVenda] = useState(0.0)
  const [imagem, setImagem] = useState("")

  const [selectedPeca, setSelectedPeca] = useState("")
  const [selectedTipoEntrada, setSelectedTipoEntrada] = useState("")

  const [pecas, setPecas] = React.useState([])
  const [tipoEntrada, setTipoEntrada] = React.useState([])

  const [itensPecas, setItensPecas] = React.useState([])
  const [itensTipoEntrada, setItensTipoEntrada] = React.useState([])
  
  useEffect(()=>{
    async function listas() {
        const pecs = await listaPecas()
        setPecas(pecs)
        const mapPecas = pecs.map(element => {
            return{key: element.id, value: element.numeroserie}
        });
        setItensPecas(mapPecas)

        const tipoEnt = await listaTipoEntradas()
        setTipoEntrada(tipoEnt)
        const mapTipoEnt = tipoEnt.map(element => {
            return{key: element.id, value: element.nome}
        });
        setItensTipoEntrada(mapTipoEnt)
      }
    listas()
  },[])
  
  useEffect(()=>{
    const diaE = data.getDate().toString()
    const mesE = (data.getMonth() + 1).toString()
    const anoE = data.getFullYear().toString()
    setDataEntrada(anoE + `-`+ mesE + `-` + diaE)
  },[data])

  function setEntrada(){
    entrada.data.attributes.idpeca = selectedPeca,
    entrada.data.attributes.idtipoentrada = selectedTipoEntrada,
    entrada.data.attributes.dataentrada = dataEntrada,
    entrada.data.attributes.quantidade = parseInt(quantidade)
  }

  console.log(selectedPeca, selectedTipoEntrada, dataEntrada, parseInt(quantidade))

  async function inserirEntrada(){
    setEntrada()
    const res = await criarEntrada(entrada)
    const pecaId = await acharPecaPeloId(entrada.data.attributes.idpeca)
    pecaId.attributes.quantidade = 
            pecaId.attributes.quantidade + entrada.data.attributes.quantidade

    console.log(selectedPeca, 
      pecaId.attributes.idnome,
    pecaId.attributes.idmarca,
    pecaId.attributes.idmodelo, 
    pecaId.attributes.idcategoria,
    pecaId.attributes.valorunitariocusto,
    pecaId.attributes.valorunitariovenda,
    pecaId.attributes.numeroserie,
    pecaId.attributes.quantidade,
    pecaId.attributes.descricao)
    console.log(parseInt(selectedPeca))
    const pec = await alterarPeca(parseInt(selectedPeca), selectedPeca, 
                                  pecaId.attributes.idnome,
                                  pecaId.attributes.idmarca,
                                  pecaId.attributes.idmodelo, 
                                  pecaId.attributes.idcategoria,
                                  pecaId.attributes.valorunitariocusto,
                                  pecaId.attributes.valorunitariovenda,
                                  pecaId.attributes.numeroserie,
                                  pecaId.attributes.quantidade,
                                  null, pecaId.attributes.descricao)
    console.log(pec)
    if(parseInt(res)){
      alert("Entrada cadastrada com sucesso!")
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../imgs/borcelle.png")} style={styles.logo} />
          <Text style={styles.textoNomeLoja}>LOJA IACONA TECH</Text>
        </View>

        <View style={styles.content}>
          <LinearGradient
            colors={["rgba(255, 0, 199, 0.4)", "transparent"]}
            style={styles.gradient}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0, y: 0 }}>
            <Text style={styles.gradientText}>item</Text>
          </LinearGradient>
          <View style={styles.inputContainer}>
            <Image source={require("../imgs/puzzle-game-piece.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}/>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/categoria.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}/>
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity onPressOut={() => showDatePicker()}>
                <Image source={require("../imgs/datas.png")} style={styles.iconesCampos} />
            </TouchableOpacity>
            <View style={styles.containerInput}>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
              <Text style={{
                    position: 'relative',
                    fontSize: 20,
                    top: 8,
                    right: 70

              }}>{dataEntrada}</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/quantidade.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}>
               <TextInput placeholder="quantidade" 
                          style={styles.inputTexto}
                          keyboardType='number-pad'
                          value={quantidade}
                          onChangeText={(texto) => setQuantidade(texto)} />
            </View>
          </View>



          <View style={styles.containerSalvar}>
            <LinearGradient
              colors={["rgba(255, 0, 199, 0.4)", "transparent"]}
              style={styles.gradient2}
              start={{ x: 0.8, y: 1 }}
              end={{ x: 0, y: 0 }}>
              <TouchableOpacity style={styles.buttonSalvar} onPress={inserirEntrada}>
                <Text style={styles.gradientText}>salvar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.listaTipoEntrada}>
              <SelectList data={itensTipoEntrada}
                                setSelected={setSelectedTipoEntrada}
                                dropdownStyles={{backgroundColor: "#312F42"}}
                                dropdownTextStyles={{color: 'white',
                                                    fontSize: 15,
                                                    fontWeight: '700'}}
                                boxStyles={{fontSize: 20,
                                            fontWeight: '700',
                                            borderWidth: 0,
                                            width: 285,
                                            height: 60,
                                            top: 1,
                                            alignItems: 'center'}}
                                placeholder="tipo de entrada"
                                notFoundText='Opção não encontrada'
                                inputStyles={{fontSize: 20,
                                              color: '#000000'}}/>
          </View>
          <View style={styles.listaPeca}>
              <SelectList data={itensPecas}
                                setSelected={setSelectedPeca}
                                dropdownStyles={{backgroundColor: "#312F42"}}
                                dropdownTextStyles={{color: 'white',
                                                    fontSize: 15,
                                                    fontWeight: '700'}}
                                boxStyles={{fontSize: 20,
                                            fontWeight: '700',
                                            borderWidth: 0,
                                            width: 285,
                                            height: 60,
                                            top: 1,
                                            alignItems: 'center'}}
                                placeholder="peça"
                                notFoundText='Opção não encontrada'
                                inputStyles={{fontSize: 20,
                                              color: '#000000'}}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listaPeca: {
    position: 'absolute',
    top: 55,
    left: 65
  },
  listaTipoEntrada: {
    position: 'absolute',
    top: 130,
    left: 65
  },
  container: {
    backgroundColor: "#312F42",
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 10
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
  content: {
    backgroundColor: '#fff',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    height: 530,
    width: 360,
    top: 50,
    alignItems: "center",
  },
  gradient: {
    backgroundColor: "#FF914D",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 190,
    borderRadius: 20,
    marginTop: -20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000'
  },
  gradientText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    marginLeft: 10,
    width: 300,
    fontSize: 20,
    backgroundColor: "#fff",
    borderColor: "#D9D9D9",
    borderTopColor: "#ffffff",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 6,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: "100%",
  },
  textImage: {
    marginLeft: 100,
    fontSize: 20,
  },
  containerTotalItens: {
    backgroundColor: "#fff",
    borderColor: "#D9D9D9",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 6,
    borderWidth: 1,
    width: 340,
    height: 105,
    borderRadius: 20,
    marginTop: 30,
    position: "relative",
    paddingHorizontal: 20,
  },
  caixaTextoQtdItens: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  textoQtdEstoque: {
    fontSize: 20,
    top: -10,
    fontWeight: "500",
    marginLeft: -85,
    width: 100,
  },
  bolinhaAmarela: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#FFEBD3",
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  bolinhaRosa: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#FFD3EE",
    borderRadius: 50,
    width: 90,
    height: 90,
    top: 8,
    left: 150,
  },
  containerSalvar: {
    flexDirection: "row-reverse",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 28,
  },
  quantidades: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  textQuantidade: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textQuantidade2: {
    fontSize: 20,
    width: 39,
    textDecorationColor: "underline",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  gradient2: {
    backgroundColor: '#FF914D',
    borderColor: '#FF914D',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 120,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000'
  },
  buttonSalvar: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  descricao: {
    fontSize: 20,
    width: "60%",
    fontWeight: "500",
    marginTop: 12,
  },
  containerInput: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "#fff",
    borderBottomColor: '#D9D9D9',
    borderLeftColor: '#D9D9D9',
    borderRightColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderBottomWidth: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 60,
    width: 285,
    borderRadius: 25,
    position: "relative",
    alignItems: 'center',
  },
  inputTexto: {
    height: 40,
    fontSize: 20,
    width: 250,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    top: -5
  },
  iconesCampos: {
    width: 40,
    height: 40,
  },
  
});