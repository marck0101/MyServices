// import react-native from  react;
import React from /* { useState }*/ "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import Styles from "./telaMenu/styles";

export default function teste() {
  return (
    <View style={Styles.background}>
      <Text
        style={{
          color: "white",
          fontSize: 50,
          marginBottom: 60,
        }}
      >
        MyServices
      </Text>
      <View container>
        <View item xs={12}>
          <Text style={{ marginLeft: 20, color: "white", fontSize: 20 }}>
            Insira o Usuário
          </Text>
          <TextInput style={Styles.buttonText} />

          <Text style={{ marginLeft: 20, color: "white", fontSize: 20 }}>
            Insira a senha
          </Text>
          <TextInput style={Styles.buttonText} />
          <View spacing={2} style={Styles.flexao}>
            <View style={{ width: "50%" }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  backgroundColor: "purple",
                  borderRadius: 30,
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text style={{ marginLeft: 20, color: "white", fontSize: 20 }}>
                  Logar
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: "50%" }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "grey",
                  backgroundColor: "purple",
                  borderRadius: 30,
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text style={{ marginLeft: 20, color: "white", fontSize: 20 }}>
                  cadastrar-se
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "grey",
              backgroundColor: "purple",
              borderRadius: 30,
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ marginLeft: 20, color: "white", fontSize: 20 }}>
              Recuperar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// style={Styles.button}
