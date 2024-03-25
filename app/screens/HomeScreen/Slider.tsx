import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApis from "../../utils/GlobalApis";
import Heading from "../../components/Heading";

interface Slider {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

const Slider = () => {
  const [sliders, setSliders] = useState<Slider[]>([]);

  const getSliders = () => {
    GlobalApis.getSliders().then((res: unknown) => {
      if (typeof res === "object" && res !== null && "sliders" in res) {
        const sliders = (res as { sliders: Slider[] }).sliders;
        setSliders(sliders);
      }
    });
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View>
      <Heading text={"Offers For You"} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliders}
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
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 28,
    objectFit: "contain",
  },
});
