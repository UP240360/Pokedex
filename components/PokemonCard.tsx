import { router } from "expo-router";
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    console.log("Pokemon ID:", id);
    const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Pressable onPress={() => router.push("/new_screen")}
    style={({pressed}) => [
      styles.pressablestyle,
      pressed && {
        opacity: 0.5,
      }
    ]}
    >

      <Image 
      source={{ uri: pokemonImageURL }} 
      style={{ width: 100, height: 100 }}
      />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressablestyle: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#b0ecd5ff",
  },
});