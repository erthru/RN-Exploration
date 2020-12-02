import React from "react";
import ListScreen from "../screens/ListScreen";
import DeveloperScreen from "../screens/DeveloperScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLayerGroup, faThList } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{ tabStyle: { height: 52 } }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const style = StyleSheet.create({
                        root: {
                            marginTop: 6,
                        },
                    });

                    switch (route.name) {
                        case "list":
                            return <FontAwesomeIcon style={style.root} icon={faThList} size={size} color={color} />;

                        case "developer":
                            return <FontAwesomeIcon style={style.root} icon={faLayerGroup} size={size} color={color} />;

                        default:
                            break;
                    }
                },
            })}
        >
            <Tab.Screen name="list" component={ListScreen} options={{ title: "List" }} />
            <Tab.Screen name="developer" component={DeveloperScreen} options={{ title: "Developer" }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
