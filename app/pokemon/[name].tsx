import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function PokemonDetailsScreen() {

  const [pokemonData, setPokemonData] = useState(null);

  const params = useLocalSearchParams();

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      const json = await response.json();
      setPokemonData(json);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
  };

  return (
    <View>
      <Text>{params.name}</Text>

      {pokemonData && (
        <Text>{JSON.stringify(pokemonData)}</Text>
      )}

    </View>
  );
}