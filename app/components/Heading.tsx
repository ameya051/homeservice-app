import { StyleSheet, Text, View } from "react-native";
import React from "react";

type headingProps = {
  text: string;
  isViewAll?: boolean;
};

const Heading: React.FC<headingProps> = ({ text, isViewAll = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text style={{fontFamily: 'outfit'}}>View All</Text>}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 8,
  },
});
