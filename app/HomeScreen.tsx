import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";

const HomeScreen: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        if (!username.trim() || !password.trim()) {
            Alert.alert("Error", "Please enter a valid username and password.");
            return;
        }

        // Handle login logic here (e.g., authentication)
        Alert.alert("Login", "Successfully logged in!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.logoContainer}>
                <Image source={require('@/assets/images/image.png')} style={styles.logo} />
                </View>
                <Text style={styles.title}>Login</Text>
                <View style={styles.divider} />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#ccc"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="••••••"
                        placeholderTextColor="#ccc"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox}>
                        <Text style={styles.checkboxText}>Remember username/password</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1EBD7",
        padding: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        width: 300,
        alignItems: "center",
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 160,
        height: 40, // Adjust based on the actual image size
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: 8,
    },
    divider: {
        width: 60,
        height: 2,
        backgroundColor: "#ccc",
        marginBottom: 16,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 16,
    },
    label: {
        fontSize: 12,
        marginBottom: 6,
        color: "#555",
    },
    input: {
        width: "100%",
        height: 48,
        paddingLeft: 40,
        backgroundColor: "#F1F1F1",
        borderRadius: 8,
        fontSize: 16,
        color: "#333",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxText: {
        fontSize: 12,
        color: "#555",
    },
    loginButton: {
        backgroundColor: "linear-gradient(to right, #FBBF24, #F97316)",
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default HomeScreen;
