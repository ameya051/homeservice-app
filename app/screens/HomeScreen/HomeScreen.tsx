import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories/>
      </View>
    </View>
  );
};

export default HomeScreen;
