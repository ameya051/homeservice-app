import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

type Props = {};

const Header = (props: Props) => {
  const { user, isLoaded } = useUser();

  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: Colors.WHITE,fontFamily: 'outfit' }}>Welcome,</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 20,fontFamily: 'outfit-medium' }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={26} color="white" />
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.textInput} placeholder="Search" />
          <FontAwesome
            style={styles.searchBtn}
            name="search"
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  textInput: {
    padding: 8,
    paddingHorizontal: 14,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: 'outfit'
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
