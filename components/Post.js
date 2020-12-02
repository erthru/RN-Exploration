import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post, index, isSeparatorShown }) => {
    const navigation = useNavigation();
    const navigateToDetail = () => navigation.navigate("detail", { id: post.id });

    return (
        <TouchableOpacity style={{ paddingBottom: 16, marginTop: index === 0 ? 16 : 0 }} onPress={navigateToDetail}>
            <View style={{ paddingHorizontal: 16 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{post.title}</Text>
                <Text style={{ color: "#545454" }}>{post.body}</Text>
            </View>

            {isSeparatorShown ? <View style={{ height: 0.6, width: "100%", backgroundColor: "#757575", marginTop: 16 }} /> : null}
        </TouchableOpacity>
    );
};

export default Post;
