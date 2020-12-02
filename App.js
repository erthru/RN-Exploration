import React from "react";
import MasterLayout from "./layouts/MasterLayout";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "./screens/DetailScreen";

export default () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="master" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="master" component={MasterLayout} />
                <Stack.Screen name="detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
