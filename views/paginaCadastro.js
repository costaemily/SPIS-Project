import { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function PaginaCadastro() {
  const [quantidade, setQuantidade] = useState(12);

  function handleQuantidade(number) {
    setQuantidade(quantidade + number);
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
            end={{ x: 0, y: 0 }}
          >
            <Text style={styles.gradientText}>cadastrar item</Text>
          </LinearGradient>

          <View style={styles.inputContainer}>
            <Text>X</Text>
            <TextInput placeholder="nome" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text>X</Text>
            <TextInput placeholder="modelo" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text>X</Text>
            <TextInput placeholder="serial" style={styles.input} />
          </View>

          <View style={styles.imageContainer}>
            <Button title="carregar imagem" />
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
              />
            </View>
          </View>

          <View style={styles.containerSalvar}>
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

            <LinearGradient
              colors={["rgba(255, 0, 199, 0.4)", "transparent"]}
              style={styles.gradient2}
              start={{ x: 0.8, y: 1 }}
              end={{ x: 0, y: 0 }}
            >
              <TouchableOpacity style={styles.buttonSalvar}>
                <Text style={styles.gradientText}>salvar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#312F42",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  logo: {
    height: 110,
    width: 120,
  },
  textoNomeLoja: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
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
  },
  gradientText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  input: {
    marginLeft: 10,
    width: 300,
    fontSize: 20,
    textDecorationLine: "underline",
    backgroundColor: "#fff",
    borderColor: "#D9D9D9",
    borderTopColor: "#ffffff",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 6,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "100%",
    paddingHorizontal: 40,
  },
  textImage: {
    marginLeft: 50,
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
    fontWeight: "500",
    marginTop: 10,
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
    flexDirection: "row",
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
    backgroundColor: "#FF914D",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 110,
    borderRadius: 25,
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
});
