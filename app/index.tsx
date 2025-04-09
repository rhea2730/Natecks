import { Stack } from "expo-router";
import HomeScreen from "./HomeScreen";  // Import your new screen

export default function Index() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <HomeScreen />
        </>
    );
}
