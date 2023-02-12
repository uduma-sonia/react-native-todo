import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskInput(props) {
  const [task, setTask] = useState("");

  const handleAddTask = (value) => {
    props.addTask(value);
    setTask("");
  };

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        placeholder="Start Typing..."
        style={style.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={style.button}>
          <AntDesign name="enter" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    borderColor: "#fff",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 25,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#838583",
    borderRightWidth: 0,
    paddingHorizontal: 10,
    fontSize: 18,
    flex: 1,
    height: 50,
  },
  button: {
    color: "blue",
    backgroundColor: "#222222",
    borderRadius: 5,
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
