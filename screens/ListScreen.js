import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Post from "../components/Post";
import Toolbar from "../components/Toolbar";

const ListScreen = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();

        setPosts(json);
    };

    return (
        <SafeAreaView style={{ backgroundColor: "white" }}>
            <Toolbar title="List" />

            {posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={(result) => <Post post={result.item} index={result.index} isSeparatorShown />}
                    keyExtractor={(post) => post.id.toString()}
                />
            ) : null}
        </SafeAreaView>
    );
};

export default ListScreen;
