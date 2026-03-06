import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";


export default function PokemonDetailsScreen() {

    const params = useLocalSearchParams();
  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
}