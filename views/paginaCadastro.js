import React, { useState, useEffect } from "react";
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { LinearGradient } from "expo-linear-gradient";
import { launchImageLibrary } from 'react-native-image-picker';
import { listaModelos } from "../services/modeloService";
import { listaNomes } from "../services/nomeService";
import { listaCategorias } from "../services/categoriaService";
import { listaMarcas } from "../services/marcaService";
import { peca } from "../models/peca";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { criarPeca } from "../services/pecaService";

export default function PaginaCadastro() {
  const [quantidade, setQuantidade] = useState(12);

  function handleQuantidade(number) {
    setQuantidade(quantidade + number);
  }

  const [marca, setMarca] = useState("")
  const [serial, setSerial] = useState("")
  const [custoUnitario, setCustoUnitario] = useState(0.0)
  const [custoVenda, setCustoVenda] = useState(0.0)
  const [imagem, setImagem] = useState(null)
  const [descricao, setDescricao] = useState("")

  const [selectedNome, setSelectedNomes] = useState("")
  const [selectedModelo, setSelectedModelo] = useState([])
  const [selectedMarca, setSelectedMarca] = useState("")
  const [selectedCategoria, setSelectedCategoria] = useState("")

  const [nomes, setNomes] = React.useState([])
  const [modelos, setModelos] = React.useState([])
  const [categoria, setCategoria] = React.useState([])
  const [marcas, setMarcas] = React.useState([])

  const [itensNomes, setItensNomes] = React.useState([])
  const [itensModelos, setItensModelos] = React.useState([])
  const [itensMarcas, setItensMarcas] = React.useState([])
  const [itensCategoria, setItensCategoria] = React.useState([])
  
  useEffect(()=>{
    async function listas() {
        const names = await listaNomes()
        setNomes(names)
        const mapNomes = names.map(element => {
            return{key: element.id, value: element.nome}
        });
        setItensNomes(mapNomes)

        const models = await listaModelos()
        console.log(models)
        setModelos(models)
        const mapModelos = models.map(element => {
            return{key: element.id, value: element.nome}
        });
        setItensModelos(mapModelos)

        const category = await listaCategorias()
        setCategoria(category)
        const mapCategory = category.map(element => {
            return{key: element.id, value: element.nome}
        });
        setItensCategoria(mapCategory)

        const brands = await listaMarcas()
        setMarcas(brands)
        const mapBrands = brands.map(element => {
            return{key: element.id, value: element.nome}
        });
        setItensMarcas(mapBrands)
      }
    listas()
  },[])

  async function escolherImagem(){
    const options = {
      mediaType: 'photo'
    }
    const result = await launchImageLibrary(options)
    console.log(result)
  }

  function setPeca(){
    peca.data.attributes.idnome = selectedNome
    peca.data.attributes.idmodelo = selectedModelo
    peca.data.attributes.idmarca = selectedMarca
    peca.data.attributes.idcategoria = selectedCategoria
    peca.data.attributes.descricao = descricao
    peca.data.attributes.valorunitariocusto = parseFloat(custoUnitario)
    peca.data.attributes.valorunitariovenda = parseFloat(custoVenda)
    peca.data.attributes.quantidade = quantidade
    peca.data.attributes.numeroserie = serial
    peca.data.attributes.imagem = imagem
    console.log(peca)
  }

  console.log(selectedNome)
  async function inserirPeca(){
    setPeca()
    const res = await criarPeca(peca)
    if(parseInt(res)){
      alert("Peça cadastrada com sucesso!")
    }
    console.log(res)
  }

  console.log(selectedModelo)
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
            end={{ x: 0, y: 0 }}
          >
            <Text style={styles.gradientText}>cadastrar item</Text>
          </LinearGradient>
          <View style={styles.inputContainer}>
            <Image source={require("../imgs/polling.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}>
            
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/imagem-de-marca.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}/>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/configuracoes.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}/>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/qr-scan.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}>
              <TextInput placeholder="serial" style={styles.inputTexto} onChangeText={(texto) => setSerial(texto)}/>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/categoria.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}/>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/cifrao.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}>
              <TextInput placeholder="custo unitário" 
                          style={styles.inputTexto}
                          keyboardType='decimal-pad'
                          value={custoUnitario}
                          onChangeText={(texto) => setCustoUnitario(texto)} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Image source={require("../imgs/etiqueta-de-preco.png")} style={styles.iconesCampos} />
            <View style={styles.containerInput}>
               <TextInput placeholder="custo venda" 
                          style={styles.inputTexto}
                          keyboardType='decimal-pad'
                          value={custoVenda}
                          onChangeText={(texto) => setCustoVenda(texto)} />
            </View>
          </View>

          <View style={styles.imageContainer}>
          <TouchableOpacity onPress={()=> escolherImagem()}>
            <Image source={require("../imgs/imagem.png")} style={{width: 35, height: 35}} />
          </TouchableOpacity>
            <Text style={styles.textImage}>------</Text>

          </View>

          <View style={styles.containerTotalItens}>
            <View style={styles.bolinhaAmarela} />
            <View style={styles.bolinhaRosa} />
            <View style={styles.caixaTextoQtdItens}>
              <Text style={styles.textoQtdEstoque}>descrição:</Text>

              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.descricao}
                onChangeText={(texto) => setDescricao(texto)}

              />
            </View>
          </View>
          <View style={styles.quantidades}>
              <Text
                onPress={() => handleQuantidade(-1)}
                style={styles.textQuantidade}
              >
                -
              </Text>
              <Text
                onPress={() => handleQuantidade(1)}
                style={styles.textQuantidade2}
              >
                {quantidade}
              </Text>
              <Text style={styles.textQuantidade}>+</Text>
            </View>
          <View style={styles.containerSalvar}>
            <LinearGradient
              colors={["rgba(255, 0, 199, 0.4)", "transparent"]}
              style={styles.gradient2}
              start={{ x: 0.8, y: 1 }}
              end={{ x: 0, y: 0 }}>
              <TouchableOpacity style={styles.buttonSalvar} onPress={inserirPeca}>
                <Text style={styles.gradientText}>salvar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.listaCategoria}>
              <SelectList data={itensCategoria}
                                setSelected={setSelectedCategoria}
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
                                placeholder="categoria"
                                notFoundText='Opção não encontrada'
                                inputStyles={{fontSize: 20,
                                              color: '#000000'}}/>
          </View>
          <View style={styles.listaModelo}>
            <MultipleSelectList 
                            setSelected={(val) => setSelectedModelo(val)} 
                            data={itensModelos} 
                            save="key"
                            onSelect={() => alert(selectedModelo)} 
                            label="modelos"
                            dropdownStyles={{backgroundColor: "#312F42"}}
                                dropdownTextStyles={{color: 'white',
                                                    fontSize: 15,
                                                    fontWeight: '700'}}
                                boxStyles={{fontSize: 20,
                                            fontWeight: '700',
                                            borderWidth: 0,
                                            width: 285,
                                            height: 70,
                                            top: 1,
                                            alignItems: 'center'}}
                                placeholder="modelo"
                                notFoundText='Opção não encontrada'
                                inputStyles={{fontSize: 20,
                                              color: '#000000'}}/>
              
          </View>
          <View style={styles.listaMarca}>
              <SelectList data={itensMarcas}
                                setSelected={setSelectedMarca}
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
                                placeholder="marca"
                                notFoundText='Opção não encontrada'
                                inputStyles={{fontSize: 20,
                                              color: '#000000'}}/>
          </View>
          <View style={styles.listaNome}>
              <SelectList data={itensNomes}
                                setSelected={setSelectedNomes}
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
                                placeholder="nome"
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
  listaModelo: {
    position: 'absolute',
    top: 205,
    left: 65
  },
  listaCategoria: {
    position: 'absolute',
    top: 355,
    left: 65
  },
  listaNome: {
    position: 'absolute',
    top: 55,
    left: 65
  },
  listaMarca: {
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
    height: 950,
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
    right: 110,
    top: 20
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
    top: 15,
    right: 97
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