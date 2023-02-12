import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";
import TaskListItem from "./app/components/TaskListItem";
import TaskInput from "./app/components/TaskInput";
import Statistics from "./app/components/Statistics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [allTasks, setAllTasks] = useState([
    {
      id: Math.random(),
      title: "First Task",
      completed: true,
    },
    {
      id: Math.random(),
      title: "Second Task",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    const filteredTask = allTasks.filter((item) => item.id !== id);
    setAllTasks(filteredTask);
  };

  const addTask = (task) => {
    if (task == null) return;
    const newTask = {
      id: Math.random(),
      title: task,
      completed: false,
    };
    setAllTasks([...allTasks, newTask]);
  };

  const handleComplete = (id) => {
    const completedTask = allTasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setAllTasks(completedTask);
  };

  const saveTaskToDevice = async (tasks) => {
    try {
      const stringifyTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem("tasks", stringifyTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasksFromDevice = async () => {
    try {
      const tasks = await AsyncStorage.getItem("tasks");
      if (tasks != null) {
        setAllTasks(JSON.parse(tasks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasksFromDevice;
  }, []);

  useEffect(() => {
    saveTaskToDevice(allTasks);
  }, [allTasks]);

  const allCompleted = allTasks.filter((item) => item.completed === true);
  const allTasksCount = allTasks.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Image
          source={{ uri: "https://robohash.org/9WF.png?set-set2" }}
          style={styles.profileImage}
        />
      </View>

      <Statistics
        allCompleted={allCompleted.length}
        allTasksCount={allTasksCount}
      />

      <ScrollView style={styles.scrollView}>
        {allTasks.map((task) => {
          return (
            <View key={task.id}>
              <TaskListItem
                task={task}
                deleteTask={() => handleDelete(task.id)}
                completeTask={() => handleComplete(task.id)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInput addTask={addTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerText: {
    color: "#222222",
    fontSize: "20px",
    fontWeight: "600",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#838583",
  },
  scrollView: {
    marginBottom: 70,
  },
});

export default App;
