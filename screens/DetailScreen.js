import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Post from "../components/Post";
import Toolbar from "../components/Toolbar";

const DetailScreen = () => {
    const route = useRoute();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchDetail();
    }, []);

    const fetchDetail = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + route.params.id);
        const json = await response.json();

        setPost(json);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Toolbar title="Detail" isBackButtonShown />
            <Post post={post} index={0} />
        </SafeAreaView>
    );
};

export default DetailScreen;
