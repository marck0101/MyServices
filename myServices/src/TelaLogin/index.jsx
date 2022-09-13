// import react-native from  react;
import React from /* { useState }*/ "react";
import { View, StyleSheet } from "react-native";
import Estilos from "./estilos.js";

export default function teste() {
  return (
    <View>
      {/* <View> */}
      <h1>MyServices</h1>
      <View container>
        <View item xs={12} style={Estilos.inputao}>
          <label>Insira o Usuário</label> <br />
          <input type="text" /> <br />
          <label>Insira a senha</label>
          <br />
          <input type="text" />
          <br />
          <button>cadastrar-se</button>
          <button>login</button>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}
