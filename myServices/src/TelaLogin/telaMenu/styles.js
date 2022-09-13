import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  button: {
    borderColor: "purple",
    borderWidth: 2,
    borderTopWidth: 3,
    borderLeftWidth: 4,
    borderRadius: 30,
    width: "190px",
    height: "40px",
    marginTop: "20px",
  },

  flexao: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "purple",
  },
});

export default Styles;
