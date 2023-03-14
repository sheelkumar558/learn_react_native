import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "./TodoList";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ToDo List" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
