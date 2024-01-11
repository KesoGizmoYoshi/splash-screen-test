import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

const App = () => {
	useEffect(() => {
		setTimeout(async () => {
			await SplashScreen.hideAsync();
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>SplashScreen Demo! 👋</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#aabbcc",
	},
	text: {
		color: "white",
		fontWeight: "bold",
	},
});

export default App;
