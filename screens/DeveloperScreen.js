import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import Toolbar from "../components/Toolbar";

const DeveloperScreen = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetchProfileFromGithub();
    }, []);

    const fetchProfileFromGithub = async () => {
        const response = await fetch("https://api.github.com/users/erthru");
        const json = await response.json();

        setProfile({
            username: json.login,
            avatarUrl: json.avatar_url,
            name: json.name,
            githubUrl: json.html_url,
        });
    };

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <Toolbar title="Developer" />
            <Image source={{ uri: profile.avatarUrl }} style={{ width: 132, height: 132, alignSelf: "center", marginTop: 16, borderRadius: 66 }} />
            <Text style={{ textAlign: "center", marginTop: 24, fontWeight: "bold", fontSize: 24 }}>{profile.name}</Text>
            <Text style={{ textAlign: "center", marginTop: 4 }}>{profile.githubUrl}</Text>
        </SafeAreaView>
    );
};

export default DeveloperScreen;
