import React from "react";
import { View } from "react-native";
import TabNavigator from "../components/TabNavigator";

const MasterLayout = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <TabNavigator />
        </View>
    );
};

export default MasterLayout;
