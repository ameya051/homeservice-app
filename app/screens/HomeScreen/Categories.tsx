import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApis from "../../utils/GlobalApis";
import Heading from "../../components/Heading";
import Colors from "../../utils/Colors";

interface Category {
  id: string;
  name: string;
  icon: {
    url: string;
  };
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = () => {
    GlobalApis.getCategories().then((res: unknown) => {
      if (typeof res === "object" && res !== null && "categories" in res) {
        const categories = (res as { categories: Category[] }).categories;
        setCategories(categories);
      }
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={{ marginTop: 8 }}>
      <Heading text={"Categories"} isViewAll />
      <FlatList
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item, index }) =>
          index <= 3 ? (
            <View style={styles.container}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 4 }}>
                {item?.name}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 16,
    borderRadius: 99,
  },
});
