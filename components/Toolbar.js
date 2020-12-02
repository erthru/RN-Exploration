import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Toolbar = ({ title, isBackButtonShown }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={{ height: 56, width: "100%", backgroundColor: "white", flexDirection: "row" }}>
                {isBackButtonShown ? (
                    <TouchableOpacity style={{ alignSelf: "center", marginLeft: 16 }} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                ) : null}

                <View style={{ alignSelf: "center", marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 16 }}>{title}</Text>
                </View>
            </View>

            <View style={{ height: 0.5, width: "100%", backgroundColor: "#b8b8b8" }} />
        </View>
    );
};

export default Toolbar;
