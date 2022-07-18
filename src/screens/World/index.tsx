import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@src/redux/store";
import styles from "./styles";

const World = () => {
  const { value } = useSelector((state: RootState) => state.text);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default World;
