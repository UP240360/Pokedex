import { useEffect } from "react";
import { Text, View } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

export default function Index() {

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET",
    });
    if (response.ok) {
      console.log("Request Ok");
    } else {
      console.log("Bad Request");
    }
  } catch (error) {
    console.log("Error fetching pokemons:", error);
  }
    }

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
