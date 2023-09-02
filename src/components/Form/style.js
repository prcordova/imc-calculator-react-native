import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  textInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,

    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },

  errorMessage: {
    fontSize: 12,
    color: "#ff0043",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  resultListContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  listImcs: {
    marginTop: 10,
    width: "100%",
  },
  item: {
    marginTop: 5,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 5,
    fontSize: 22,
    color: "#ff0043",
    height: 50,
    paddingRight: 20,

    borderRadius: 50,
  },

  itemOdd: {
    backgroundColor: "#F0E0E5",
    color: "#ff0043",
  },
  itemEven: {
    backgroundColor: "#E5E4E59B",
  },
  textResultItemList: {
    width: "100%",
    color: "#ff0043",
    fontSize: 16,
  },
});

export default styles;
