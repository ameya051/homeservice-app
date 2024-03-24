import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApis from "../../utils/GlobalApis";

interface Slider {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

interface ApiResponse {
  sliders: Slider[];
}

const Slider = () => {
  const [slider, setSlider] = useState<Slider[]>([]);

  const getSliders = () => {
    GlobalApis.getSliders().then((res: unknown) => {
      if (typeof res === "object" && res !== null && "sliders" in res) {
        const sliders = (res as { sliders: Slider[] }).sliders;
        setSlider(sliders);
      }
    });
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 16 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 28,
    objectFit: 'contain',
  },
});
