import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Statistics(props) {
  return (
    <View style={style.container}>
      <View style={style.card}>
        <Text>{props.allTasksCount}</Text>
        <Text>All</Text>
      </View>

      <View style={[style.card, style.rightCard]}>
        <Text>{props.allCompleted}</Text>
        <Text>Completed</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginBottom: 15,
  },
  card: {
    borderWidth: 1,
    borderColor: "#f2fcf5",
    backgroundColor: "#f2f2f2",
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  rightCard: {
    marginLeft: 10,
  },
});
