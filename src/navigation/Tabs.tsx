import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Hello from "@src/screens/Hello";
import World from "@src/screens/World";

type RootParamList = {
  Hello: undefined;
  World: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hello"
        component={Hello}
        options={{
          tabBarIcon: () => <Feather name="edit" size={24} />,
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="World"
        component={World}
        options={{
          tabBarIcon: () => <Feather name="check-square" size={24} />,
          tabBarActiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
