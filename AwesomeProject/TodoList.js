import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, { key: Date.now(), text }]);
      setText("");
    }
  };

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Enter a ToDo item"
        />
        <TouchableOpacity style={styles.button} onPress={() => addTodo()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {todos.map((todo) => (
          <TouchableOpacity key={todo.key} onPress={() => deleteTodo(todo.key)}>
            <Text style={styles.todo}>{todo.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 5,
    width: 200,
  },
  button: {
    backgroundColor: "#f7287b",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  todo: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 5,
  },
});
