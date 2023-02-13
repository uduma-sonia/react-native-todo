import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskListItem(props) {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        {props.task.completed ? (
          <AntDesign
            name="checksquare"
            size={18}
            color="#099e06"
            onPress={props.completeTask}
          />
        ) : (
          <AntDesign
            name="checksquareo"
            size={18}
            color="#099e06"
            onPress={props.completeTask}
          />
        )}
        <Text
          style={[
            style.text,
            props.task.completed ? style.textCompleted : null,
          ]}
        >
          {props.task.title}
        </Text>
      </View>

      <TouchableOpacity onPress={props.deleteTask}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f0f2f0",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    height: "auto",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#222222",
    fontSize: 18,
    marginLeft: 7,
    maxWidth: 200,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    opacity: 0.5,
  },
});
