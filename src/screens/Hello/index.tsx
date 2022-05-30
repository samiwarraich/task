import React from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { updateText } from "@src/redux/slices/textSlice";
import styles from "./styles";

const Hello = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here!"
        onChangeText={(newText) => dispatch(updateText(newText))}
      />
    </View>
  );
};

export default Hello;
